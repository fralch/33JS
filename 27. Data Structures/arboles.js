/*
https://www.youtube.com/watch?v=tBaOQeyXYqg

Árboles binarios
Un árbol binario es una estructura de datos en forma de árbol donde cada nodo tiene a lo sumo dos hijos, denominados hijo izquierdo y hijo derecho. Cada nodo del árbol contiene un valor o dato y algunos enlaces (punteros) a sus hijos.

Algunos términos importantes en un árbol binario son:

Raíz: Es el nodo superior del árbol, el único que no tiene padre.
Nodo interno: Es un nodo que tiene al menos un hijo.
Hoja: Es un nodo que no tiene hijos.
Padre: Es el nodo inmediatamente superior a un nodo dado, al que se conecta mediante una arista.
Hijo: Es el nodo inmediatamente inferior a un nodo dado, que se conecta mediante una arista.
Hermano: Son nodos que comparten el mismo padre.
Altura: Es la longitud de la ruta más larga desde la raíz hasta una hoja.
Profundidad: Es la longitud de la ruta desde la raíz hasta un nodo dado.
Nivel: Es el número de aristas desde la raíz hasta un nodo dado. La raíz se encuentra en el nivel 0.
Las operaciones comunes en un árbol binario incluyen:

Búsqueda: Buscar un valor en el árbol, comenzando desde la raíz y recorriendo los nodos según sea necesario.
Inserción: Agregar un nuevo nodo al árbol en la posición adecuada, manteniendo las propiedades del árbol binario.
Eliminación: Eliminar un nodo del árbol, reorganizando los nodos restantes para mantener las propiedades del árbol binario.
Recorrido: Visitas los nodos del árbol en un orden específico, como preorden, inorden, postorden o por niveles. 

*/


function TreeNode(value) {
  this.value = value;
  this.left = null;
  this.right = null;
}

const root = new TreeNode(6);
const node1 = new TreeNode(4);
const node2 = new TreeNode(1);
const node3 = new TreeNode(5);
const node4 = new TreeNode(8);
const node5 = new TreeNode(9);

/* 
El árbol que hemos creado tiene la siguiente estructura:

       6
     /   \
    4     8
   / \     \
  1   5     9


*/
root.left = node1;
root.right = node4;
node1.left = node2;
node1.right = node3;
node4.right = node5;

function inOrder(node) {  // inOrder: izquierda, raíz, derecha
  if (node !== null) {
    inOrder(node.left);
    console.log(node.value);
    inOrder(node.right);
  }
}
inOrder(root); // 1, 4, 5, 6, 8, 9

function preOrder(node) {  // preOrder: raíz, izquierda, derecha
    if (node !== null) {
        console.log(node.value);
        preOrder(node.left);
        preOrder(node.right);
    }
}

preOrder(root); // 6, 4, 1, 5, 8, 9

function postOrder(node) {  // postOrder: izquierda, derecha, raíz
    if (node !== null) {
        postOrder(node.left);
        postOrder(node.right);
        console.log(node.value);
    }
}
postOrder(root); // 1, 5, 4, 9, 8, 6


function insert (node, value) {
  if (node === null) {
    return new TreeNode(value);
  }
  if (value < node.value) {
    node.left = insert(node.left, value);
  } else {
    node.right = insert(node.right, value);
  }
  return node;
}

insert(root, 7); // inserta el valor 7 en el árbol


function search(node, value) { 
  if (node === null) {
    return false;
  }
  if (node.value === value) {
    return node;
  }
  if (value < node.value) {
    return search(node.left, value);
  } else {
    return search(node.right, value);
  }
}

const res = search(root, 8); // busca el valor 8 en el árbol
console.log(res); // TreeNode { value: 8, left: null, right: TreeNode { value: 9, left: null, right: null } }
 

 