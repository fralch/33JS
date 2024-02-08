// Generadores en javascript son funciones especiales que pueden pausar su ejecución y luego retomarla en el mismo punto donde la dejaron.

 function* helloWorld() {
        if (true) {
            yield 'Hello, ';
        }
        if (true) {
            yield 'World';
        }
 }

    const generatorHello = helloWorld();
    console.log(generatorHello.next().value);
    console.log(generatorHello.next().value);

 function* fibonacci() {
        let a = 0, b = 1;
        while (true) {
            let f = a;
            a = b;
            b = f + a;
            let reset = yield f;
            if (reset) {
                a = 0;
                b = 1;
            }
        }
 }

    const fibo = fibonacci();
    console.log(fibo.next().value);
    console.log(fibo.next().value);
    console.log(fibo.next().value);
    console.log(fibo.next().value);
    console.log(fibo.next().value);


    function* generadorNumero() {
        yield 1;
        yield 2;
        yield 3;
      }
      
      for (let num of generadorNumero()) {
        console.log(num);
      }
