// object ASSIGN method
/* 
    Object.assign: se utiliza para copiar los valores de todas las propiedades enumerables de uno o más objetos fuente a un objeto destino. Retorna el objeto destino.
*/

const target = { a: 1, b: 2 };
const source = { b: 4, c: 5 };

const returnedTarget = Object.assign(target, source); // target es el objeto destino, source es el objeto fuente

console.log(returnedTarget); // { a: 1, b: 4, c: 5 }

// clonando un objeto
const persona = {
    name: 'Matthew',
    age: 27,
    isHuman: true
}

const personaClonada = Object.assign({}, persona); // se crea un objeto vacio y se le asignan las propiedades del objeto persona

console.log(personaClonada); // { name: 'Matthew', age: 27, isHuman: true }

console.log(personaClonada === persona); // false, son objetos diferentes

// Advetencia: Object.assign no clona objetos anidados, solo copia su referencia
const address = {
    street: 'Calle falsa',
    number: 123
}

const persona2 = {
    name: 'Matthew',
    age: 27,
    isHuman: true,
    address
}


const personaClonada2 = Object.assign({}, persona2);
console.log(personaClonada2)

console.log(personaClonada2.address === persona2.address); // true, son el mismo objeto
