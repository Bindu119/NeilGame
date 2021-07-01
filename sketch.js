const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var player,ground,block;

function setup(){
    createCanvas(400,600);
    engine = Engine.create();
    world = engine.world;

     player=new Player(200,300);
     ground=new Ground(200,590,400,20);
     block=new Block(100,60);
}

function draw(){
    background("green");
    Engine.update(engine);

     player.display();
     ground.display();
     block.display();
  
    
}