//declare variables
const Engine = Matter.Engine;
const Bodies = Matter.Bodies;
const World = Matter.World;

var distance = 0;
var engine , world;
var player, playerRunning, playerRunning_img;
var office, ground, intro, obstacles, howtoplay, game;
var gameState = 0;
var intro_bg, bg1, bg2, bg3, bg4, bg5, bg6;


function preload(){
  //Custom function to load all the background sprites
  loadBgSprites();
}

function setup() {
  createCanvas(displayWidth,displayHeight/2+120);
  engine = Engine.create();
  world = engine.world;

  //creating a player variable
  player = new Player(displayWidth/10,displayHeight/2+70,200,200);
  //creating a ground variable
  ground = new Ground(displayWidth/2,displayHeight/2+150,10000,50);
  //creating obstacles variable
  obstacles = new Obstacles(displayWidth-200,displayHeight/2-50);
  //creating the introduction
  intro = new Intro();

  game = new Game();
}

function draw() {
  background(intro_bg); 
  //Update the engine of the physics engine
  Engine.update(engine);
  player.display();
  ground.display();
  obstacles.display1();
  

  //declare the functions of the game class
  game.update();
  gameState = game.getState();

  

  if(gameState===0){
    game.storyLine();
  }
  

  if(gameState===1){
    game.playBg1();
  }

  if(gameState===1 && player.position.x>displayWidth){
    gameState=2;
  }

  if(gameState===2){
    game.playBg2();
  }

  if(gameState===3){
    game.playBg3();
  }

  if(gameState===4){
    game.playBg4();
  }

  if(gameState===5){
    game.playBg5();
  }



}

function loadBgSprites(){
  intro_bg = loadImage("images/bg1.jpg");
  bg1 = loadImage("images/bg2.jpg");
  bg2 = loadImage("images/bg3.jpg");
  bg3 = loadImage("images/bg4.jpg");
  bg4 = loadImage("images/bg5.png");
  bg5 = loadImage("images/bg6.jpg");
  bg6 = loadImage("images/bg7.jpg");
}