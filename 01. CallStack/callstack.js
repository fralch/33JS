// entendiendo Call Stack (Pila de ejecución)
/* 
  LIFO (Last In First Out)
  Último en entrar, primero en salir
  El último elemento que entra a la pila es el primero en salir de ella
  
  https://www.youtube.com/watch?v=ygA5U7Wgsg8&list=PLfWyZ8S-XzecAttp3QU-gBBXvMqEZTQXB
  https://www.youtube.com/watch?v=3urklDAfK-k     -> desde el minuto 5:41 
*/
function cortar(ingrendiente){
  console.log("Cortar " + ingrendiente);
}
function mezclarIngredientes(n){
  if (n <= 0) return 0 ; 

  console.log("Mezclar #" + n);
  mezclarIngredientes(n - 1);
}
function comer(){
  console.log("Comer"); 
}
function hacerEnsaldaMixta(){
  cortar("tomate");
  cortar("lechuga");
  cortar("cebolla");
  mezclarIngredientes(5); 
  comer(); 
}

hacerEnsaldaMixta();