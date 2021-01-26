const Bodies=Matter.Bodies;
const Body=Matter.Body;
const Engine=Matter.Engine;
const World=Matter.World;
const Constraint=Matter.Constraint;


var engine;
var world;

var ground;
var hero;
var fly;
var box1=[];

function preload() {
bg=loadImage("game.png")

}

function setup() {
  createCanvas(3000, 800);
  engine=Engine.create();
  world=engine.world;

  ground=new Ground(100,680)
  hero=new Hero(350,500)
  fly=new Fly(hero.hero,{x:350,y:0})

  for(var b=200; b<680;b=b+50){
    box1.push(new Box(920,b))
  }
  

  for(var o=400; o<680; o=o+50){
    box1.push(new Box(1000,o))
  }

  for(var x=300; x<680; x=x+50){
    box1.push(new Box(1080,x))
  }
  

  for(var c=500; c<680; c=c+50){
    box1.push(new Box(1160,c))
  }
  

}

function draw() {
  background(bg);
  Engine.run(engine);

  ground.display();
  hero.display();
  fly.display();


  for (var b=0; b<box1.length;b++){
    box1[b].display();
  }

  for (var x=0; x<box1.length; x++){
    box1[x].display();
  }

  for (var o=0; o<box1.length; o++){
    box1[o].display();
  }


  for (var c=0; c<box1.length; c++){
    box1[c].display();
  }

  


}


function mouseDragged(){
  Matter.Body.setPosition(hero.hero,{x:mouseX   ,y:mouseY })
}


