/* En las funciones contructoras de objetos, se usa prototype para agregar metodos
    * a la funcion constructora, y asi no tener que agregarlos a cada objeto que se cree
    * con esa funcion constructora.
    * 
    * Ejemplo:
    * 
    * function Persona(nombre, apellido, altura) {
    *     this.nombre = nombre
    *     this.apellido = apellido
    *     this.altura = altura
    * }
    * 
    * Persona.prototype.saludar = function () {
    *     console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    * }
    * 

    * var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
 
    * sacha.saludar()
    
    *  
*/
// HERENCIA PROTOTIPAL
    /* 
    *setPrototypeOf* es una funcion que permite agregar un prototipo a un OBJETO
        *
        * Ejemplo:
        * 
    */
    
    const cheff = {
        tipo: 'Cocina Basica', 
        especialidad: 'Pastas', 
        cocinar : function () {
            console.log(`Cocinando ${this.especialidad}`)
        }
    }

    const frank = {
        nombre: 'Frank',
        apellido: 'Gonzalez', 
        profesion : 'Developer'
    }

    Object.setPrototypeOf(frank, cheff) // Agregando el prototipo cheff al objeto frank
    /* 
        asi quedaria el objeto frank :
        frank = {
            nombre: 'Frank',
            apellido: 'Gonzalez', 
            profesion : 'Developer',
            tipo: 'Cocina Basica', 
            especialidad: 'Pastas', 
            cocinar : function () {
                console.log(`Cocinando ${this.especialidad}`)
            }
        }

        Aun que realmente no se agregan las propiedades al objeto, sino que se agrega una referencia
        osea primero se busca en el objeto frank, si no se encuentra, se busca en el prototipo cheff
        pero si tienen el mismo nombre, se usa el del objeto frank y no el del prototipo cheff (propertie shadowing)
    */

    cheff.cortar = function (ingrediente) {
        console.log(`Cortando ${ingrediente}`)
    }

    frank.cortar('Tomate') // Cortando Tomate : esto funciona por que la busqueda se hace en tiempo de ejecucion.

// CADENA DE PROTOTIPOS - PROTOTYPE CHAIN

    /*
        Cuando se hace una busqueda de una propiedad en un objeto, si no se encuentra, se busca en el prototipo
        de este objeto, y si no se encuentra, se busca en el prototipo del prototipo y asi sucesivamente.
        Esto se llama cadena de prototipos o prototype chain.
    */

    frank.toString === Object.prototype.toString // true
    /* 
        esto es por que todos los objetos heredan de Object.prototype
        y por lo tanto tienen acceso a sus metodos. a esto se le llama  prototype chain

    */

    Object.prototype.__proto__ // null
    /* 
        esto es por que Object.prototype no tiene un prototipo, es el final de la cadena de prototipos.
    */

// sacando el prototipo de un objeto
    Object.getPrototypeOf(frank) // {tipo: "Cocina Basica", especialidad: "Pastas", cocinar: ƒ}

// saber si un objeto tiene una prototipo
    Object.getPrototypeOf(frank) === cheff // true
    frank.__proto__ === cheff // true
    cheff.isPrototypeOf(frank) // true


// this en la cadena de prototipos
    /* 
        cuando se llama a un metodo de un objeto, el this hace referencia al objeto que lo llama.
        pero si este metodo no se encuentra en el objeto, se busca en el prototipo, y el this
        sigue haciendo referencia al objeto que lo llama, no al prototipo.
    */

    const cheff2 = {
        tipo: 'Cocina Basica', 
        especialidad: 'Pastas', 
        cocinar : function () {
            console.log(`Cocinando ${this.especialidad}`)
        }, 
        presentarse: function () {
            console.log(`Hola, soy ${this.nombre} ${this.tipo}`)
        }
    }

    const frank2 = {
        nombre: 'Frank',
        apellido: 'Gonzalez', 
        profesion : 'Developer',
        tipo: 'Full Stack'
    }

    Object.setPrototypeOf(frank2, cheff2)

    frank2.presentarse() // Hola, soy Frank Full Stack
    /* 
        esto es por que el metodo presentarse no se encuentra en el objeto frank2, pero si en el prototipo
        cheff2, pero el this sigue haciendo referencia al objeto frank2.
        This enlace implicito : el this hace referencia al objeto que lo llama. o al objeto que esta a la izquierda del punto.
    */

// Objet create

    /*
        Object.create() es una funcion que permite crear un objeto con un prototipo especifico.
        es una alternativa a la funcion constructora.
    */

    const cheff3 = {
        tipo: 'Cocina Basica', 
        especialidad: 'Pastas', 
        cocinar : function () {
            console.log(`Cocinando ${this.especialidad}`)
        }, 
        presentarse: function () {
            console.log(`Hola, soy ${this.nombre} ${this.tipo}`)
        }
    }

    const frank3 = Object.create(cheff3) // creando un objeto con el prototipo cheff3