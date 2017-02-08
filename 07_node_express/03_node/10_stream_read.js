"use strict";

let fs= require("fs");
let streamLectura = fs.createReadStream("fichero.txt");

let data = "";

streamLectura.on("data", cuandoLee);
streamLectura.on("end", cuandoAcaba);

function cuandoLee(chunk){
	data+=chunk;
	console.log("Longitud de buffer: "+ chunk.length);
}

function cuandoAcaba(){
	console.log(data);
	console.log("Acabose");
}

let fs2 = require("fs");
let streamLectura2 = fs.createReadStream("fichero.txt");

let data2 = "";
let buffer;

streamLectura2.on("readable", alCrearStreamLectura);

function alCrearStreamLectura(){
	while(buffer = streamLectura2.read()!=null){
		data2+=buffer;
	}
}

streamLectura2.on("end", function(){
	console.log(data2);
});