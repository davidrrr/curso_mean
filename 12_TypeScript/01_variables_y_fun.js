// Transpirar=> tsc noEmitOnError -w 01_variables_y_fun.ts
var variable;
// string, boolean, 
var bool;
//variable= "una cadena";
bool = true;
//bool= (bool) 34;
var cadena = "una cadena que si";
console.log(cadena);
var miCumple = { dia: 7, mes: 10, anio: 2017 };
console.log("El dia de mi cumple: " + miCumple.dia);
var variableASaberQueContiene;
variableASaberQueContiene = 34;
variableASaberQueContiene = "jhfjk";
// Ver Rangos
function concatenar(texto1, texto2) {
    var resultado = texto1 + texto2;
    return resultado;
}
console.log(concatenar("aaaaa", "bbbb"));
