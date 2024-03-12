class Queue {
    constructor() {
      this.items = [];
    }
  
    // Agrega un elemento a la cola
    enqueue(element) {
      this.items.push(element);
    }
  
    // Elimina y devuelve el elemento al frente de la cola
    dequeue() {
      if(this.isEmpty()) {
        return "Underflow";
      }
      return this.items.shift(); // Elimina el primer elemento de la cola
    }
  
    // Verifica si la cola está vacía
    isEmpty() {
      return this.items.length === 0;
    }
  
    // Devuelve el tamaño de la cola
    size() {
      return this.items.length;
    }
  
    // Devuelve el elemento al frente de la cola
    front() {
      if(this.isEmpty()) {
        return "No elements in Queue";
      }
      return this.items[0];
    }
  }
  
  // Crea una instancia de la clase Queue
  const queue = new Queue();
  
  // Agrega elementos a la cola
  queue.enqueue("John");
  queue.enqueue("Jack");
  queue.enqueue("Camila");
  
  console.log(queue.size()); // Salida: 3
  
  // Elimina un elemento de la cola
  console.log(queue.dequeue()); // Salida: John
  
  // Verifica si la cola está vacía
  console.log(queue.isEmpty()); // Salida: false
  
  // Devuelve el elemento al frente de la cola
  console.log(queue.front()); // Salida: Jack
  