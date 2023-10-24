const persona1 = {
    nombre: 'Juan',
    say(){
        console.log(`Hola soy ${this.nombre}`);
    }, 
    eat(food){
        console.log(`${this.nombre} esta comiendo ${food}`)
    }
}
const persona2 = {
    nombre: 'Maria'
}

// call es un metodo de la funcion say que permite ejecutar la funcion say con el contexto de persona2 
persona1.say.call(persona2); 
// apply es un metodo de la funcion say que permite ejecutar la funcion say con el contexto de persona2 
persona1.say.apply(persona2);

/* Call y apply sirven para lo mismo aun que se mandan parametros de forma diferente */
// call mandando parametros a la funcion say
persona1.eat.call(persona2, 'Pizza');
// apply mandando parametros a la funcion say
persona1.eat.apply(persona2, ['Pizza']);

// bind es un metodo de la funcion say que permite ejecutar la funcion say con el contexto de persona2, pero no la ejecuta, solo la prepara para ser ejecutada
// en otras palabras, bind retorna una nueva funcion con el contexto de persona2 o copia la funcion say con el contexto de persona2

const say = persona1.say.bind(persona2);
say(); // Hola soy Maria
const eat = persona1.eat.bind(persona2);
eat('Pizza'); // Maria esta comiendo Pizza