class Ball {
    constructor(x, y, r){
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1.0,
            density: 0.04
        }
    this.body = bodies.circle(x, y, r ,options);
    this.r = r;
    World.add(world, this.body)
    }

display(){
    push();
    var pos = this.body.position;
    var angle = this.body.angle;
    translate(pos.x, pos.y, angle)
    fill(186,185,183)
    ellipseMode(RADIUS);
    ellipse(0,0, this.r);
    pop();
}
}
