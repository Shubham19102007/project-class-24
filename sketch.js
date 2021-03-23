const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var hammer;
var box1
var box2
var box3
var ground



function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

    ground = new Ground (600,height,1200,20)
    hammer = new Hammer(10,100);
    box1 = new Box(550,500,50,50)
    box2 = new Box (400,500,150,30)
    box3 = new Box (700,500,150,5)
  


}

function draw(){
    background("lightBlue");
    Engine.update(engine);

    ground.display();
    hammer.display();
    box1.display();
    box2.display();
    box3.display();
 
}