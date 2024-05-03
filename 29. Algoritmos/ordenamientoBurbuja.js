//Ordenamiento de burbuja (Bubble Sort)
/* 
El algoritmo de ordenamiento de burbuja es un algoritmo simple que recorre un array y compara cada 
par de elementos adyacentes y los intercambia si están en el orden incorrecto.
El proceso se repite hasta que no se requiere ningún intercambio.
El algoritmo obtiene su nombre porque los elementos más pequeños "burbujean" hasta la parte superior
del array.
El ordenamiento de burbuja es uno de los algoritmos de ordenamiento más simples y menos eficientes.
Complejidad computacional: O(n^2)
Ejemplo:
*/

const arr = [5, 3, 8, 4, 2, 1, 9, 7, 6];

function ordenamientoBurbuja(arr) {

    for (let i = 0; i < arr.length; i++) { // Recorre el array
        for (let j = 0; j < arr.length - 1; j++) { // Recorre el array - 1, se resta 1 porque se compara con el siguiente
            if (arr[j] > arr[j + 1]) { // Si el elemento actual es mayor que el siguiente
                let temp = arr[j]; // Intercambia los elementos
                arr[j] = arr[j + 1]; // Intercambia los elementos
                arr[j + 1] = temp; // Intercambia los elementos
            }
        }
    }

    return arr;
}

console.log(ordenamientoBurbuja(arr)); // [1, 2, 3, 4, 5, 6, 7, 8, 9]


// Burbuja bidireccional
/*
El ordenamiento de burbuja bidireccional es una variante del ordenamiento de burbuja que recorre el array
en ambas direcciones alternativamente.
En cada iteración, el algoritmo realiza un paso hacia adelante y un paso hacia atrás.
El proceso se repite hasta que no se requiere ningún intercambio.
El ordenamiento de burbuja bidireccional es más eficiente que el ordenamiento de burbuja tradicional.
Complejidad computacional: O(n^2)

https://upload.wikimedia.org/wikipedia/commons/e/ef/Sorting_shaker_sort_anim.gif

Ejemplo:
*/

const arr2 = [5, 3, 8, 4, 2, 1, 9, 7, 6];

function ordenamientoBurbujaBidireccional(arr2) { 
    let inicio = 0; 
    let fin = arr2.length - 1; // Se resta 1 porque el array empieza en 0
    let intercambio = true; // Variable para saber si se hizo un intercambio

    while (inicio < fin && intercambio) { // Mientras el inicio sea menor que el final y haya un intercambio
        intercambio = false; // Se inicializa en false

        for (let i = inicio; i < fin; i++) { // Recorre el array de inicio a fin
            if (arr2[i] > arr2[i + 1]) { // Si el elemento actual es mayor que el siguiente
                let temp = arr2[i]; // Intercambia los elementos
                arr2[i] = arr2[i + 1]; // Intercambia los elementos
                arr2[i + 1] = temp; // Intercambia los elementos
                intercambio = true; // Se cambia a true para indicar que hubo un intercambio y seguir con el ciclo while
            } 
        }

        fin--; // Se decrementa el final para no volver a comparar el último elemento del array porque ya está ordenado

        for (let i = fin; i > inicio; i--) { // Recorre el array de fin a inicio
            if (arr2[i] < arr2[i - 1]) { // Si el elemento actual es menor que el anterior
                let temp = arr2[i]; // Intercambia los elementos
                arr2[i] = arr2[i - 1]; // Intercambia los elementos
                arr2[i - 1] = temp;  // Intercambia los elementos
                intercambio = true;     // Se cambia a true para indicar que hubo un intercambio y seguir con el ciclo while
            }
        }

        inicio++; // Se incrementa el inicio para no volver a comparar el primer elemento del array porque ya está ordenado
    }

    return arr2;
}