function newCanvasElement(zIndex) {
    var canvas = document.createElement('canvas');

    canvas.style.position = 'fixed';
    canvas.style.top = '0px';
    canvas.style.left = '0px';
    canvas.style.zIndex = zIndex;

    return canvas;
}

function setCanvasSize(canvas) {
    canvas.width = document.documentElement.clientWidth;
    canvas.height = document.documentElement.clientHeight;
}

function exampleDraw(canvas) {
    if (canvas.getContext) {
        var ctx = canvas.getContext('2d');

        ctx.fillStyle = 'green';
        ctx.fillRect(0, 0, canvas.width, canvas.height);
    }
}

function draw() {
    // zIndex is set to -1 so the canvas is behind all of the page content
    var zIndex = -1;

    // create, correctly size and append the canvas to the page
    var canvas = newCanvasElement(zIndex);
    setCanvasSize(canvas);
    document.body.appendChild(canvas);

    // resize the canvas on the window onresize event
    window.onresize = function () {
        setCanvasSize(canvas);
        exampleDraw(canvas);
    };

    exampleDraw(canvas);
}