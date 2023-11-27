function crearPersona(nombre, edad) {
    return {
        nombre: nombre ?? "Sin nombre", // Si no se proporciona el nombre, se asigna "Sin nombre" usando los signos ?? (nullish coalescing operator)
        edad: edad,
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        }
    };
}

// Crear una nueva persona utilizando la fábrica
const persona1 = crearPersona("Juan", 25);
persona1.saludar(); // Imprime: Hola, mi nombre es Juan y tengo 25 años.


// Crear una nueva persona mandando un objeto como parámetro

function crearPersona2({nombre, edad}) {
    return {
        nombre: nombre ?? "Sin nombre", // Si no se proporciona el nombre, se asigna "Sin nombre" usando los signos ?? (nullish coalescing operator)
        edad: edad,
        saludar: function() {
            console.log(`Hola, mi nombre es ${this.nombre} y tengo ${this.edad} años.`);
        }
    };
}

// Crear una nueva persona utilizando la fábrica
const persona2 = crearPersona2({nombre: "Juan", edad: 25});
