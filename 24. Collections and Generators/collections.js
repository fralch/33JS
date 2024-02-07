// collection map js -> https://www.youtube.com/watch?v=vra1CscMtQs
// 1. Map
    console.log('---------MAP------------');
    const map = new Map();
    map.set('nombre', 'juan');
    map.set('edad', 22);
    map.set(1, 'uno');
    
    console.log(map);
    console.log(map.size);
    console.log(map.has('correo')); // has es para saber si existe un elemento en el map
    console.log(map.get('nombre')); // get es para obtener un elemento del map
    console.log(map.get(1));
    console.log(map.delete(1)); // delete es para eliminar un elemento del map

    for (let [key, value] of map) {
        console.log(key, value);
    }
    console.log('- - - - -  -');
    for (let key of map.keys()) {
        console.log(key);
    }
// 2. Set
    console.log('---------SET------------');
    const set = new Set([1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6]);
    console.log(set);
    console.log(set.size); // size es para saber cuantos elementos tiene el set
    console.log(set.has(1)); // has es para saber si existe un elemento en el set
    console.log(set.add(7)); // add es para agregar un elemento al set
    console.log(set.delete(1)); // delete es para eliminar un elemento del set
    console.log(set);

    for (let item of set) {
        console.log(item);
    }

    const repeated = [1, 2, 3, 4, 5, 6, 6, 6, 6, 6, 6, 6, 6, 6];
    const noRepeated = new Set(repeated); // para eliminar los elementos repetidos de un array
    console.log(noRepeated);


// 3. WeakMap -> https://www.youtube.com/watch?v=nfMEnCrBL-0
    console.log('---------WEAKMAP------------');
    const wm = new WeakMap();  // solo acepta objetos como llaves
    const obj = {};
    wm.set(obj, 'hola mundo'); // set es para agregar un elemento al weakmap
    console.log(wm.get(obj));  // get es para obtener un elemento del weakmap
    console.log(wm.has(obj));  // has es para saber si existe un elemento en el weakmap
    wm.delete(obj); // delete es para eliminar un elemento del weakmap
    console.log(wm.get(obj)); 
    console.log(wm.has(obj));


// 4. WeakSet
    console.log('---------WEAKSET------------');
    const ws = new WeakSet();  // solo acepta objetos como elementos
    const obj1 = {};
    ws.add(obj1); // add es para agregar un elemento al weakset
    console.log(ws.has(obj1)); // has es para saber si existe un elemento en el weakset
   
    ws.delete(obj1); // delete es para eliminar un elemento del weakset
    console.log(ws.has(obj1));


//