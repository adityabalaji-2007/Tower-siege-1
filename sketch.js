const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var ground;
var engine, world;

function setup(){
    createCanvas(900,400);

    engine = Engine.create();
    world = engine.world;

    ground = new Ground(200,390,900,20);
}

function draw(){
    Engine.update(engine);
    ground.display();
}
