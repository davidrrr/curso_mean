var assert = require("assert");

//assert.equal(val1, val2);
//.ok(booleano)

describe("nombre", function() {
    describe("Sub Bateria", function() {
        it("NombreTest", function() {
            assert.equal("Hola", "Hola mundo".substring(0, 4));
        });
        it("prueba2", () => { assert.ok(5 == 3); });
    });
});