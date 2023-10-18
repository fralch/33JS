// Aprendiendo Value Types and Reference Types de JS
//https://www.youtube.com/watch?v=AvkyOrWkuQc

// Value Types
    /*
        Cuando se asigna un valor a una variable, se almacena en la memoria.
        y cuando se asigna a otra variable, se copia el valor. 
        Por lo tanto, cada variable tiene su propia copia del valor. no significa que esten relacionadas.
        o que sean la misma variable. 
        El valor en memoria de X es 10 y el valor en memoria de Y tambien es 10 pero no son expecificamente 
        el mismo numero en memoria. sino que son dos numeros diferentes. que simbolizan el mismo valor.
        EN OTRAS PALABRAS NO SE COPIA LA REFERENCIA A LA MEMORIA. SINO QUE SE COPIA EL VALOR EN MEMORIA.
    */
    let x = 10;
    let y = x;

    x = 20;


// Reference Types
    /*
        Cuando se asigna un objeto a una variable, no se almacena el objeto en la variable.
        Sino que se almacena la referencia al objeto en la memoria. 
        Y cuando se asigna a otra variable, se copia la referencia al objeto. 
        Por lo tanto, ambas variables apuntan al mismo objeto en memoria.
        EN OTRAS PALABRAS SE COPIA LA REFERENCIA A LA MEMORIA. NO SE COPIA EL VALOR EN MEMORIA.
    */
    let a = { value: 10 };
    let b = a;

    a.value = 20;

    // para copiar el valor de un objeto a otro objeto se usa el metodo Object.assign()
    let obj = { value: 10 };
    let obj2 = Object.assign({}, obj);

    // para copiar el valor de un objeto a otro objeto se usa el operador spread o conocido en español como operador de propagacion
    let obj3 = { ...obj };

    

