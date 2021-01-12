const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
var engine, world;
var box1,box2;
var ground1;
function setup(){
    var canvas = createCanvas(400,400);
    engine = Engine.create();
    world = engine.world;
    box1=new box(200,50,50,50);
    box2=new box(175,100,40,40);
 ground1=new Ground(200,350,400,20)
}
function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    box2.display();
ground1.display();
}