$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
    $("div").click(hideBox);
}

function hideBox() {
    $("#descripcion").hide("slow");
}

function showBox() {
    $("#descripcion").show("fast");
}

function hideDiv() {
    $("#descripcion").children().click().hide("slow");
    //$("div").click.hide("slow");
}