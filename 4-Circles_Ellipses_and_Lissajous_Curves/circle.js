window.onload = function () {
  //? Access the Canvas Element
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  var centerX = width / 2,
    centerY = height / 2,
    // radius = 200,
    xRadius = 100,
    yRadius = 300,
    // angle = 0,
    xAngle = 10,
    yAngle = 10,
    // speed = 0.1,
    xSpeed = 0.01,
    ySpeed = 0.131,
    x,
    y;

  render();

  function render() {
    context.clearRect(0, 0, width, height);
    x = centerX + Math.cos(xAngle) * xRadius;
    y = centerY + Math.sin(yAngle) * yRadius;

    context.beginPath();

    //! The arc() method creates a circular arc centered at (x, y) with a radius of radius. The path starts at startAngle, ends at endAngle, and travels in the direction given by counterclockwise (defaulting to clockwise).
    context.arc(x, y, 25, 0, Math.PI * 2, false);
    context.fill();

    angle += speed;

    requestAnimationFrame(render);
  }
};
