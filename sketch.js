const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var distance = 0;
var engine , world;
var player, playerRunning, playerRunning_img;
var office, ground, intro, obstacles;

function preload(){
office = loadImage("images/bg1.jpg");
playerRunning_img = loadAnimation("images/running1.png","images/running2.png","images/running3.png","images/running4.png","images/running5.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight/2+120);
  engine = Engine.create();
  world = engine.world;

  player = new Player(displayWidth/10,displayHeight/2+70,200,200);
  ground = new Ground(displayWidth/2,displayHeight/2+150,10000,50);
  //intro = new Intro();
  obstacles = new Obstacles(displayWidth-200,displayHeight/2-50);
  
}

function draw() {
  background(office); 
  Engine.update(engine);
  player.display();
  obstacles.display();
}