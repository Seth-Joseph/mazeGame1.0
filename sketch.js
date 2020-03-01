const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var log6,slingshot;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1200,20);
   // platform = new Ground(150, 305, 300, 170);

    box1 = new Box(700,320,40,40);
    box2 = new Box(920,320,40,40);
    box3 = new Box(810, 350,40,40);
    box4 = new Box(810,260,40,40);

    box5 = new Box(700,240,40,40);
    box6 = new Box(920,240,40,40);
    box7 = new Box(810, 220,40,40);

    box8 =  new Box(810,180,40, 40);

    box9 = new Box(810,160,40,40);
    box10 = new Box(760,120,40,40);
    box11 = new Box(870,120,40, 40);

    bird = new Bird(100,100);

    log6 = new Log(250,300,50,PI/2);
    slingshot = new Chain(bird.body,{x:210,y:100});
}

function draw(){
    background("white");


    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();

    box6.display();
    box7.display();
    box8.display();
    box9.display();

    box10.display();
    box11.display();
    ground.display();

    bird.display();
    //platform.display();
    
    //log6.display();
    slingshot.display();
}
function mouseDragged(){
    Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
}
function mouseReleased(){
    Chain.Fly();
}
