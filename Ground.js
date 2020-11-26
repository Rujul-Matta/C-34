class Ground {
    constructor(x, y, w, h){
        this.body = bodies.rectangle(x, y, w, h ,{isStatic: true});
        this.width = w;
        this.height = h;
        World.add(world, this.body)
    }
    display(){
        var pos = this.body.position;
        fill("red")
        rectMode(CENTER);
        rect(pos.x, pos.y, this.width, this.height);
    }
}