// Transpirar=> tsc noEmitOnError -w 01_variables_y_fun.ts

let variable: number;
// string, boolean, 
let bool: boolean;

//variable= "una cadena";
bool=true;

//bool= (bool) 34;

let cadena= "una cadena que si";
console.log(cadena);

let miUnion: number | string | boolean;
miUnion = "Puede ser cadena";
miUnion=3434;
miUnion= false;


function recibeEnumerado(param: "cadena1" | "cadena2" | "cadena3"){
    console.log("");
}


interface Tiempo{
    dia: number,
    mes: number,
    anio: number
}

var miCumple: Tiempo = {dia:7, mes: 10, anio: 2017};
console.log("El dia de mi cumple: "+ miCumple.dia);

let variableASaberQueContiene: any;
variableASaberQueContiene= 34;
variableASaberQueContiene= "jhfjk";

// Ver Rangos
function concatenar(texto1: string, texto2){
    let resultado: string = texto1 + texto2;
    return resultado;
}

console.log(concatenar("aaaaa", "bbbb"));

function cumpliAnio(miCumple){
    console.log("El año de mi cumple: ", miCumple.anio);
}