canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

var color = "black";
var width = 2;
var radius = 6;
var mouseEvent = "empty";

canvas.addEventListener("mousedown", mouse_Down);

function mouse_Down(e) {
    color = document.getElementById("color1").value;
    width = document.getElementById("widthN").value;
    radius = document.getElementById("radius1").value;
    mouseEvent = "mousedown";
}

canvas.addEventListener("mouseup", mouseUp);

function mouseUp(e) {
    mouseEvent = "mouseup";
}

canvas.addEventListener("mouseleave", mouseLeave);

function mouseLeave(e) {
    mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", mouseMoveb);

function mouseMoveb(e) {
    currentX = e.clientX - canvas.offsetLeft;
     currentY = e.clientY - canvas.offsetTop;

if (mouseEvent = "mousedown")
{
    ctx.beginPath();
    ctx.strokeStyle = color;
    ctx.lineWidth = width;
    ctx.arc(currentX, currentY, radius, 0, 360 );
    ctx.stroke();
}

}
