const Engine = Matter.Engine;
const World = Matter.World;
const Body = Matter.Body;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var  engine ;
var  world ;
var  body = Body;
var  bodies = Bodies;

function setup(){
    createCanvas(1000,600);

    engine = Engine.create();
    world = engine.world;
    
    ground1 = new Ground(width/2, height-50, width, 10);
    ground2 = new Ground(width/2, 1, width, 2);
    ground3 = new Ground(1, height/2, 2, height);
    ground4 = new Ground(width -1, height/2, 2, height);

    ball = new Ball(350,400,50);

    // LEVEL 1 
    x1 = width/2 + 10
    y1 = 510
    Box_1= new Box(x1,y1, 75,75);
    Box_2= new Box(x1 +75,y1, 75,75);
    Box_3= new Box(x1 + 150,y1, 75,75);
    Box_4= new Box(x1 + 225,y1, 75,75);
    Box_5= new Box(x1 + 300,y1, 75,75);
    Box_6= new Box(x1 + 375,y1, 75,75);

    Box__1= new Box(x1 -75,y1, 75,75);
    Box__2= new Box(x1 + 450,y1, 75,75);

    // LEVEL 2
    Box_7= new Box(x1 +75,y1-75, 75,75);
    Box_8= new Box(x1 + 150,y1-75, 75,75);
    Box_9= new Box(x1 + 225,y1-75, 75,75);
    Box_10= new Box(x1 + 300,y1-75, 75,75); 

    Box__3 = new Box(x1, y1-75, 75,75)
    Box__4 = new Box(x1 + 375, y1-75, 75,75)

    // LEVEL 3 
    Box_11= new Box(x1 + 150,y1-150, 75,75);
    Box_12= new Box(x1 + 225,y1-150, 75,75); 

    Box__5 = new Box(x1 + 75, y1-75, 75,75)
    Box__6 = new Box(x1 + 300, y1-75, 75,75)

    // LEVEL 4
    Box__7 = new Box(x1 + 150, y1-225, 75,75);
    Box__8 = new Box(x1 + 225, y1-225, 75,75);

    chain = new rope(ball.body, {x: 350, y: 150});

}
function draw(){
    background(220);

    Engine.update(engine);
    
    ground1.display();
    ground2.display();
    ground3.display();
    ground4.display();

    Box_1.display();
    Box_2.display();
    Box_3.display();
    Box_4.display();
    Box_5.display();
    Box_6.display();
    Box_7.display();
    Box_8.display();
    Box_9.display();
    Box_10.display();
    Box_11.display();
    Box_12.display();

    Box__1.display();
    Box__2.display();
    Box__3.display();
    Box__4.display();
    Box__5.display();
    Box__6.display();
    Box__7.display();
    Box__8.display();

    fill("red")
    ball.display();
    chain.display();
}

function mousePressed(){
    Matter.Body.applyForce(ball.body, ball.body.position,{x:- 25, y: -24})
}
// function mouseReleased(){
//     chain.fly();
// }