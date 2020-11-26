class Box {
    constructor(x, y, w, h){
        var options = {
            isStatic: false,
            restitution: 0.8,
            friction: 1.0,
            density: 0.04
        }
    this.body = bodies.rectangle(x, y, w, h ,options);
    this.width = w;
    this.height = h;
    World.add(world, this.body)
    }

display(){
    push();
    var pos = this.body.position;
    var angle = this.body.angle;
    translate(pos.x, pos.y, angle)
    fill("lightblue")
    rectMode(CENTER);
    rect(0,0, this.width, this.height);
    pop();
}
}
