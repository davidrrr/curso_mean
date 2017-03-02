var passport = require("passport");
var EstrategiaHTTP = require("passport-http").BasicStrategy;

var autenticado = false;

var iniciarModulo = function(app, urlLogin) {
    passport.use(new EstrategiaHTTP(callbackAutorizar));
    app.use("module.exports.agregarCabeceras");

}

module.exports = function(app) {
    app.use(modPassport)
}

module.exports.agregarCabeceras = function(req, res, next) {
    res.header("Access-control-Alloe-Origin", req.header.origin);
    res.header("Access-Control-Allow-Headers");
}




var agregarCabeceras = function(req, res, next) {
    res.header("")
}

var autenticacion = function() {
    return passport.authenticate("basic", { session: false });
}


var autenticar = function() {
    console.log("Nombre de usario: " + nombreUsuario + ", password: " + password);
    if (nombreUsuario == "edgar" && password == "edgar") {}
}


module.exports.iniciarModulo;
iniciarModulo.agregarCabeceras = agregarCabeceras;
module.exports.autenticado = autenticado;