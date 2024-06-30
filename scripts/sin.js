const sin_canvas_parent = document.querySelector(".sin_parent");
const sin_canvas = sin_canvas_parent.querySelector('.sin');
const sin_ctx = sin_canvas.getContext('2d');

// Adjust canvas size
sin_canvas.width = sin_canvas_parent.clientWidth;
sin_canvas.height = sin_canvas_parent.clientHeight;

// Draw something on the canvas
sin_ctx.fillStyle = 'black';
sin_ctx.fillRect(50, 100, 200, 200); // Example black square
sin_ctx.fillRect(70, 120, 250, 100);
// You can add more drawings or animations here