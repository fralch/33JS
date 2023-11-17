// Enseñame JavaScript Engines 

/*
    JavaScript Engines
    - V8 (Chrome, Opera, Node)
    - SpiderMonkey (Firefox)
    - JavaScriptCore (Safari)
    - Chakra (IE, Edge)
    - KJS (Konqueror)
    - Carakan (Opera 10)
    - Nashorn (Java 8)
    - JerryScript (IoT)
    - Duktape (IoT)
    - MuJS (embedded)
    - QuickJS (embedded)

    JavaScript Runtime
    - Chrome: V8 + Web APIs + Other Components
    - Node: V8 + Libuv + Other Components
    - Browser: V8 + Web APIs + Other Components
    - IoT: JerryScript + Libuv + Other Components
    - Embedded: Duktape + Libuv + Other Components
    - Java: Nashorn + Other Components

    
*/ 
/* Optimizador y De-optimizador */
/* 
    Optimizador: 
        - Recibe el código y lo optimiza
        - Crea un perfil del código
        - Identifica código ineficiente
        - Optimiza el código
        - Crea código optimizado
        - Guarda el código optimizado

    De-optimizador:
        - Recibe el código optimizado
        - Crea un perfil del código
        - Identifica código ineficiente
        - De-optimiza el código
        - Crea código de-optimizado
        - Guarda el código de-optimizado

*/

// dame un ejemplo de optimizador y de-optimizador

function ObtenerX(obj) {
    return obj.x;
}

ObtenerX({x: 10, y: 20});
ObtenerX({x: 15, y: 21});
ObtenerX({x: 13, y: 55});

// en este caso el optimizador se da cuenta que siempre se esta pidiendo la propiedad x del objeto

ObtenerX({x: 10, z: 20});
ObtenerX({x: 15, w: 21});
ObtenerX({x: 13, a: 55});
ObtenerX({x: 13, b: 55});

// en este caso el optimizador se da cuenta que no siempre se esta pidiendo la propiedad x del objeto
// por lo cual el rendimiento es menor 



