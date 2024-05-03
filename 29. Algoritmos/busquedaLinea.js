
  // Busqueda de una linea en un array: 
  /*
  La búsqueda lineal es un algoritmo simple que recorre un array en busca de un valor específico.
  Compara cada elemento del array con el valor buscado hasta encontrarlo o hasta que el array se agote.
  La búsqueda lineal es menos eficiente que la búsqueda binaria, pero es más simple y funciona en 
  arrays no ordenados.

   */
  // Complejidad computacional: O(n)
  // Ejemplo:

  const arr = [1, 3, 5, 7, 8, 9, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20];
  const valorBuscado = 13;

  function busquedaLineal(arr, valorBuscado) {
      for (let i = 0; i < arr.length; i++) {
          if (arr[i] === valorBuscado) {
              return i;
          }
      }
      
      return -1;
  }
  