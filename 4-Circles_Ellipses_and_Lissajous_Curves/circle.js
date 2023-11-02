window.onload = function () {
  //? Access the Canvas Element
  var canvas = document.getElementById("canvas"),
    context = canvas.getContext("2d"),
    width = (canvas.width = window.innerWidth),
    height = (canvas.height = window.innerHeight);

  var centerX = width / 2,
    centerY = height / 2,
    radius = 200,
    angle = 0,
    speed = 0.1,
    x,
    y;

  render();

  function render() {
    
  }
};
