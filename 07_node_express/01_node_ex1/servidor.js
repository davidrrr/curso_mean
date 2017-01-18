// NOTA: Para instalar el módulo express indicado en package.json, ejecutar npm install sobre el directorio actual

// Importamos mucho
var miExpress = require("express");

// Instanciar
var app = miExpress();

// Ruteo
app.get("/", peticionPrincipal);
// Añadir
app.get("/about", peticionAbout);
app.get("/01", peticion01);
app.get("/02", peticion02);
app.get("/03", peticion03);
app.get("/04", peticion04);
app.get("/05", peticion05);


function peticionPrincipal(peticion, respuesta) {
	respuesta.sendfile(__dirname + "/publico/index.html");
}


// Añadir
function peticionAbout(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/about.html");
}

function peticion01(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/01_NG1_expresiones.html");
}

function peticion02(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/02_NG1_directivas.html");
}

function peticion03(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/03_NG1_filtros.html");
}

function peticion04(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/04_NG1_ordenamiento.html");
}

function peticion05(peticion, respuesta){
	respuesta.sendfile(__dirname + "/publico/05_NG1_controlador.html");
}

app.listen(9000);

console.log("Servidor lanzado..");