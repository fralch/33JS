// recursividad en javascript 
// https://www.youtube.com/watch?v=yX5kR63Dpdw 

//  funsion recursiva factorial 

function factorial(n){
    if(n === 1) return 1;  // caso base significa que es el caso mas simple que se puede resolver y detiene la recursividad
    return n * factorial(n - 1);  // caso recursivo significa que se llama a si misma la funsion
}

console.log(factorial(5)); // 120


// funsion recursiva fibonacci que suma los dos numeros anteriores para obtener el siguiente numero

function fibonacci(n){
    if(n === 0) return 0;  // caso base significa que es el caso mas simple que se puede resolver y detiene la recursividad
    if(n === 1) return 1;  // caso base significa que es el caso mas simple que se puede resolver y detiene la recursividad
    return fibonacci(n - 1) + fibonacci(n - 2);  // caso recursivo significa que se llama a si misma la funsion
}

console.log(fibonacci(6)); // 8
