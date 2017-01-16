$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
    $("div div").click(hideDiv);
}

function hideBox() {
    $("#descripcion").fadeOut("slow");
}

function showBox() {
    $("#descripcion").fadeIn("slow");
}

function hideDiv() {
    $(this).fadeOut("slow");
}