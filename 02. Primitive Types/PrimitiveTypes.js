// En js hay 7 tipos de datos primitivos
/* 
    Hay dos tipos de datos en js: los primitivos y los objetos
    Los primitivos son los que no son objetos y los objetos son los que tienen propiedades y métodos
    L
*/
// 1. Number: IEEE 754-2008 (64 bits o 8 bytes): forma de representar los números en js
    let edad = 30;
    let precio = 20.5; 
    
    let resultado = 10 / 0; // Infinity 
    console.log(resultado);

    resultado = 10 / "2"; // 5
    console.log(resultado);

    resultado = 10 / "Juan"; // NaN
    console.log(resultado);

    // sumas no exactas con decimales 
    resultado = 0.1 + 0.2; // 0.30000000000000004
    console.log(resultado);

    resultado = 0.1 + 0.2 == 0.3; // false
    console.log(resultado);

    // toFixed() devuelve un string con el número de decimales que le pasemos
    let numero = (0.1 + 0.2).toFixed(2); // 0.30
    console.log(typeof numero); // string
    // Number() convierte un string a número
    numero = Number(numero); // 0.3
    console.log(typeof numero); // number
    // Agregar un + antes de la expresión convierte el string a número
    let numero2 = +(0.1 + 0.2).toFixed(2); // 0.3
    console.log(typeof numero2); // number

    // numero maximo y minimo
    let numMax = (2 ** 53) - 1; // 9007199254740991
    let numMin = -(2 ** 53) - 1; // -9007199254740991

    // Number.MAX_SAFE_INTEGER: 9007199254740991
    // Number.MIN_SAFE_INTEGER: -9007199254740991

    /* 
        Los numeros maximos y minimos en js son seguros hasta 15 digitos  
        hacer operaciones con numeros mas grandes que estos puede dar resultados inesperados
    */

    numMax + 1 == numMax + 2; // true

    /* 
        Para saber si un numero esta en el rango seguro se usa Number.isSafeInteger()
    */
     Number.isSafeInteger(5555); // true

     /* 
        NaN no es igual a nada, ni siquiera a si mismo
     */
    NaN == NaN; // false
    // Number.isNaN() devuelve true si el valor es NaN
    Number.isNaN(10 / "Juan"); // true

    // Number.isFinite() devuelve true si el valor es un numero finito
    Number.isFinite(10 / "Juan"); // false

    // Los numeros mas grandes y mas pequeños en js son estos, pero no son seguros para operar, son solo para aproximaciones 
    Number.MAX_VALUE;  // 1.7976931348623157e+308
    Number.MIN_VALUE;  // 5e-324

// 2. String: Js usa UTF-16 para representar los caracteres
    let nombre = "Juan";
    let apellido = 'Perez';
    let saludo = `Hola ${nombre} ${apellido}`;
// 3. Boolean
        /* 
            Valores falsos: false, 0, "", '', ``, null, undefined, NaN
            Valores verdaderos: cualquier valor que no sea falso, 
                incluso el string "false", y el numero 0 o -1 
                o un array vacio o un objeto vacio
         */
        // valores falsos
        let valor = false; //false
        valor = 0; // false
        valor = ""; // false
        valor = ''; // false
        valor = ``; //  false
        valor = null; // false
        valor = undefined; // false
        valor = NaN; // false

// 4. Null
    /* 
        null es un valor especial que representa la ausencia de valor 
        null es un objeto: typeof null devuelve object, pero es un error de js 
        typeof null == "object"; // true: no deberia ser asi por que es un primitivo pero es un BUG de js 
    */
    let numero3 = null;
    console.log(typeof numero3); // object

// 5. Undefined
    null == undefined; // true
    null === undefined; // false
// 6. Symbol
    /* 
        Symbol es un tipo de dato primitivo que se usa para crear identificadores unicos e irrepetibles
        se usa para crear propiedades privadas en los objetos
    */
    let simbolo = Symbol("mi simbolo");
    let simbolo2 = Symbol("mi simbolo");
    console.log(simbolo === simbolo2); // false
    // Registro global de simbolos
    // Symbol.for() crea un simbolo que se puede repetir
    let simbolo3 = Symbol.for("mi simbolo");
    console.log(simbolo === simbolo3); // true
    console.log(simbolo3); // Symbol(mi simbolo)
    // Symbol.keyFor() devuelve el nombre del simbolo
    console.log(Symbol.keyFor(simbolo3)); // mi simbolo


    /* Propiedades privadas en objetos     */
    obj = {
        [simbolo]: "Valor del simbolo"
    }

    console.log(obj[simbolo]); // Valor del simbolo

// 7. BigInt
    /* 
        BigInt es un tipo de dato primitivo que se usa para representar numeros enteros grandes
        se usa para representar numeros mayores que 2^53 - 1
        se usa la n al final del numero para indicar que es un BigInt
    */
    let numero4 = 10n;
    console.log(typeof numero4); // bigint
    console.log(numero4); // 10n
    // no se pueden hacer operaciones con BigInt y Number
    // numero4 + 10; // error
    // numero4 + parseInt(10); // error
    // numero4 + parseFloat(10); // error
    // numero4 + Number(10); // error
    // numero4 + +10; // error

    // se pueden hacer operaciones con BigInt y BigInt
    numero4 + 10n; // 20n
    numero4 + BigInt(10); // 20n
    numero4 + numero4; // 20n
    numero4 + numero4 + 10n; // 30n
    numero4 + numero4 + BigInt(10); // 30n
    numero4 + numero4 + numero4; // 30n

    // se pueden hacer operaciones con BigInt y Number si se usa el metodo BigInt()
    numero4 + BigInt(10); // 20n
    numero4 + BigInt(10) + 10; // 30n
    numero4 + BigInt(10) + BigInt(10); // 30n
    numero4 + BigInt(10) + BigInt(10) + 10; // 40n
    numero4 + BigInt(10) + BigInt(10) + BigInt(10); // 40n

    

