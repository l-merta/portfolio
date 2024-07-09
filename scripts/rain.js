const rain_canvas_parent = document.querySelector(".rain_parent");
const rain_canvas = rain_canvas_parent.querySelector('.rain');
const rain_ctx = rain_canvas.getContext('2d');

const rainSquares = [];
const numSquares = 8;
const maxSize = 6;
const minSize = 4;
const maxSpeed = 16;
const minSpeed = 10;

resize_rain();

class RainSquare {
  constructor(x, y, size, speed) {
      this.x = x;
      this.y = y;
      this.size = size;
      this.speed = speed;
      this.color = 'rgba(0, 0, 0, 0.8)';
  }

  draw(lastPoint) {
    //rain_ctx.fillStyle = 'rgba(0, 0, 0, 0.8)';
    //rain_ctx.fillRect(this.x, this.y, this.size, this.size);
    rain_ctx.beginPath();
    rain_ctx.strokeStyle = this.color;
    rain_ctx.lineWidth = this.size;
    rain_ctx.moveTo(lastPoint.x, lastPoint.y);
    rain_ctx.lineTo(this.x, this.y);
    rain_ctx.stroke();
    rain_ctx.closePath();
  }

  update() {
    const lastPoint = {x: this.x, y: this.y};

    this.x += this.speed;
    this.y += this.speed;

    // Reset position if it goes out of bounds
    if (this.x > rain_canvas.width || this.y > rain_canvas.height) {
      this.color = 'rgba(0, 0, 0, 0.0)';
        this.x = (Math.random() - 0.5) * rain_canvas.width * 2;
        this.y = Math.random() * -rain_canvas.height;
    }
    else
    {
      this.color = 'rgba(0, 0, 0, 0.65)';
    }

    this.draw(lastPoint);
  }
}

for (let i = 0; i < numSquares; i++) {
    const size = Math.random() * (maxSize - minSize) + minSize;
    const speed = Math.random() * (maxSpeed - minSpeed) + minSpeed;
    const x = Math.random() * rain_canvas.width;
    const y = Math.random() * rain_canvas.height;
    rainSquares.push(new RainSquare(x, y, size, speed));
}

function animate_rain() {
  //console.log(rain_canvas.width, rain_canvas.height);
  //rain_ctx.clearRect(0, 0, rain_canvas.width, rain_canvas.height);
  rain_ctx.fillStyle = 'rgba(255, 255, 255, 0.3)';
  rain_ctx.fillRect(0, 0, rain_canvas.width, rain_canvas.height);
  //
  rainSquares.forEach(square => square.update());
  requestAnimationFrame(animate_rain);
}

animate_rain();

function resize_rain() {
  rain_canvas.width = rain_canvas_parent.clientWidth;
  rain_canvas.height = rain_canvas_parent.clientHeight;
}

window.addEventListener('resize', resize_rain);
