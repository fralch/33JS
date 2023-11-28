    const harry = {
        firstName: 'Harry',
        saludar : function(){
            console.log(`Hola soy ${this.firstName}`);
        }
    }

    harry.saludar(); //Hola soy Harry

    const harrySaludar = harry.saludar;
    harrySaludar(); // undefined : esto es porque estamos guardando la funcion en una variable y la estamos llamando desde window
    // ☝ esto es como si extrajesemos la funcion de harry y la llamaramos desde window



// Defalut binding
    function  quienSoy(){
        console.log(this);
    }

    quienSoy(); // Window



// Implicit binding : cuando la funcion es llamada por un objeto y el this se refiere al objeto
    const Frank_obj = {
        firstName: 'Alex',
        saludar : function(){
            console.log(`Hola soy ${this.firstName}`);
        }
    }

    /* 
        this se refiere a Frank_obj
        Frank_obj es el objeto que llama a la funcion
    */
    Frank_obj.saludar(); //Hola soy Akex 

    const Frank_otro_obj = {
        nombre: 'Alex',
        twitter: '@alex',
        saludar: function(){
            function siguemeEnTwitter(){
                console.log(`Sigueme en ${this.twitter}`);
            }

            console.log(`Hola soy ${this.nombre} ${this.twitter}`);

            siguemeEnTwitter();
        }
    }

    /* 
        this se refiere a Frank_otro_obj
        Frank_otro_obj es el objeto que llama a la funcion sakudar
        siguemeEnTwitter es llamada por la funcion saludar y no por el objeto Frank_otro_obj
        por lo tanto this se refiere a window o undefined si estamos en modo estricto
    */
    Frank_otro_obj.saludar(); // Hola soy Alex @alex // Sigueme en undefined

    // corrige el problema de arriba
    const Frank_otro_obj_corr = {
        nombre: 'Alex',
        twitter: '@alex',
        saludar: function(){
            

            console.log(`Hola soy ${this.nombre} ${this.twitter}`);

            siguemeEnTwitter();
        }, 
        siguemeEnTwitter: function (){
            console.log(`Sigueme en ${this.twitter}`);
        }
    }

    Frank_otro_obj_corr.saludar(); // Hola soy Alex @alex // Sigueme en @alex


// Explicit binding : cuando usamos call, apply o bind
    const Frank_explicit = {
        nombre: 'Alex',
        twitter: '@alex',
        saludar: function(){
            console.log(`Hola soy ${this.nombre} ${this.twitter}`);
        }
    }

    const otro_obj = {
        nombre: 'Bruno',
        twitter: '@bruno',
    }

    // call
    Frank_explicit.saludar.call(otro_obj); // Hola soy Bruno @bruno

    // apply
    Frank_explicit.saludar.apply(otro_obj); // Hola soy Bruno @bruno

    // bind
    const nuevoSaludo = Frank_explicit.saludar.bind(otro_obj);
    nuevoSaludo(); // Hola soy Bruno @bruno

// new binding : cuando usamos new para crear un nuevo objeto y el this se refiere al nuevo objeto
    // no funciona con call apply o bind

    function Persona(nombre, twitter){
        // this = Object.create(Persona.prototype);
        this.nombre = nombre;
        this.twitter = twitter;
        // return this;
    }
    const Alex = new Persona('Alex', '@alex');
    console.log(Alex); // Persona {nombre: "Alex", twitter: "@alex"}

    Persona.prototype.saludar = function(){
        console.log(`Hola soy ${this.nombre} ${this.twitter}`);
    }

// lexical binding : cuando usamos arrow functions y el this se refiere al this del contexto donde se encuentra la funcion

    const harry_lexical = {
        nombre: 'Harry',
        twitter: '@harry',
        saludar: function(){
            console.log(`Hola soy ${this.nombre} ${this.twitter}`);
            const siguemeEnTwitter = () => {
                console.log(`Sigueme en ${this.twitter}`);
            }
            siguemeEnTwitter();
        }
    }

    harry_lexical.saludar(); // Hola soy Harry @harry // Sigueme en @harry

   


