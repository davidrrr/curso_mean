var TipoDeVia;
(function (TipoDeVia) {
    TipoDeVia[TipoDeVia["Calle"] = 7] = "Calle";
    TipoDeVia[TipoDeVia["Plaza"] = 3] = "Plaza";
    TipoDeVia[TipoDeVia["Camino"] = 4] = "Camino";
    TipoDeVia[TipoDeVia["Avenida"] = 5] = "Avenida";
    TipoDeVia[TipoDeVia["Carretera"] = 13] = "Carretera";
    TipoDeVia[TipoDeVia["Prueba"] = 14] = "Prueba"; // Vale 14
})(TipoDeVia || (TipoDeVia = {}));
console.log("Calle " + TipoDeVia.Calle);
console.log("Avenida " + TipoDeVia.Avenida);
console.log("Prueba " + TipoDeVia.Prueba);
(function (TipoDeVia) {
    // Por defecto todo en un namespace es privado, hace falta export 
    function esAvenida(texto) {
        if (texto == "Avda") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida = esAvenida;
})(TipoDeVia || (TipoDeVia = {}));
(function (TipoDeVia) {
    // Por defecto todo en un namespace es privado, hace falta export 
    function esAvenida2(texto) {
        if (texto == "Avenida") {
            return TipoDeVia.Avenida;
        }
    }
    TipoDeVia.esAvenida2 = esAvenida2;
})(TipoDeVia || (TipoDeVia = {}));
var miTipoVia = TipoDeVia.Calle;
console.log("Tipo de via: " + miTipoVia);
console.log("Tipo de via: " + TipoDeVia[miTipoVia]);
var avenida = TipoDeVia.esAvenida("Avda");
console.log("Tipo de Via: " + avenida);
switch (avenida) {
    case TipoDeVia.Avenida:
        break;
    case TipoDeVia.Calle:
        break;
    default:
        break;
}
