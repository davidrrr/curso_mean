$(document).ready(initializeEvents);

function initializeEvents() {
    $(document).mousemove(moveDetected);
    //$(document).mousemove(followCursor);
    followCursor.init();
    document.body.onmousemove = followCursor.run;
}

function moveDetected(event) {
    $("#coordx").text("Coordenada x=" + event.clientX);
    $("#coordy").text("Coordenada y=" + event.clientY);
    var c = {
            "background-color": "#ff0",
            "box-shadow": "10px 5px 5px black",
            "border": "2px dotted",
            //"block-size": "20px",
            "size": " 20px 20px 20px"
        }
        //$("#raton").css(c);
}

function getMouseCoords(e) {
    var e = e || window.event;
    document.getElementById('msg').innerHTML = e.clientX + ', ' +
        e.clientY + '<br>' + e.screenX + ', ' + e.screenY;
}

var followCursor = (function() {
    var s = document.createElement('div');
    s.style.position = 'absolute';
    s.style.margin = '0';
    s.style.width = '50px';
    s.style.height = '50px';
    s.style.padding = '5px';
    s.style.border = '2px solid red';

    return {
        init: function() {
            document.body.appendChild(s);
        },

        run: function(e) {
            var e = e || window.event;
            s.style.left = (e.clientX - 5) + 'px';
            s.style.top = (e.clientY - 5) + 'px';
            getMouseCoords(e);
        }
    };
}());