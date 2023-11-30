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
