// dame un ejemplo de las funciones matematicas que se pueden hacer con los modulos


function add(x1, x2) {
    return x1 + x2;
}

function substract(x1, x2) {
    return x1 - x2;
}

function multiply(x1, x2) {
    return x1 * x2;
}

function divide(x1, x2) {
    if (x2 == 0) {
        console.log('No se puede dividir por 0');
    } else {
        return x1 / x2;
    }
}

class Arithmetic {
    doble (x) {  
        return x * 2;
    }

}


export { add, substract, multiply, divide, Arithmetic }; // exporta todas las funciones y la clase Arithmetic

// export default Arithmetic; // exporta la clase Arithmetic

// export default  { add, substract, multiply, divide, Arithmetic} // exporta todas las funciones