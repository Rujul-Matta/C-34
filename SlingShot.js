class rope {
    constructor(o1, pointB){
        
        var options = {
            bodyA: o1,
            pointB: pointB,
            stiffness: 1.2,
            length: 250
        }
        this.pointB = pointB
        this.constraint = Constraint.create(options);
        
        World.add(world, this.constraint);
    }

    fly(){
        this.constraint.bodyA = null;
        
    }
    display(){
        if(this.constraint.bodyA){
            push();
            var posA =  this.constraint.bodyA.position
            var posB =  this.pointB
            line(posA.x, posA.y, posB.x, posB.y);
            pop();
        }
    }
}