// Star class
function Star(x, y, size, velocity) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.velocity = velocity;
}

// Starfield class
function Starfield() {
    this.fps = 30;
    this.canvas = null;
    this.width = 0;
    this.height = 0;
    this.minVelocity = 15;
    this.maxVelocity = 30;
    this.stars = [];
    this.intervalId = 0;
}

Starfield.prototype.initialise = function(canvas) {
    this.canvas = canvas;
    this.width = document.body.scrollWidth;
    this.height = document.body.scrollHeight;
    canvas.width = this.width;
    canvas.height = this.height;
};

Starfield.prototype.start = function() {
    var self = this;
    this.intervalId = setInterval(function() {
        self.update();
        self.draw();
    }, 1000 / this.fps);
};

Starfield.prototype.stop = function() {
    clearInterval(this.intervalId);
};

Starfield.prototype.update = function() {
    var dt = 1 / this.fps;
    for (var i = 0; i < this.stars.length; i++) {
        var star = this.stars[i];
        star.y += dt * star.velocity;
        if (star.y > this.height) {
            this.stars[i] = new Star(Math.random() * this.width, 0, Math.random() * 3 + 1,
                Math.random() * (this.maxVelocity - this.minVelocity) + this.minVelocity);
        }
    }    
};

Starfield.prototype.draw = function() {
    var ctx = this.canvas.getContext("2d");
    ctx.clearRect(0, 0, this.width, this.height);
    ctx.fillStyle = "#ffffff";
    for (var i = 0; i < this.stars.length; i++) {
        var star = this.stars[i];
        ctx.fillRect(star.x, star.y, star.size, star.size);
    }
};

// Initialize starfield
var canvas = document.getElementById("starfield");
var starfield = new Starfield();
starfield.initialise(canvas);

// Randomize stars on load
function randomiseStars() {
    starfield.stop();
    var numStars = Math.floor(Math.random() * 500) + 50;
    starfield.stars = [];
    starfield.minVelocity = Math.random() * 30 + 5;
    starfield.maxVelocity = Math.random() * 50 + starfield.minVelocity;

    for (var i = 0; i < numStars; i++) {
        starfield.stars.push(new Star(
            Math.random() * starfield.width,
            Math.random() * starfield.height,
            Math.random() * 3 + 1,
            Math.random() * (starfield.maxVelocity - starfield.minVelocity) + starfield.minVelocity
        ));
    }
    starfield.start();
}

window.addEventListener("load", () => {
    randomiseStars();
});

// Resize canvas on window resize
window.addEventListener("resize", () => {
    starfield.width = document.body.scrollWidth;
    starfield.height = document.body.scrollHeight;
    canvas.width = starfield.width;
    canvas.height = starfield.height;
});
