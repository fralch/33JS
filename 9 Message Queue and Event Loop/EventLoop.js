// Aprendiendo Event Loop

// Event Loop
// El Event Loop se encarga de que el Call Stack se ejecute en el orden
// que corresponde, pero también se encarga de que el Callback Queue se
// ejecute en el orden que corresponde. Es decir, que el Event Loop se
// encarga de que el Call Stack y el Callback Queue se ejecuten en el
// orden que corresponde.

//https://www.youtube.com/shorts/x8cn5P9Qmf4

// con mucho más detalle : https://www.youtube.com/watch?v=rvzItyLuh28


console.log("Start");

setTimeout(() => {
    console.log("Timeout");
    }, 0);

Promise.resolve()
    .then(() => console.log("Promise"));

console.log("End");
