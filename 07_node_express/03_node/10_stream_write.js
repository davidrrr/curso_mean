"use strict";

let fs= require("fs");
let streamLectura = fs.createReadStream("fichero.txt");
let streamEscritura = fs.createWriteStream("fich_write.txt");

streamLectura.setEncoding("utf8");

let data = "";

streamLectura.on("data", alLeerDelStream);

function alLeerDelStream(chunkBuffer){
	streamEscritura.write(chunkBuffer.toString());
	
}
