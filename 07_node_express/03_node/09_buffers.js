"use strict";

const miBuf = Buffer.from("Hola mundo", "utf-8");
miBuf[3]=65;
const cadena = miBuf.toString();
const miBuf2= Buffer.alloc(20);
miBuf2[2]=miBuf[0];
miBuf2[4]=miBuf[1];
miBuf2[6]=miBuf[2];
miBuf2[8]=miBuf[3];

const buf3= Buffer.alloc(15);
const word1 = Buffer.from("hello", "utf8");
const word2 = Buffer.from("world", "utf8");

word1.copy(buf3, 0);
word2.copy(buf3, 7);

buf3.writeUInt32BE(123456, 13);
buf3.writeUInt32BE(123456, 17);
console.log(buf3.toString("utf8"));

console.log("Valor del buffer");

console.log(miBuf);

console.log("Valor de la cadena");
console.log(cadena);
