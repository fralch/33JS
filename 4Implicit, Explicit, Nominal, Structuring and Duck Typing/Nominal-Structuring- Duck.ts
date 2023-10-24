// ----------- Nominal, Structuring and Duck Typing --------------

// Nominal Typing  O Sistema de Tipado 
// En javascript no existe  pero podemos darte ejemplo en java 

/*
    // En java podemos ver que el tipo de dato es el mismo pero el nombre de la clase es diferente
    // Esto es lo que se conoce como Nominal Typing

    class Calculadora1{
        public int sumarDosEnteros (int a, int b){
            return a + b;
        }
    }

    class Calculadora2{
        public int sumarDosEnteros (int a, int b){
            return a + b;
        }
    }
    public class Main{
        public static void main(String[] args){
            Calculadora1 calc1 = new Calculadora1();
            Calculadora2 calc2 = new Calculadora2();
            System.out.println(calc1.sumarDosEnteros(2,3));
            System.out.println(calc2.sumarDosEnteros(2,3));
            // Si intentamos hacer esto dara error
            // Error por que no son del mismo tipo nominal por mas que tengan la misma estructura 
            Calculadora1 calc3 = new Calculadora2(); 
        }
    }

*/

// Structuring Typing 
// para que dos tipos sean compatibles, solo tienen que tener la misma estructura

 
function esMayorDeEdad(persona: {edad: number}){
    return persona.edad >= 18;
}

let perro = {edad: 10, raza: "Pastor Aleman"};
esMayorDeEdad(perro); // No da error por que solo se fija en la estructura del objeto


// Duck Typing
//  No nos importa el tipo de dato que sea, solo nos importa que tenga los atributos y metodos que necesitamos

function tieneGmail(user){
    return user.email.contains("@gmail.com");
}
let usuario = { nombre : "Juan"};
tieneGmail(usuario); //  Da error por que no tiene el atributo email

let usuario2 = { nombre : "Juan", email: "ingfralch@gmail.com"};
tieneGmail(usuario2); // No da error por que solo se fija en la estructura del objeto y tiene el atributo email
