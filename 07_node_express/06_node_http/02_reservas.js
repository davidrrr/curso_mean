var miExpress = require("express");

// Instanciar
var app = miExpress();

var aResponder = (request, response) => {
    console.log("Acceso a la peticion, ", request);
    response.send("Ruta: " + request.originalUrl + " Verbo: " + request.method);
}

// Modulo
var reservas = {
        get: function() {
            return "{ todas las reservas}";
        },
        get: function(idReserva) {
            return "{ todas las reservas}";
        },
        post: function(reserva) {
            console.log("Añadir Reserva " + reserva.id +
                " reserva " + reserva.nombre);
        },
        delete: function(idReserva) {
            console.log("Eliminar reserva " + idReserva);
        }
    } //Fin Modulo

app.get("/", aResponder);
app.post("/", aResponder);
app.delete("/", aResponder);
app.all("/paratodos", aResponder);



app.listen(9000);

console.log("Servidor express Lanzado..");