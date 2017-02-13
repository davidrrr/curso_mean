var http = require("http");
var url = require("url");


var server = http.createServer(
        (request, response) => {
            var miUrl = url.parse(request.url);
            console.log("URL: ", miUrl.path);
            //response.writeHead(200, {"content-type": "text/html"});
            if (/^\/clientes\/\d/.test(request.url))
                response.end('<html>  <
                    head > < /head>  <
                    body > < h1 > Hola que pasa estamos ? ? < /h1></body >
                    <
                    /html>');
                    // http://localhost/clientes/45
                    // http://localhost?clientes=45
                });

        server.listen(8888); console.log("Servidor iniciado");