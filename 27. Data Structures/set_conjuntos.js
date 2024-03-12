/*
Conjuntos (Sets): una colección de elementos únicos, 
sin orden específico. Se utilizan para almacenar elementos sin repetición.
 */
const mySet = new Set();

mySet.add(1);
mySet.add(2);
mySet.add(3);

console.log(mySet.has(2)); // true
console.log(mySet.size); // 3

mySet.delete(2);
console.log(mySet.has(2)); // false

mySet.forEach(element => console.log(element)); // 1, 3

