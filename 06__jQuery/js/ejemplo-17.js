$(document).ready(inicializarEventos);

function inicializarEventos() {
    $("#peticion_ajax").click(cargar);
}

function cargar() {
    $("#contenido_de_ajax").load("./ejemplo-17-fichero_alojado_en_servidor.txt");
}