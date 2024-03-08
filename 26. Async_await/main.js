function getData(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Data received');
        }, 2000);
    });
}

async function fetchData(){
    console.log('Fetching data...');
    try{
        const data = await getData();
        console.log(data);
    }
    catch(error){
        console.log(error);
    }
}

fetchData();

// async y await son una forma de trabajar con promesas de manera mas sencilla y legible