// https://www.youtube.com/watch?v=qk67wS7WYxo

  // Definición de la clase Node (Nodo)
  class Node {
    // Constructor que crea un nodo con un valor y un enlace al siguiente nodo (inicialmente nulo)
    constructor(value, next = null) {
      this.value = value;  // Valor del nodo
      this.next = next;    // Enlace al siguiente nodo (por defecto nulo)
    }
  }
  
  // Definición de la clase LinkedList (Lista Enlazada)
  class LinkedList {
    // Constructor que inicializa la lista enlazada con cabeza nula y tamaño 0
    constructor() {
      this.head = null;  // Cabeza de la lista (inicialmente nula)
      this.size = 0;     // Tamaño de la lista (inicialmente 0)
    }
  
    // Método para agregar un nuevo nodo al final de la lista
    add(value) {
      const node = new Node(value);  // Crear un nuevo nodo con el valor proporcionado
      if (!this.head) {
        this.head = node;  // Si la lista está vacía, el nuevo nodo se convierte en la cabeza
      } else {
        let current = this.head;
        while (current.next) {
          current = current.next;  // Avanzar al último nodo de la lista
        }
        current.next = node;  // Establecer el enlace del último nodo al nuevo nodo
      }
      this.size++;  // Incrementar el tamaño de la lista
    }
  
    // Método para eliminar un nodo con un valor específico de la lista
    remove(value) {
      if (!this.head) {
        return;  // Si la lista está vacía, no se puede eliminar nada
      }
      if (this.head.value === value) {
        this.head = this.head.next;  // Si el nodo a eliminar es la cabeza, actualizar la cabeza
        this.size--;  // Decrementar el tamaño de la lista
        return;
      }
      let current = this.head;
      while (current.next) {
        if (current.next.value === value) {
          current.next = current.next.next;  // Eliminar el nodo actualizando los enlaces
          this.size--;  // Decrementar el tamaño de la lista
          return;
        }
        current = current.next;  // Avanzar al siguiente nodo
      }
    }
  
    // Método para obtener el valor del nodo en la posición especificada por el índice
    get(index) {
      if (index < 0 || index >= this.size) {
        return null;  // Si el índice está fuera de rango, retornar null
      }
      let current = this.head;
      for (let i = 0; i < index; i++) {
        current = current.next;  // Avanzar al nodo en la posición deseada
      }
      return current.value;  // Retornar el valor del nodo en la posición especificada
    }
  }
  
  // Creación de una instancia de LinkedList
  const linkedList = new LinkedList();
  
  // Agregando elementos a la lista
  linkedList.add(1);
  linkedList.add(2);
  linkedList.add(3);
  linkedList.add(4);
  linkedList.add(5);
  
  // Imprimiendo el valor en la posición 1 (índice 1)
  console.log(linkedList.get(1)); // imprime 2
  
  // Eliminando el nodo con el valor 2
  linkedList.remove(2);
  
  // Imprimiendo el valor en la posición 1 después de la eliminación
  console.log(linkedList.get(1)); // imprime 3
  
  // Imprimiendo la lista completa
  console.log(linkedList); // imprime la estructura de la lista actualizada
  