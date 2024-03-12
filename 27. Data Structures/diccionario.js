const myDict = {};

myDict['apple'] = 'manzana';
myDict['banana'] = 'plátano';
myDict['orange'] = 'naranja';

console.log(myDict['apple']); // manzana
console.log(myDict['banana']); // plátano

delete myDict['orange'];
console.log(myDict.hasOwnProperty('orange')); // false

for (const key in myDict) {
  console.log(`${key}: ${myDict[key]}`);
}
// apple: manzana
// banana: plátano

console.log(Object.keys(myDict)); // [ 'apple', 'banana' ]
console.log(Object.values(myDict)); // [ 'manzana', 'plátano' ]
console.log(myDict);


// en este ejemplo usamos la notación de corchetes para acceder a los valores del diccionario

/* 
diferencias entre la notación de punto y la notación de corchetes al acceder a las propiedades de un objeto 
en JavaScript:

Notación de punto:
Se utiliza para acceder a las propiedades de un objeto utilizando un identificador válido como clave de la propiedad.
Es más fácil de leer y escribir cuando se conocen los nombres de las propiedades del objeto y estos no contienen caracteres especiales ni espacios en blanco.
No permite cambiar el nombre de una propiedad directamente, sino que requiere crear una nueva propiedad con el nuevo nombre y copiar el valor de la propiedad original a la nueva propiedad.
Notación de corchetes:
Se utiliza para acceder a las propiedades de un objeto utilizando una expresión entre corchetes como clave de la propiedad.
Permite utilizar cualquier expresión como clave de la propiedad, incluyendo variables, cadenas de texto, expresiones aritméticas, etc.
Es más flexible y permite cambiar el nombre de una propiedad de un objeto de forma dinámica.
Es más útil cuando se desconocen los nombres de las propiedades del objeto o cuando estos contienen caracteres especiales o espacios en blanco.

En resumen, la elección de la notación depende del contexto y de las necesidades específicas de tu código. 
La notación de punto es más fácil de leer y escribir cuando se conocen los nombres de las propiedades del 
objeto y estos no contienen caracteres especiales ni espacios en blanco, mientras que la notación de 
corchetes es más flexible y permite utilizar cualquier expresión como clave de la propiedad, lo que la 
hace más útil en situaciones más complejas.

const objeto = {};
objeto['primero'] = 1 
objeto.segundo = 2 
console.log(objeto['primero']); // 1
console.log(objeto.segundo); // 2



*/