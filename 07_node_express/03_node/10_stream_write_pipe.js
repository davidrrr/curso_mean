"use strict";

/*
let fs= require("fs");

let streamLectura = fs.createReadStream("fichero.txt");
let streamEscritura = fs.createWriteStream("fich_write_2.txt");

streamLectura.setEncoding("utf8");

let data = "";

streamLectura.on("data", alLeerDelStream);

function alLeerDelStream(chunkBuffer){
	streamEscritura.write(chunkBuffer.toString());
	
}
*/

let fs2= require("fs");
let zlib = require("zlib");

fs2.createReadStream("fichero.txt.gz")
	.pipe(zlib.createGunzip())
	.pipe(fs2.createWriteStream("fichero_salida.txt"));