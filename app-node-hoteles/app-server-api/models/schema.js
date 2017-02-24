var mongoose = require("mongoose");

mongoose.connect("localhost:27017/db_hotels");

var Schema = mongoose.Schema;

class Customer {
    name;
    email;
    constructor(nom, em) {
        this.name = nom;
        this.email = em;
    }
}

var CustomerSchema = new Schema({
    name: string,
    email: string
});

module.exports = {
    CustomerModel: mongoose.model("Customer", CustomerSchema);
    Customer: Customer
}