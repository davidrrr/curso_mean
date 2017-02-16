// Variables para la conexión con MongoDB
var clienteMongo = require("mongodb").MongoClient;
var assert = require("assert");

// URL de conexión con la BD
var url = "mongodb://localhost:27017/bd_reservas";

var modelo = {
    //Accion es insertarBase / leerReservas como cadena
    acceder: function(accion, miCallback) {
        clienteMongo.connect(url, function(err, db) {
            assert.equal(null, err);
            console.log("Conexion a bbdd correcta");

            modelo.reservas[accion](db, function(resultado) {
                console.log("Cerrar bbdd");
                db.close();
                if (typeof miCallback == "function") {
                    miCallback(resultado);
                }
            })
        })
    },
    reservas: {
        /* La llamada al método insertarBase ejecuta la inserción de datos en la colección 
        y toma 2 parámetros de entrada. El primer parámetro son los datos a guardar en formato JSON. 
        El segundo parámetro es la postfunción a ejecutar tras la inserción, la cual también 
        toma 2 parámetros de entrada, los cuales explicaremos más adelante. */
        insertarBase: function(db, callback) {
            var coleccion = db.collection("reservas");

            /* Inserción de algunos cursos. En este bloque se define los documentos a guardar 
            en la colección. En este caso se envían 5 cursos, cada una de ellas con su título 
            y maestro. */
            coleccion.insert([
                    { cliente: "Pepito", habitacion: 1 },
                    { cliente: "Otro", habitacion: 1 },
                    { cliente: "Manu", habitacion: 1 }
                ],
                function(err, documentos) {
                    /*Este último bloque del insert es la postfunción que se ejecuta tras la inserción. 
                    El primero parámetro de entrada de la función es la variable err, que contiene 
                    los datos del error, en caso de que se produzca alguno. 
                    El segundo parámetro es el resultado de la operación, el cual se utiliza para 
                    hacer varias comprobaciones mediante tests unitarios. */

                    // Tests unitarios
                    /*Dentro del cuerpo de la función se ejecutan 3 tests unitarios, el primero para
                    comprobar que no hay errores, el segundo para comprobar que el resultado tiene 
                    5 documentos y el tercero para comprobar que se han insertado 3 documentos.*/

                    assert.equal(err, null);
                    assert.equal(3, documentos.result.n);
                    assert.equal(3, documentos.ops.length);

                    // Log de consola: Por último se escribe por el log de consola el mensaje...
                    console.log("Insertadas Reservas");
                    // Y se ejecuta la función callback pasándole el resultado de la operación como parámetro.
                    callback(documentos);
                });
        },
        leerReservas: function(db, callback) {
            // Carga de la colección de reservas.
            var collection = db.collection('reservas');

            // Consulta de los documentos (reservas) de la colección                
            /* Este método hace la búsqueda en la colección con los parámetros de búsqueda dados 
            dentro de las llaves. En este caso no hay parámetros por lo que se trae todos los 
            elementos de la colección. */
            var arrayReservas = collection.find({}).toArray(function(err, res) {
                /*  Se invoca el método toArray para formatear el resultado y poder pasarle la función 
                encargada de hacer los tests unitarios y sacar por pantalla los resultados. */
                assert.equal(err, null);
                assert.notEqual(0, res.length);
                console.log("Se han encontrado las siguientes reservas");
                console.dir(res)
                callback(res);
            });
            return arrayReservas;
        }
    }
}

// LLamamos a la función de inicializar
modelo.acceder("insertarBase", (datosInsertados) => {
    [{ cliente: "Pepito", habitacion: 1 },
        { cliente: "Otro", habitacion: 1 },
        { cliente: "Manu", habitacion: 1 }
    ]
});

module.exports = modelo;