class Paper {
    constructor(x, y, radius, imageRadius) {
        var options = {
            isStatic: false,
            restitution: 0.3,
            friction: 0.5,
            density:1.2
        }
        this.body = Bodies.circle(x,y,radius,options);
        this.radius = radius;
        this.image = loadImage('paper.png');
        this.width = 50;
        this.height = 50;
        World.add(world, this.body);
    }

    display() {
        var pos = this.body.position;
        //fill("pink");
        strokeWeight(0);
        fill("white");
        circle(pos.x, pos.y, this.radius);

        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        pop();
    }
}