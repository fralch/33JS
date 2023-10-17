/*
    ✔️ ---CALLBACK---
     En palabras sensillas, un callback es una función que se pasa como argumento a otra función
     https://www.youtube.com/watch?v=kjCH7vvISsE
*/

function modificar (arreglo, callback) {
    //hacemos algo ... puede ser asincrono o no
    arreglo.push('Frank'); 
    // despues de hacer algo llamamos a la funcion callback
    // no es necesario que se llame callback, puede ser cualquier nombre
    callback();
}

const arreglo = ['Juan', 'Pedro', 'Laura'];

// llamamos a la funcion modificar y le pasamos el arreglo y una funcion anonima como callback
modificar(arreglo, function() {console.log(arreglo);}); 

// tambien podemos pasarle una funcion declarada, igual seria un callback
function mostrarArreglo() {
    console.log(arreglo);
}
modificar(arreglo, mostrarArreglo);

// tambien podemos pasarle una funcion flecha, igual seria un callback
modificar(arreglo, () => console.log(arreglo));






// 👀 ---Tambien se le puede pasar parametros al callback---

function modificar2 (arreglo, callback) {
    //hacemos algo ... puede ser asincrono o no
    arreglo.push('Frank'); 
    // despues de hacer algo llamamos a la funcion callback
    // no es necesario que se llame callback, puede ser cualquier nombre
    // devolvemos el arreglo como parametro del callback
    callback(arreglo);
}

const arreglo2 = ['Juan', 'Pedro', 'Laura'];

// llamamos a la funcion modificar y le pasamos el arreglo y una funcion anonima como callback
modificar2(arreglo2, function(arreglo) {
    console.log(`ahora la longitud del arreglo es ${arreglo.length}`);
});



// ⌛ ---Tambien se le puede trabajar con funciones  asincronas---

function modificar3 (arreglo, callback) {
    //hacemos algo ... puede ser asincrono o no
    arreglo.push('Frank'); 
    // despues de hacer algo llamamos a la funcion callback
    // no es necesario que se llame callback, puede ser cualquier nombre
    // devolvemos el arreglo como parametro del callback
   setTimeout(() => {
        callback(arreglo);
   }, 3000);
}

const arreglo3 = ['Juan', 'Pedro', 'Laura'];

// llamamos a la funcion modificar y le pasamos el arreglo y una funcion anonima como callback
modificar3(arreglo3, function(arreglo) {
    console.log(`ahora la longitud del arreglo es ${arreglo.length}`);
});




/* 
    🧾 La mayoria de las funciones de js usan callbacks, por ejemplo 
    timesetout, setinterval, addEventListener, etc
*/


/*
    ⚠️ ---DIFERENCIA ENTRE PARAMETRO Y ARGUMENTO---
    
    Parametro: es una variable declarada en la definicion de una funcion
    Argumento: es el valor que se pasa a la funcion cuando se la invoca

    Ejemplo:
    function sumar(a, b) { // a y b son parametros
        return a + b;
    }
    sumar(2, 3); // 2 y 3 son argumentos

    Ejemplo 2:
    funtion restar(parametros){

    }
    restar(argumentos);
 */