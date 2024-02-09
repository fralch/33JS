// promesas en javascript 
    // promesa simple 
    const promesa = new Promise((resolve, reject) => {
        if (true) {
            resolve('la operacion fue exitosa');
        } else {
            reject('hubo un error');
        }
    });

    promesa
    .then(response => console.log(response))
    .catch(error => console.log(error)); // la operacion fue exitosa

    // promesa con tiempo de espera
    const promesa2 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('la operacion fue exitosa2');
        }, 4000);
    });

    promesa2
    .then(response => console.log(response))
    .catch(error => console.log(error)); // la operacion fue exitosa

    // encadenar promesas
    const promesa3 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('la operacion fue exitosa3');
        }, 3000);
    });
    

    const promesa4 = new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('la operacion fue exitosa4');
        }, 2000);
    });

    promesa3
    .then(response => {
        console.log(response);
        return promesa4;
    })
    .then(response => console.log(response))
    .catch(error => console.log(error)); // la operacion fue exitosa3, la operacion fue exitosa4

    // promesas en paralelo

    Promise.all([promesa3, promesa4])
    .then(response => console.log(response))
    .catch(error => console.log(error)); // ["la operacion fue exitosa3", "la operacion fue exitosa4"]


    // promesa con async y await
    async function miFuncion(promesa) {
        try {
            const respuesta = await promesa;
            console.log(`respuesta: ${respuesta}`);
        } catch (error) {
            console.log(error);
        }
    }
    
    // Llamar a miFuncion con promesa3 como argumento
    miFuncion(promesa3);