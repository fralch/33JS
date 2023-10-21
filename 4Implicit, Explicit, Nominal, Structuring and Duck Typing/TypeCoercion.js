// Type coercion o casting

// coercion o casting es la conversion automatica o implicita de valores de un tipo de dato a otro tipo de dato.
// en javascript existen dos tipos de coercion o casting:
// 1. explicit coercion o casting
    // es cuando nosotros forzamos la conversion de un tipo de dato a otro tipo de dato.
    let explicit = 10 + Number("10");
    console.log(explicit); // 20

    // explicit conversion o casting
    console.log(String(10)); // "10"
    console.log(String(NaN)); // "NaN"
    console.log(String(true));  // "true"
    console.log(String(Symbol())); // Cannot convert a Symbol value to a string
    console.log(Number("10")); // 10
    console.log(Boolean(1)); // true
    console.log(Boolean(0)); // false
    


// 2. implicit coercion o casting
    // es cuando javascript convierte automaticamente un tipo de dato a otro tipo de dato, segun su propio criterio.
    let implicit = 10 +  "10";
    console.log(implicit); // 1010

    let implicit2 = 10 - "10";
    console.log(implicit2); // 0

    // boolean
    let a = null;
    let b = "test";
    let c = null;

    a || b; // 100
    a && b; // "test"

    // igualaciones 
    // == igualacion debil (usara coercion)
        let x = 10;
        let y= "10";
        x == y; // true
    // === igualacion fuerte (no usara coercion)
        let z = 10;
        let w= "10";
        z === w; // false
    
    // ------ COERCION EN OBJETOS ------ //

    console.log({} + []); // 0
    console.log([] + {}); // "[object Object]"


