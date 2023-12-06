//Pure Functions (Funciones Puras): 
    /*  
    Son funciones que, dado el mismo conjunto de entradas, siempre devuelven la misma salida sin efectos secundarios observables.

        - No dependen de variables externas
        - No modifican variables externas
        - No tienen efectos secundarios
        - Dados los mismos parametros, siempre retorna el mismo valor

    */

    // Ejemplo de funcion pura:
    const suma = (a, b) => a + b; // siempre devuelve la misma salida dado el mismo conjunto de entradas


//Side Effects (Efectos Secundarios): 
    /* 
    Son cambios observables fuera de la función que ocurren cuando la función se ejecuta.
    */
    let num = 0;
    
    function agregar(valor) {
        num += valor; // cambia el valor de la variable num fuera de la funcion 
    }

//State Mutation (Mutación de Estado): 
    /*
        Es el cambio de estado de un objeto en un programa.
    */
    const persona = {
        nombre: 'Juan',
        edad: 20
    }

    persona.edad = 21; // cambia el estado de la propiedad edad del objeto persona

//Event Propagation (Propagación de Eventos):
    /*
        Es el flujo de eventos a través del DOM.
    */

    const btn = document.querySelector('button');
    btn.addEventListener('click', () => {
        console.log('click en el boton');
    });
