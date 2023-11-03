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
    
  }
};
