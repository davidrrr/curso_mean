var http = require("http");
var url = require("url");

var clientes = JSON.parse(fs.readFileSync("clientes.json").toString());


function ini(request, response) => {
    var miUrl = url.parse(request.url, true);
    console.log("URL: ", miUrl.path);

    response.writeHead(200, { "content-type": "application/json" });

    if (/^\/clientes\/\d/.test(request.url)) {
        var numero = parseInt(request.url.split('/')[2]);
        response.end(JSON.stringify(clientes[numero]));
    } else if (/^\/clientes\/\d/.test(request.url)) {
        response.end(JSON.stringify(clientes));
    } else {
        response.writeHead(404);
    }

    response.end('<html> <
        head > < /head>  <body > < h1 > Hola que pasa estamos ? ? < /h
        1 > < /body > <
        /html>');
        // http://localhost/clientes/45
        // http://localhost?clientes=45
    }


    var server = http.createServer(ini);
    server.listen(8888);
    console.log("Servidor iniciado");