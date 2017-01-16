$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(hideBox);
    $("#boton2").click(showBox);
    $("div div").click(hideDiv);
}

function hideBox() {
    $("#descripcion").hide("slow");
}

function showBox() {
    $("#descripcion").show("fast");
}

function hideDiv() {
    //$("#descripcion").children().click().hide("slow");
    $(this).hide("slow");
}