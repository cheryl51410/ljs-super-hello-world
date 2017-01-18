$(document).ready(function () {
  'use strict';
  console.log('main.js loaded');

  paper.install(window);
  paper.setup(document.getElementById('mainCanvas'));

  /* Code to draw a single circle
  var c = Shape.Circle(200, 200, 50); 
  c.fillColor = 'green';
  */

  /* Code to draw 64 circles 
  var c;
  for (var x = 25; x < 400; x += 50) {
    for (var y = 25; y < 400; y += 50) {
      c = Shape.Circle(x, y, 20);
      c.fillColor = 'green';
    }
  }
  */

  var tool = new Tool();

  // Print hello world in a black circle with white text
  var c = Shape.Circle(200, 200, 80);
  c.fillColor = 'black';
  var text = new PointText(200, 200);
  text.justification = 'center';
  text.fillColor = 'white';
  text.fontSize = 20;
  text.content = 'hello world';

  // Draw green circles where the user clicks.
  tool.onMouseDown = function (event) {
    var c = Shape.Circle(event.point.x, event.point.y, 20);
    c.fillColor = 'green';
  };

  paper.view.draw();

});