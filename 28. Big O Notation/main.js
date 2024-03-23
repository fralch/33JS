//https://www.youtube.com/watch?v=MyAiCtuhiqQ&t=2s
/* 
Big O Notation es un concepto importante en la teoría de la complejidad computacional, 
que se utiliza para describir el rendimiento de un algoritmo en función del tamaño de la entrada. 
En JavaScript, la notación Big O se puede utilizar para evaluar la eficiencia de una función o algoritmo 
y determinar cómo escala su rendimiento a medida que aumenta el tamaño de los datos de entrada.

La notación Big O se expresa en términos de la letra "O" seguida de una función matemática 
que representa la complejidad del algoritmo. Por ejemplo, si una función tiene una complejidad de O(n),
 esto significa que el tiempo de ejecución de la función aumenta linealmente con el tamaño de la entrada. 
 Si una función tiene una complejidad de O(n^2), esto significa que el tiempo de ejecución aumenta 
 exponencialmente con el tamaño de la entrada.
*/



//Ejemplo 1: O(1)
/*
En este ejemplo, la función obtenerPrimerElemento siempre devuelve el primer elemento de un arreglo, 
por lo que su complejidad es O(1), ya que el tiempo de ejecución no depende del tamaño del arreglo.
 */
function obtenerPrimerElemento(arreglo) {
    return arreglo[0];
  }
  
  const arreglo = [1, 2, 3, 4, 5];
  console.log(obtenerPrimerElemento(arreglo)); // O(1)

//Ejemplo 2: O(n)
/*
En este ejemplo, la función sumarArreglo utiliza un bucle for para sumar todos los elementos de un arreglo. 
La complejidad de esta función es O(n), ya que el tiempo de ejecución aumenta linealmente con el tamaño 
del arreglo.
 */
function sumaArreglo(arreglo2) {
    let suma = 0;
    for (let i = 0; i < arreglo2.length; i++) {
      suma += arreglo2[i];
    }
    return suma;
  }
  
  const arreglo2 = [1, 2, 3, 4, 5];
  console.log(sumaArreglo(arreglo2)); // O(n)


  //Ejemplo 3: O(n^2)
  /*
  En este ejemplo, la función encontrarDuplicados utiliza dos bucles anidados para comparar c
  ada par de elementos en un arreglo y encontrar duplicados. La complejidad de esta función es O(n^2), 
  ya que el tiempo de ejecución aumenta exponencialmente con el tamaño del arreglo.
   */
  function encontrarDuplicados(arreglo3) {
    let duplicados = [];
    for (let i = 0; i < arreglo3.length; i++) {
      for (let j = i + 1; j < arreglo3.length; j++) {
        if (arreglo3[i] === arreglo3[j]) {
          duplicados.push(arreglo3[i]);
        }
      }
    }
    return duplicados;
  }
  
  const arreglo3 = [1, 2, 3, 4, 4, 5];
  console.log(encontrarDuplicados(arreglo3)); // O(n^2)
  
  //Ejemplo 4: O(log n)
  /*
  En este ejemplo, la función busquedaBinaria utiliza un algoritmo de búsqueda binaria para 
  encontrar un valor en un arreglo ordenado. La complejidad de esta función es O(log n), 
  ya que el tiempo de ejecución aumenta logarítmicamente con el tamaño del arreglo.
   */
  function busquedaBinaria(arreglo4, valor) {
    let inicio = 0;
    let fin = arreglo4.length - 1;
  
    while (inicio <= fin) {
      let medio = Math.floor((inicio + fin) / 2); // Dividir el arreglo en dos partes
  
      if (arreglo4[medio] === valor) {  // Comprobar si el valor está en el medio
        return medio;
      }
  
      if (arreglo4[medio] < valor) {  // Si el valor es mayor que el valor medio, buscar en la mitad derecha
        inicio = medio + 1;
      } else {
        fin = medio - 1;
      }
    }
  
    return -1; 
  }
  
  const arreglo4 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
  console.log(busquedaBinaria(arreglo4, 7)); // O(log n)
  

  //Ejemplo 5: O(n log n)
    /*
    En este ejemplo, la función mergeSort utiliza un algoritmo de ordenamiento de fusión para ordenar 
    un arreglo. La complejidad de esta función es O(n log n), ya que el tiempo de ejecución aumenta 
    linealmente con el tamaño del arreglo, pero también tiene un componente logarítmico debido a la 
    división y conquista recursiva del algoritmo.
     */
    function mergeSort(arreglo5) {
        if (arreglo5.length <= 1) { // Caso base: si el arreglo tiene 0 o 1 elemento, ya está ordenado
          return arreglo5;
        }
      
        let medio = Math.floor(arreglo5.length / 2); // Dividir el arreglo en dos mitades
        let izquierda = arreglo5.slice(0, medio); // Dividir el arreglo en mitad izquierda
        let derecha = arreglo5.slice(medio); // Dividir el arreglo en mitad derecha
      
        izquierda = mergeSort(izquierda); // Ordenar la mitad izquierda
        derecha = mergeSort(derecha); // Ordenar la mitad derecha
      
        return merge(izquierda, derecha); // Combinar las dos mitades ordenadas
      }
      
      function merge(izquierda, derecha) { // Función para combinar dos arreglos ordenados
        let resultado = [];
        let i = 0;
        let j = 0;
      
        while (i < izquierda.length && j < derecha.length) { // Combinar los elementos de ambos arreglos
          if (izquierda[i] < derecha[j]) { // Comparar los elementos de los dos arreglos
            resultado.push(izquierda[i]);
            i++;
          } else {
            resultado.push(derecha[j]); // Agregar el elemento más pequeño al resultado
            j++;
          }
        }
      
        while (i < izquierda.length) { // Agregar los elementos restantes de la mitad izquierda
          resultado.push(izquierda[i]); 
          i++;
        }
      
        while (j < derecha.length) { // Agregar los elementos restantes de la mitad derecha
          resultado.push(derecha[j]);
          j++;
        }
      
        return resultado;
      }
      
      const arreglo5 = [4, 5, 2, 3, 1];
      console.log(mergeSort(arreglo5)); // O(n log n)
      