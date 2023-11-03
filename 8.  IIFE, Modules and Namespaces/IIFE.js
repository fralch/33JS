// 1. IIFE: es una función que se ejecuta inmediatamente después de ser creada.
// Self-Executing Anonymous Function
// Self-Invoked Anonymous Function

    //  ejemplo:
    (function() {
        console.log('Hola');
    })(); // es una IIFE porque se ejecuta inmediatamente después de ser creada.

    // Nota: las IIFE se usan para encapsular código y evitar que se mezcle con el código global o scope global.
    // Ejemplo Jquery:
    (function(w, d){
        console.log(w); // window
    })(window, document); 