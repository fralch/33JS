// ejemplo sencillo de closure
let a = "hola"; 

function global() {
    let b = "mundo";

    function local() {
        let c = "!";
        console.log(a + b + c);
    }

    return local; // retorna la funcion local
}

global()(); // hola mundo!
// el primer parentesis ejecuta la funcion global, el segundo ejecuta la funcion local
let closure = global(); // retorna la funcion local (el nombre de la variable no importa)
closure(); // hola mundo!
// closure es una funcion que encapsula el contexto de la funcion global


// ejemplo un poco mas complejo

const miContador = (function() {
    let _contador = 0;

    function incrementar() {
        return _contador++;
    }

    function decrementar() {
        return _contador--;
    }

    function valor() {
        return _contador;
    }

    return {
        incrementar,
        decrementar,
        valor
    }
})();
// miContador es una funcion que encapsula el contexto de la funcion anonima
// y retorna un objeto con las funciones incrementar, decrementar y valor 

console.log(miContador.valor()); // 0
miContador.incrementar(); // 1
miContador.incrementar(); // 2
console.log(miContador.valor()); // 2
miContador.decrementar(); // 1
console.log(miContador.valor()); // 1
