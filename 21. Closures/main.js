// ejemplo sencillo de closure
let a = "hola"; 

function global() {
    let b = "mundo";

    function local() {
        let c = "!";
        console.log(a + b + c);
    }

    return local; // retorna la funcion local, el closure se crea aqui, cuando la funcion local almacena el contexto de la funcion global y es retornada

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

const ejecutarContador= miContador; // ejecuta la funcion anonima y retorna el objeto con las funciones
ejecutarContador.valor(); // 0
ejecutarContador.incrementar(); // 1
ejecutarContador.incrementar(); // 2
ejecutarContador.valor(); // 2
ejecutarContador.decrementar(); // 1

const ejecutarContador2 = miContador; // ejecuta la funcion anonima y retorna el objeto con las funciones
ejecutarContador2.valor(); // 0
ejecutarContador2.incrementar(); // 1
ejecutarContador2.valor(); // 1
ejecutarContador2.decrementar(); // 0

// las variables _contador de cada funcion son independientes, cada funcion tiene su propio contexto o entorno lexico


// console log con closure y colores de fondo
const estilosPorDefecto = 'color: white; '; 
function crearColors(estilo) {
    console.log(`%c Error: mensaje`, `background-color: red; color: white;`); // mensaje
    return function (str) {
        console.log(`%c ${str}`, `${estilosPorDefecto} ${estilo}`); 
    }
}

const error = crearColors('background-color: red; ');
const warning = crearColors('background-color: yellow; ');

error('error'); // error





