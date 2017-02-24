var express = require('express');
var router = express.Router();
var model = require("../../models/customer.model");


/* GET users listing. */
// '/name/:name/:email'   or   '/name/:name?name=kjhg&mail?'
router.get('/name/:name', function(req, res, next) {
    let name = req.params.name;
    if (name == null) {
        res.statusCode = 404;
        res.send("No encontrado!");
    } else {
        model.leer({ name: name }, fnCallback);
        var fnCallback = function(error, customer) {
                if (error) {
                    console.log("No se ha leido la bbdd");
                } else {
                    res.json(customer);
                }
            }
            /*
            res.json(`{
              "name": "Nombre por defecto",
                "email": "aaaaaaaa@bbbbb.com"
              }`);
            */
    }
});

/* POST metodo */
router.post("/", function(req, res) {
    let jsonCustomer = req.body;
    let customer = JSON.parse(JSONCustomer);
    var fnCallback = function

});


module.exports = router;