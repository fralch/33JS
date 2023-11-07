/* 
    Namespaces
    En JavaScript, las "namespaces" no son un concepto nativo del lenguaje, como lo son en otros lenguajes de 
    programación como C# o C++. Sin embargo, el término "namespace" a menudo se utiliza en JavaScript para referirse 
    a una técnica que se emplea para evitar conflictos de nombres entre diferentes piezas de código. 
    Esto se hace creando objetos o contenedores que actúan como namespaces y encapsulan variables y funciones 
    para evitar colisiones de nombres.

    Un ejemplo común de cómo se pueden crear "namespaces" en JavaScript es mediante el uso de objetos. 
    Aquí hay un ejemplo simple:
*/
    let MiNamespace = {
        variable1: 42,
        variable2: "Hola",
        funcion1: function() {
        console.log("Esta es la función 1");
        },
        funcion2: function() {
        console.log("Esta es la función 2");
        }
    };

    /*
    En este caso, MiNamespace es un objeto que actúa como un espacio de nombres. Puedes acceder a las variables y 
    funciones dentro de este objeto utilizando la notación de punto, por ejemplo, 
    MiNamespace.variable1 o MiNamespace.funcion1().

    El propósito principal de utilizar "namespaces" en JavaScript es evitar conflictos de nombres entre 
    diferentes partes de tu código, especialmente cuando estás trabajando en proyectos grandes o incluyendo 
    múltiples bibliotecas externas. Al encapsular tus variables y funciones en un objeto o contenedor, reduces el 
    riesgo de que colisionen con otros identificadores en el ámbito global.
    */

    /* 
    En C++, un "namespace" es un mecanismo que permite agrupar variables, funciones y clases en un espacio de nombres, 
    lo que ayuda a evitar colisiones de nombres y a organizar el código de manera más estructurada. 
    Esto es especialmente útil en proyectos grandes o cuando se utilizan múltiples bibliotecas.

    Aquí hay un ejemplo de cómo se declara y se utiliza un "namespace" en C++:
    */
   
    /* 
    #include <iostream>

    namespace MiNamespace {
        int variable1 = 42;

        void funcion1() {
            std::cout << "Esta es la función 1" << std::endl;
        }
    }

    int main() {
        MiNamespace::funcion1();
        std::cout << "Valor de variable1: " << MiNamespace::variable1 << std::endl;
        return 0;
    }
    */