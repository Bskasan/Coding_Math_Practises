window.onload = function () {
  //? Access the Canvas Element
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  var arrowX = width / 2,
    arrowY = height / 2,
    dX,
    dY,
    angle = 0;

  render();

  function render() {
    context.clearRect(0, 0, width, height);

    context.save();
    context.translate(arrowX, arrowY);
    context.rotate(angle);

    context.beginPath();
    context.moveTo(30, 0);
    context.lineTo(-30, 0);
    context.moveTo(30, 0);
    context.lineTo(10, -10);
    context.moveTo(30, 0);
    context.lineTo(10, 10);
    context.stroke();

    context.restore();
    requestAnimationFrame(render);
  }

  // Listen to the mouse
  document.body.addEventListener("mousemove", function (event) {
    // Distance between mouse position and arrow position.
    dX = event.clientX - arrowX;
    dY = event.clientY - arrowY;

    angle = Math.atan(dY / dX);
  });
};
