var mongoose = require("mogoose");
var Schemas = require("./schema");

function grabar(customer, callback) {
    let customer = new Schemas.CustomerModel(customer);

    customer.save((error, customer) => {
        if (error) {
            console.error("Error al guardar");
        } else {
            console.log("Cliente guardado");
        }
        if (typeof callback != "undefined") {
            callback(error, customer);
        }
    })
}

function leer(customer, callback) {
    let name = customer.name;

    Schemas.CustomerModel.find({ "name": name }, { "__v": 0 }, (error, customers) => {
        if (typeof callback != "undefined") {
            callback(error, customer);
        }
    });
}