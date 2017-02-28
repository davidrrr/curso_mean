var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/name/:name', function(requ, res, next) {
    let name = req.params.name;
    if (name == null) {
        res.statusCode = 404;
        res.send("No encontrado!");
    } else {
        res.json('{ "name": "Nombre por defecto", "email": "aaaaa@bbb.com"}');
    }

});

module.exports = router;