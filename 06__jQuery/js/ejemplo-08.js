$(document).ready(initializeEvents);

function initializeEvents() {
    $("td").mousedown(downEvent);
    $("td").mouseup(upEvent);
}
var last, diff;

function downEvent() {
    $(this).css("background-color", "#ff0");
    last = event.timeStamp;
}

function upEvent() {
    $(this).css("background-color", "#fff");
    diff = event.timeStamp - last;
    alert(diff);
    if (diff >= 2) {
        alert("Se te ha pegado el deditooo");
    }
}