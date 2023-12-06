// reduce 
/*  
    reduce(): es un metodo que ejecuta una funcion reductora sobre cada elemento de un array, 
    devolviendo como resultado un unico valor
*/

const carrito = [
    { nombre: 'Monitor de 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

// con reduce se puede sumar todos los precios de los productos del carrito
let total = 0;
carrito.forEach(producto => total += producto.precio); // se recorre el arreglo y se suma el precio de cada producto

// con reduce se puede sumar todos los precios de los productos del carrito
let resultado = carrito.reduce((total, producto) =>  { // en el primer parametro se pasa el valor inicial de la variable total y en el segundo parametro se pasa el producto que se esta iterando
    return total + producto.precio; // se retorna el total mas el precio del producto
},0);  // se pasa el valor inicial de la variable total

console.log(resultado);

// con reduce se puede crear un nuevo arreglo con los precios de los productos del carrito usando un array vacio como valor inicial de la variable total
const numeros = [1, 2, 3, 4, 5];

const numerosDobles = numeros.reduce((nuevoArray, numero) => {
        nuevoArray.push(numero * 2);
        return nuevoArray;
}, []); // se pasa un arreglo vacio como valor inicial de la variable total

console.log(numerosDobles);

