/* 
 Imagina que estás haciendo una receta para hacer hamburguesas. Para hacer la hamburguesa, 
 necesitas poner carne, lechuga y tomate. Pero, en lugar de poner todos los ingredientes juntos 
 desde el principio, decides preparar cada ingrediente por separado.

 Currying en programación es un poco como eso. En lugar de tener una función que toma todos
  los ingredientes de una vez, tienes una función que toma un ingrediente a la vez y devuelve 
  otra función que espera el siguiente ingrediente.
*/
// Función original para construir hamburguesa
function construirHamburguesa(pan, carne, lechuga, tomate) {
    return "Hamburguesa con " + pan + ", " + carne + ", " + lechuga + " y " + tomate;
  }
  
  // Función curry para construir hamburguesa
  function curryConstruirHamburguesa(pan) {
    return function (carne) {
      return function (lechuga) {
        return function (tomate) {
          return construirHamburguesa(pan, carne, lechuga, tomate);
        };
      };
    };
  }
  
  // Uso
  const hamburguesaConPan = curryConstruirHamburguesa("Integral");
  const hamburguesaConPanYCarne = hamburguesaConPan("Res");
  const hamburguesaCompleta = hamburguesaConPanYCarne("Lechuga")("Tomate");
  
  console.log(hamburguesaCompleta);
  // Resultado: Hamburguesa con Integral, Res, Lechuga y Tomate
  