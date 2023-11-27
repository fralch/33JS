// Definición de la clase Persona
class Persona {
    // parametros privados
      #nombre; // atributo privado

    // Constructor que recibe nombre, apellido, y altura como parámetros
    constructor(nombre, apellido, altura) {
        this.nombre = nombre;
        this.apellido = apellido;
        this.altura = altura;
    }

    // Método saludar que imprime un mensaje y llama a una función externa si se proporciona (fn)
    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido}`);
        if (fn) {
            fn(nombre, apellido);
        }
    }

    // Método soyAlto que devuelve true si la altura es mayor a 1.8 metros
    soyAlto() {
        return this.altura > 1.8;
    }
}

// Definición de la clase Desarrollador que extiende la clase Persona
class Desarrollador extends Persona {
    // Constructor que llama al constructor de la clase Persona utilizando super
    constructor(nombre, apellido, altura) { 
        super(nombre, apellido, altura);  // Llamada al constructor de la clase Persona
    }

    // Método saludar que sobrescribe el método de la clase Persona e imprime un mensaje específico para desarrolladores
    saludar(fn) {
        var { nombre, apellido } = this;
        console.log(`Hola, me llamo ${nombre} ${apellido} y soy desarrollador`);
        if (fn) {
            fn(nombre, apellido, true);
        }
    }
}

// Creación de instancias de las clases Persona y Desarrollador
const Frnk = new Persona('Frank', 'Gomez', 1.72);
const Ericka = new Persona('Ericka', 'Luna', 1.65);
const Arturo = new Desarrollador('Arturo', 'Martinez', 1.89);


// Llamada al método saludar de la clase Persona
Frnk.saludar();
Ericka.saludar();

