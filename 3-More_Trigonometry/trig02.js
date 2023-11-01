window.onload = function () {
  //? Access the Canvas Element
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  //? Define center position
  var centerY = height * 0.5;
  var centerX = width * 0.5;
  var baseRadius = 100;
  var baseAlpha = 0.5;
  var offSet = 50;
  var speed = 0.1;
  angle = 0;

  //? Render Function
  render();

  function render() {
    // var radius = baseRadius + Math.sin(angle) * offSet;
    var alpha = baseAlpha + Math.sin(angle) * offSet;

    //* clearRect() method of the Canvas 2D API erases the pixels in a rectangular area by setting them to transparent black.
    context.fillStyle = "rgba(0, 0, 0, " + alpha + ")";

    context.clearRect(0, 0, width, height);
    context.beginPath();
    context.arc(centerX, centerY, 100, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;

    // Render Animation over and over
    requestAnimationFrame(render);
  }
};
