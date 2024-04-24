const canvas = document.getElementById("canvas");
let ctx = canvas.getContext('2d');


const window_height = window.innerHeight;
const window_width = window.innerWidth;


canvas.height = window_height;
canvas.width = window_width;

canvas.style.background = 'blue';

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
       
        this.draw(context);

        if ((this.posX + this.radius > window_width)) {
            this.dx = -this.dx;
            
        }

        if ((this.posX - this.radius < 0)) {
            this.dx = -this.dx;
           
        }

        if ((this.posY - this.radius < 0)) {
            this.dy = -this.dy;
            
        }

        if ((this.posY + this.radius > window_height)) {
            this.dy = -this.dy;
            
        }
        this.posX += this.dx;
        this.posY += this.dy;
    }
}

let circles = [];
const numCircles = 10; 

for (let i = 0; i < numCircles; i++) {
    let randomX = Math.random()  * window_width;
    let randomY = Math.random()  * window_height;
    let randomRadius = Math.floor(Math.random() * 100 + 25);
    let randomSpeed = Math.random() * 10 + 1; 
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