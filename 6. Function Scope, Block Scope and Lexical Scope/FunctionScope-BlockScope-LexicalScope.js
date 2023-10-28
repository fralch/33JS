//6. Function Scope, Block Scope and Lexical Scope
/*
    Scope es entorno de una variable, es decir, donde vive una variable y donde no.
    el scope le da a las variables un alcance, es decir, donde pueden ser llamadas y donde no.

 */

    // Lexical Scope: El scope se determina en tiempo de compilación, es decir, cuando se esta leyendo el programa, sin ejecutarlo.

    // scope vs context
        // scope: es el entorno o (contexto de ejecucion que es diferente al context )de una variable, es decir, donde vive una variable y donde no.
        // context: es el valor que tiene this en una función, es decir, a que hace referencia this en una función.

    // Scope Global: las variables que estan en el scope global pueden ser llamadas en cualquier parte del programa.
        var hello = 'Hello'; /* scope global porque esta fuera de una función. y puede ser 
        llamada en cualquier parte del programa sin importar si esta dentro de una función o no. 
        no importa si es var, let o const, si esta fuera de una función es scope global.
        */

    
    // Scope Local: las variables que estan en el scope local solo pueden ser llamadas dentro de la función donde fueron creadas.
        // Scope de función: las variables que estan en el scope de una función solo pueden ser llamadas dentro de la función donde fueron creadas.
        // ejemplo:

        const helloWorld = () => {
            const hello = 'Hello World'; // scope local porque esta dentro de una función.
            if (true) {
                var otherHello = 'Hello'; /* por ser var, esta variable se puede llamar fuera del bloque donde fue creada, 
                por eso se dice que var no respeta el scope de bloque por el hoisting. */
                console.log(hello);
            }
            console.log(hello);
        }

        // Scope de bloque: las variables que estan en el scope de un bloque solo pueden ser llamadas dentro del bloque donde fueron creadas.
            // Un bloque es todo lo que esta dentro de llaves {}.

            if (true) {
                let frutas = 'Manzana'; // scope de bloque porque esta dentro de un bloque.
            }
            console.log(frutas); // no se puede llamar porque esta fuera del bloque donde fue creada.

    
    // Variable Shadowing: es cuando una variable local tiene el mismo nombre que una variable global, 
    //y la variable local esta dentro de una función.

        var scope = 'I am global'; // scope global

        const functionScope = () => {
            if (true) {
                var scope = 'I am just a local'; // scope local
                console.log(scope);
            }
        }
        // en este caso la variable scope local esta sombreando a la variable scope global. y la variable scope global no se puede llamar.
