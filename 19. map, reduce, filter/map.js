// FUNCIONES DE ORDEN SUPERIOR (HIGHER ORDER FUNCTIONS)

// MAP
// El método map() crea un nuevo array con los resultados de la llamada a la función indicada aplicados a cada uno de sus elementos.

const numeros = [1, 2, 3, 4, 5];

const numerosDobles = numeros.map(
    function (numero, posision, arreglo) {
        console.log(numero, posision, arreglo); // numero es el elemento del arreglo, posision es la posicion del elemento en el arreglo, arreglo es el arreglo completo
        // no es necesario utilizar todos los parametros solo el primero que es el elemento del arreglo
        return numero * 2;
    }    
);

const numerosDobles2 = numeros.map(numero => numero * 2); // es lo mismo que la funcion de arriba pero con arrow function

// En map no se modifica el arreglo original, se crea un nuevo arreglo con los elementos modificados
// no se pude utilizar break ni continue en map 
// map siempre retorna un nuevo arreglo
// no se pude usar async await en map