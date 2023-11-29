// Clases en javascript
// Las clases en javascript son introducidas en el ECMAScript 2015 y son una mejora en la 
//sintaxis sobre la herencia basada en prototipos de javascript.

// La palabra clave extends se usa en declaraciones de clase o expresiones de clase para crear
// una clase que es hija de otra clase.

// El método constructor es un método especial para crear e inicializar un objeto creado a partir de una clase.

// El operador instanceof devuelve true si el objeto especificado es del tipo especificado.

// Las instancias son la creación de una clase particular.

// Ejemplo:

class Persona {
    constructor(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }
    soyAlto() {
        return this.altura > 1.8
    }
}

class Desarrollador extends Persona {
    constructor(nombre, apellido, altura) {
        super(nombre, apellido, altura)
    }
    saludar() {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido} y soy desarrollador/a`)
    }
}

var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
var erika = new Persona('Erika', 'Luna', 1.65)
var arturo = new Persona('Arturo', 'Martinez', 1.89)

sacha.saludar()
erika.saludar()

sacha.soyAlto()

arturo.saludar()
arturo.soyAlto()

// instanceof
sacha instanceof Persona // true
sacha instanceof Desarrollador // false

/* Las instancias son la creación de una clase particular. 
 */


// Haciendolo con funciones
    function Persona(nombre, apellido, altura) {
        this.nombre = nombre
        this.apellido = apellido
        this.altura = altura
    }


    /* 
        como funciona el prototype:  cuando se crea una funcion, esta tiene un atributo llamado prototype 
        que es un objeto y este objeto tiene un atributo llamado constructor que apunta a la funcion que
        se creo.
    */
    Persona.prototype.saludar = function () {
        console.log(`Hola, me llamo ${this.nombre} ${this.apellido}`)
    }


    Persona.prototype.soyAlto = function () {
        return this.altura > 1.8
    }

    var sacha = new Persona('Sacha', 'Lifszyc', 1.72)
    var erika = new Persona('Erika', 'Luna', 1.65)
