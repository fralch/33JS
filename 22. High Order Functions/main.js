//22. High Order Functions o funciones de orden superior en JavaScript

/* 
    Las funciones de orden superior son funciones que reciben como parámetro otra función y/o 
    devuelven una función como resultado. En JavaScript, todas las funciones son funciones de 
    orden superior, ya que pueden recibir y devolver valores.
    
    Las funciones de orden superior son muy útiles para crear funciones genéricas que puedan
    ser utilizadas en diferentes contextos y con diferentes parámetros.

*/

// Ejemplo 1: Función que recibe otra función como parámetro
function ejecutarFuncion(fn) {
    fn();
}

function decirHola() {
    console.log("Hola");
}

ejecutarFuncion(decirHola); // Resultado: Hola

// Ejemplo 2: Función que devuelve otra función como resultado
function sumar(x) {
    return function (y) {
        return x + y;
    };
}

const sumar5 = sumar(5)(2);
const sumar10 = sumar(10);

console.log(sumar5); // Resultado: 7
console.log(sumar10(2)); //  Resultado: 12

// y claro el map, filter, reduce son funciones de orden superior 