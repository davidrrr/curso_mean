var assert = require("assert");
var miFuncion = require("./funcion");

describe("Bat 1", function() {
    it("Probando funcion bien", function() {
        assert.ok(miFuncion(5, 3) == 5 + 3);
    });
    it("Probando funcion mal", function() {
        assert.ok(miFuncion(5, 3) == 5 + 2, "Ha ido mal");
    });
});