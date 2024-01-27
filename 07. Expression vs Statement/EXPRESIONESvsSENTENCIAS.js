// 7. Expression vs Statement en JavaScript y en español
/* 
  Una Expression es una unidad de código que produce un valor.
*/

// 7.1. Expresiones primarias : Cualquier valor primitivo es una expresión primaria, por que con una sola palabra podemos crear un valor.
    let unVariable ; 
    unVariable = 1; // 1 es una expresión primaria porque es un valor primitivo.
    unVariable = 'Hola'; // 'Hola' es una expresión primaria porque es un valor primitivo.
    unVariable = true; // true es una expresión primaria porque es un valor primitivo.
    unVariable = false; // false es una expresión primaria porque es un valor primitivo.
    unVariable = null; // null es una expresión primaria porque es un valor primitivo.
 
//  7.2. Expresiones funciones: Una función es una expresión porque produce un valor.
    function unaFuncion() {
        return 1;
    }
    unaFuncion(); // 1 es el valor que produce la función unaFuncion(). por eso unaFuncion() es una expresión.


// Statement o sentencia: es una unidad de código que no produce un valor.
// es una acción qye javascript ejecuta para que ocurra algo, por lo general terminan con un punto y coma (;).

    // sentencia de expresión: es una expresión que termina con un punto y coma (;).
    'un texto'; // es una sentencia de expresión porque es una expresión que termina con un punto y coma (;).
    123; 
    true;

    // sentencia vacía: es una sentencia que termina con un punto y coma (;) pero no tiene nada dentro.
    const arr=[]; 
    for( let i; i<= 99; arr[i++]=i); // es una sentencia vacía porque no tiene nada dentro.

    // sentencia de bloque: es una sentencia que esta dentro de llaves {}.
     if (true) {
         console.log('Hola');
     } // es una sentencia de bloque porque esta dentro de llaves {}.

     // sentencia de declaración: es una sentencia que declara una variable.
     let nombre='Frank', edad = 28, masculino // es una sentencia de declaración porque declara multiples variables.
  
    // semtencia de funcion vs expresión de función
        // sentencia de función: es una sentencia que declara una función.
        function unaFuncion() {
            return 1;
        } // es una sentencia de función porque declara una función.

        // expresión de función: es una expresión que declara una función.
        const unaFuncion = function() {
            return 1;
        } // es una expresión de función porque declara una función.


    // Hoisting: es cuando las declaraciones de variables y funciones se mueven al inicio del código.
        saludar(); 

        function saludar() {
            console.log('Hola');
        } // esto es hoisting porque la función saludar() se mueve al inicio del código.

        // Nota: las expresiones no se mueven al inicio del código, solo las declaraciones de variables y funciones.
            // ejemplo:
            saludar(); // esto da error porque la expresión saludar() no se mueve al inicio del código.
            const saludar = function() {
                console.log('Hola');
            } // esto no es hoisting porque la expresión saludar() no se mueve al inicio del código.

        // sentencia de control: es una sentencia que controla el flujo del programa.
            // ejemplo:
            switch (key) {
                    case value:
                        
                        break;
                
                    default:
                        break;
                } // es una sentencia de control porque controla el flujo del programa.

        // sentencia de salto: es una sentencia que salta a una parte del código.
            // ejemplo:
            // continue; // es una sentencia de salto porque salta a una parte del código.
            // break; // es una sentencia de salto porque salta a una parte del código.
            // return; // es una sentencia de salto porque salta a una parte del código.
            // throw; // es una sentencia de salto se para lanzar una excepción o error.
            // goto; // es una sentencia de salto porque salta a una parte del código.
                // Nota: el uso de las sentencias de salto no es recomendable porque puede causar problemas en el código.
        
        // sentencia miscelanea: es una sentencia que no se puede clasificar en ninguna de las anteriores.
            // ejemplo:
            debugger; // es una sentencia miscelanea porque no se puede clasificar en ninguna de las anteriores.
            with (obj) { // es una sentencia miscelanea porque no se puede clasificar en ninguna de las anteriores.
                // sentencias
            }
            'Use strict'; // es una sentencia miscelanea porque no se puede clasificar en ninguna de las anteriores.

        