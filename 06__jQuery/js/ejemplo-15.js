$(document).ready(initializeEvents);

function initializeEvents() {
    $("#parrafos p").each(markBySize);
    $("#parrafos p").click(cien);
}

function markBySize() {
    if ($(this).text().length < 100) {
        $(this).css("background-color", "#ff0");
    }
}

function cien() {
    if ($(this).text().length >= 100) {
        $(this).onClick(alert("Parrafo "));
    }
}