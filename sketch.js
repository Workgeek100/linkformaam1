const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var distance = 0;
var engine , world;
var player, playerRunning;
var office, ground, intro;

function preload(){
office = loadImage("images/office1.jpg");
playerRunning_img = loadAnimation("images/running1.png","images/running2.png","images/running3.png","images/running4.png","images/running5.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight-200);
  engine = Engine.create();
  world = engine.world;

  player = new Player(displayWidth/10,displayHeight-202,250,250);
  ground = new Ground(displayWidth/2,displayHeight-150,10000,50);
  //intro = new Intro();
  
}

function draw() {
  background(office); 
  Engine.update(engine);
  player.display();
  
}