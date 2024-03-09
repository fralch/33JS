/*
        Una pila es una estructura de datos que sigue el principio de Last In, First Out (LIFO), 
    lo que significa que el último elemento añadido a la pila es el primero en ser eliminado
        Push (Empujar): Agrega un elemento a la parte superior de la pila.
        Pop (Quitar): Elimina el elemento más reciente agregado a la pila.

        En JavaScript, no hay una implementación específica de una estructura
    de datos llamada "pila" en el sentido clásico. Sin embargo, 
    puedes utilizar un array para simular una pila de manera efectiva. 
    Las operaciones push y pop de un array se pueden usar para imitar el 
    comportamiento de una pila.
    https://www.youtube.com/watch?v=HB5ksj6Op8c
*/

// Inicializar una pila vacía
let pila = [];

// Agregar elementos a la pila
pila.push(1);
pila.push(2);
pila.push(3);

console.log("Pila después de agregar elementos:", pila);

// Quitar elementos de la pila (LIFO - último en entrar, primero en salir)
let elementoEliminado = pila.pop();
console.log("Elemento eliminado de la pila:", elementoEliminado);

console.log("Pila después de quitar elementos:", pila);
