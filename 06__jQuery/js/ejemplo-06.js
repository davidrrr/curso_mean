$(document).ready(initializeEvents);

function initializeEvents() {
    /* $("a").mouseover(inMouseEvent);
     $("a").mouseout(outMouseEvent);*/
    $("a").hover(inMouseEvent, outMouseEvent);
}

function inMouseEvent() {
    var c = {
        "background-color": "#ff0",
        "box-shadow": "10px 5px 5px gold",
        "border": "2px dotted"
    }
    $(this).css(c);
}

function outMouseEvent() {
    var c = {
        "background-color": "#fff",
        "box-shadow": "none",
        "border": "none"
    }
    $(this).css(c);
}