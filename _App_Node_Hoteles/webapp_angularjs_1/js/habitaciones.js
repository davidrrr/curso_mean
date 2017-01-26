function ControladorHabitaciones() {
    this.lista = Modelo.Habitaciones.lista;
    this.cantidad = function() {
        return Modelo.Habitaciones.lista.length;
    }
    this.delHabitacion = function(numero) {
        Modelo.Habitaciones.quitar(numero);
    }
}

function ControladorHabitacion() {
    this.numero = 1;
    this.doble = false;

    this.addHabitacion = function() {
        Modelo.Habitaciones.agregar({
            numero: this.numero,
            doble: this.doble
        });
        this.numero++;
    }
}

function ControladorReservas() {
    this.lista = Modelo.Reservas.lista;

    this.ListaReservaDia(fecha){
        var reservasDia = [];
        for (i = 0; i < Modelo.Reservas.lista.length; i++) {
            var encontrado = false;
            var f = Modelo.Reservas.lista[i].fecha_inicio;
            while (!encontrado && (f <= Modelo.Reservas.lista[i].fecha_fin)) {
                if (fecha == f) {
                    reservasDia.push(Modelo.Reservas.lista[i]);
                    encontrado = true;
                }
                f++;
            }
        }
        return reservasDia;
    }
}

var moduloAplicacion = angular.module("habitaciones", []);

moduloAplicacion.controller("HabitacionesController", ControladorHabitaciones);
moduloAplicacion.controller("HabitacionController", ControladorHabitacion);
moduloAplicacion.controller("ReservasController", ControladorReservas);