//OBJECT.CREATE()

/* 
    Object.create() metodo que crea un nuevo objeto, utilizando un objeto existente como el prototipo del nuevo objeto creado.
*/

const person = {
    isHuman: false,
    printIntroduction: function() {
        console.log(`My name is ${this.name}. Am I human? ${this.isHuman}`);
    }
};

const me = Object.create(person);

me.name = "Matthew"; // "name" is a property set on "me", but not on "person"
me.isHuman = true; // inherited properties can be overwritten

me.printIntroduction();

// tambien se puede hacer lo mismo con setPrototypeOf, pero es menos eficiente en el uso de memoria
const otherPerson = {};
Object.setPrototypeOf(otherPerson, person);

otherPerson.name = "Frank"; // "name" is a property set on "me", but not on "person"
otherPerson.isHuman = true; // inherited properties can be overwritten
otherPerson.printIntroduction();


// Object Create con constructor

const animal = {
    init: function(type) { // constructor
        this.type = type; // this hace referencia al objeto que se esta creando
        return this; // cuando se retorna this en el constructor enlazo los parametros con el objeto
    },  
    printType: function() {
        console.log(`The type of animal is ${this.type}`);
        return this; // cuando se retorna this, se puede encadenar metodos
    }
}

const dog = Object.create(animal).init('dog').printType();