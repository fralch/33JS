/* 
    para poder import un modulo en el servidor se tiene que usar un package.json con el siguiente contenido:
    {
        "type": "module"
    }
*/
import * as math from './math.js';

console.log(math.add(1, 2));
console.log(math.substract(1, 2));
console.log(math.multiply(1, 2));
console.log(math.divide(1, 2));