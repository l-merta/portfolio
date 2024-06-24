window.addEventListener('load', function() {
  const canvas = document.getElementById('myCanvas');
  const ctx = canvas.getContext('2d');

  // Adjust canvas size
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;

  // Draw something on the canvas
  ctx.fillStyle = 'black';
  ctx.fillRect(50, 100, 200, 200); // Example black square
  ctx.fillRect(70, 120, 250, 100);
  // You can add more drawings or animations here
});
