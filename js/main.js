const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');

// Get the dimensions of the current screen
const window_height = window.innerHeight;
const window_width = window.innerWidth;

// Set the canvas dimensions to match the screen
canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = '#ff8';

class Circle {
    constructor(x, y, radius, color, text, speed) {
        this.posX = x;
        this.posY = y;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed;
        this.dx = 1 * this.speed;
        this.dy = 1 * this.speed;
    }
    draw(Context) {
        Context.beginPath();
        Context.lineWidth = 5;
        Context.strokeStyle = this.color;
        Context.arc(this.posX, this.posY, this.radius, 0, Math.PI * 2, false);
        Context.stroke();
        Context.closePath();
        Context.textAlign = "center";
        Context.textBaseline = "middle";
        Context.font = "20px Arial";
        Context.fillText(this.text, this.posX, this.posY);
    }

    update(context) {
        // context.clearRect(0, 0, window_width, window_height);
        this.draw(context);

        if ((this.posX + this.radius > window_width)) {
            this.dx = -this.dx;
            // If the circle exceeds the right margin, move left
        }

        if ((this.posX - this.radius < 0)) {
            this.dx = -this.dx;
            // If the circle exceeds the left margin, move right
        }

        if ((this.posY - this.radius < 0)) {
            this.dy = -this.dy;
            // If the circle exceeds the top margin, move down
        }

        if ((this.posY + this.radius > window_height)) {
            this.dy = -this.dy;
            // If the circle exceeds the bottom margin, move up
        }
        this.posX += this.dx;
        this.posY += this.dy;
    }
}

let circles = [];
const numCircles = 10; // Number of circles you want to create

for (let i = 0; i < numCircles; i++) {
    let randomX = Math.random() * window_width;
    let randomY = Math.random() * window_height;
    let randomRadius = Math.floor(Math.random() * 100 + 15);
    let randomSpeed = Math.random() * 5 + 1; // Random speed between 1 and 5
    let circle = new Circle(randomX, randomY, randomRadius, 'red', `Tec${i}`, randomSpeed);
    circles.push(circle);
}

let updateCircle = function () {
    requestAnimationFrame(updateCircle);
    ctx.clearRect(0, 0, window_width, window_height);
    circles.forEach(circle => {
        circle.update(ctx);
    });
}

updateCircle();


//let miCirculo2 = new Circle (250, 100, 50, 'blue', 'pachuca');
//miCirculo2.draw(ctx);

//let miCirculo3 = new Circle (400, 100, 50, 'green', 'mexico');
//miCirculo3.draw(ctx);