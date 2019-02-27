document.onmousemove = animateCircle;
document.onmousedown = startDraw;

var draw = false;

function startDraw(event) {
    draw = !draw;
}

function animateCircle(event) {
    if (!draw) {
        return
    };

    var circle = document.createElement("div");
    circle.setAttribute("class", "circle");
    document.body.appendChild(circle);

    circle.style.left = event.clientX + 'px';
    circle.style.top = event.clientY + 'px';
}