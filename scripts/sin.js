const sin_canvas_parent = document.querySelector(".sin_parent");
const sin_canvas = sin_canvas_parent.querySelector('.sin');
const sin_ctx = sin_canvas.getContext('2d');

// Adjust canvas size
resize_sin();

const wave = {
 y: sin_canvas.height/2 + 50,
 length: 0.005,
 amplitude: 80,
 frequency: 0.015,
 lineWidth: 1,
 tilt: Math.PI / -4 // 30 degrees in radians
};
let increment = wave.frequency;

animate_sin();
function animate_sin()
{
  requestAnimationFrame(animate_sin);
  sin_ctx.fillStyle = 'rgba(255,255,255,0.8)';
  sin_ctx.fillRect(0, 0, sin_canvas.width, sin_canvas.height);

  // Save the current state of the canvas
  sin_ctx.save();

  // Move the canvas origin to the center
  sin_ctx.translate(sin_canvas.width / 2, sin_canvas.height / 2);
  // Rotate the canvas context
  sin_ctx.rotate(wave.tilt);
  // Move the origin back to the top-left
  sin_ctx.translate(-sin_canvas.width / 2, -sin_canvas.height / 2);

  sin_ctx.beginPath();
  sin_ctx.moveTo(0, 0); // Start at the top-left corner
  sin_ctx.lineTo(0, wave.y + Math.sin(0 * wave.length + increment) * wave.amplitude);

  for (let i = 0; i < sin_canvas.width; i++) {
    sin_ctx.lineTo(i, wave.y + Math.sin(i * wave.length + increment) * wave.amplitude);
  }

  sin_ctx.lineTo(sin_canvas.width, 0); // Finish at the top-right corner
  sin_ctx.closePath(); // Close the path to fill above the wave

  sin_ctx.fillStyle = "black";
  sin_ctx.fill();

  sin_ctx.strokeStyle = "black";
  sin_ctx.lineWidth = wave.lineWidth;
  sin_ctx.stroke();

  // Restore the canvas to its original state
  sin_ctx.restore();

  increment += wave.frequency;
}

window.addEventListener('resize', resize_sin);

function resize_sin()
{
  sin_canvas.width = sin_canvas_parent.clientWidth * 3.5;
  sin_canvas.height = sin_canvas_parent.clientHeight * 3.5;
}