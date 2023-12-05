// Filter 
/* 
    filter es un metodo que crea un nuevo arreglo con todos los elementos que cumplan la condicion implementada 
    por la funcion dada
*/

const productos = [
    { nombre: 'Monitor de 27 pulgadas', precio: 500 },
    { nombre: 'Televisor', precio: 100 },
    { nombre: 'Tablet', precio: 200 },
    { nombre: 'Audifonos', precio: 300 },
    { nombre: 'Teclado', precio: 400 },
    { nombre: 'Celular', precio: 700 },
]

const productosBaratos = productos.filter(producto => producto.precio < 400); // se crea un nuevo arreglo con los productos que cuestan menos de 400


// Numeros repetidos
const numerosRepetidos = [1, 2, 3, 1, 2, 3, 4, 2, 3, 4, 5, 6];

const numerosUnicos = numerosRepetidos.filter((numero, posicion, arreglo) => {
    console.log(numero, posicion, arreglo);
    return arreglo.indexOf(numero) === posicion; // se compara el indice del numero con la posicion del numero en el arreglo, si son iguales significa que es un numero unico
  
}); // se crea un nuevo arreglo con los numeros unicos