// https://www.youtube.com/watch?v=79I-zJsrp4Q

// Algoritmo de búsqueda binaria
// Este algoritmo es muy eficiente para buscar elementos en un arreglo ordenado
// La búsqueda binaria es un algoritmo de búsqueda que encuentra la posición de un valor en un array ordenado.
// Compara el valor con el elemento en el medio del array, si es igual, la búsqueda ha terminado.
// Si el valor es menor, busca en la mitad inferior del array.
// Si el valor es mayor, busca en la mitad superior del array.
// Repite este proceso hasta que el valor sea encontrado o el subarray tenga tamaño 0.
// Complejidad computacional: O(log n)
// Ejemplo:

const arr = [1, 3, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
const valorBuscado = 13;

function busquedaBinaria(arr, valorBuscado) {
    let inicio = 0;
    let fin = arr.length - 1;
    
    while (inicio <= fin) {
        let medio = Math.floor((inicio + fin) / 2);
    
        if (arr[medio] === valorBuscado) { // Si el valor buscado es igual al valor en la posición media
        return medio;
        } else if (arr[medio] < valorBuscado) { // Si el valor buscado es mayor que el valor en la posición media
        inicio = medio + 1; // Buscar en la mitad superior, osea de la mitad para adelante
        } else {
        fin = medio - 1; // Buscar en la mitad inferior, osea de la mitad para atrás
        }
    }
    
    return -1;
}

console.log(busquedaBinaria(arr, valorBuscado)); // indice 8 del array
