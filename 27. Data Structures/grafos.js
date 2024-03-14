//  https://www.youtube.com/watch?v=vnNFiNVy9KM

class Grafo {
    constructor() {
      this.vertices = {};
    }
  
    agregarVertice(vertice) {
      // Si el vértice o nodo  no existe en el grafo, lo agrega 
      if (!this.vertices[vertice]) {
        this.vertices[vertice] = [];
      }
    }
  
    agregarArista(verticeOrigen, verticeDestino) {
      // Agrega una arista o linea que conecta desde el vértice de origen al vértice de destino
      if (this.vertices[verticeOrigen] && this.vertices[verticeDestino]) {
        this.vertices[verticeOrigen].push(verticeDestino);
        // Si el grafo es no dirigido, descomenta la siguiente línea
        // this.vertices[verticeDestino].push(verticeOrigen);
      } else {
        console.error("Los vértices no existen en el grafo.");
      }
    }
  
    obtenerVertices() {
      // Devuelve un array con todos los vértices del grafo
      return Object.keys(this.vertices);
    }
  
    obtenerAristas(vertice) {
      // Devuelve un array con las aristas del vértice dado
      return this.vertices[vertice] || [];
    }
  
    imprimirGrafo() {
      // Imprime el grafo con sus vértices y aristas
      const vertices = Object.keys(this.vertices);
      for (const vertice of vertices) {
        const aristas = this.vertices[vertice].join(", ");
        console.log(`${vertice} -> ${aristas}`);
      }
    }

    // Otra forma de imprimir el grafo
    consola (){
        console.log(this.vertices);
    }
  }
  
  // Ejemplo de uso
  const grafo = new Grafo();
  grafo.agregarVertice("A");
  grafo.agregarVertice("B");
  grafo.agregarVertice("C");
  grafo.agregarVertice("D");
  
  grafo.agregarArista("A", "B");
  grafo.agregarArista("A", "C");
  grafo.agregarArista("B", "D");
  grafo.agregarArista("C", "D");
  
  console.log("Vértices:", grafo.obtenerVertices());
  console.log("Aristas de A:", grafo.obtenerAristas("A"));
  console.log("Aristas de B:", grafo.obtenerAristas("B"));
  console.log("Aristas de C:", grafo.obtenerAristas("C"));
  console.log("Aristas de D:", grafo.obtenerAristas("D"));
  
  console.log("Grafo:");
  grafo.imprimirGrafo();
  grafo.consola();

    // Salida esperada:
    // Vértices: [ 'A', 'B', 'C', 'D' ]
    // Aristas de A: B, C
    // Aristas de B: D
    // Aristas de C: D
    // Aristas de D:
    // Grafo:
    // A -> B, C
    // B -> D
    // C -> D
    // D ->
    // { A: [ 'B', 'C' ], B: [ 'D' ], C: [ 'D' ], D: [] }



  