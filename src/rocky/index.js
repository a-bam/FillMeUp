var rocky = require('rocky');

rocky.on('draw', function(event) {
  // Get the CanvasRenderingContext2D object
  var ctx = event.context;

  // Clear the screen
  ctx.clearRect(0, 0, ctx.canvas.clientWidth, ctx.canvas.clientHeight);

  // Determine the width and height of the display
  var w = ctx.canvas.unobstructedWidth;
  var h = ctx.canvas.unobstructedHeight;
  
  // Current date/time
  var d = new Date();

  // Set the fill color
  ctx.fillStyle = 'white';
  
  // Create fill
  var timeMinute = d.getMinutes();
  ctx.fillRect(0,h,w,-(h * (timeMinute / 60)));

  // Center align the text
  ctx.textAlign = 'center';
  
  // Set the hour color and font
  ctx.fillStyle = 'red';
  ctx.font = '42px bold numbers Leco-numbers';
  
  // Create hour text
  var timeHour = d.getHours();
  ctx.fillText(timeHour, w / 2, (h /2) - 28, w);
});

rocky.on('minutechange', function(event) {
  rocky.requestDraw();
});