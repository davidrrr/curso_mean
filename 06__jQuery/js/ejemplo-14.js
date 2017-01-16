$(document).ready(initializeEvents);

function initializeEvents() {
    $("#boton1").click(toggleBox);
}

function toggleBox() {
    //var n = Math.trunc(document.getElementsByTagName("div").length / 2);
    //num = parseInt($("div div").size() / 2);
    num = parseInt($("div div").length / 2);

    alert("Hay " + Math.trunc(num));
    $("div div:lt(" + num + ")").toggle("slow");
    $("div div:gt(" + num + ")").toggle("fast");
}