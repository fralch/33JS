// Type Arrays and Array Buffers de javascript

// Array Buffers
// Un array buffer es un objeto que representa un buffer de datos binarios
// Un buffer es un espacio de memoria en el que se almacenan datos de forma temporal

// Crear un array buffer
let buffer = new ArrayBuffer(8);
console.log(buffer.byteLength); // 8

// Crear un array buffer a partir de un array
let array = [1, 2, 3];
buffer = new ArrayBuffer(array.length);
console.log(buffer.byteLength); // 3

// Typed Arrays
// Los typed arrays son arrays que permiten almacenar datos binarios de forma eficiente
// Los datos binarios se almacenan en un array buffer   

// Crear un typed array
let typedArray = new Int8Array(8);
console.log(typedArray.length); // 8
console.log(typedArray.byteLength); // 8
console.log(typedArray.BYTES_PER_ELEMENT); // 1

// Crear un typed array a partir de un array
typedArray = new Int8Array(array);
console.log(typedArray.length); // 3
console.log(typedArray.byteLength); // 3
console.log(typedArray.BYTES_PER_ELEMENT); // 1

// Crear un typed array a partir de un array buffer
typedArray = new Int8Array(buffer);
console.log(typedArray.length); // 3
console.log(typedArray.byteLength); // 3
console.log(typedArray.BYTES_PER_ELEMENT); // 1

