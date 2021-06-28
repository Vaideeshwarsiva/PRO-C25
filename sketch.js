const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	paper = new Paper(200, 200, 20);

	dustbin = new Dustbin(745,630,20,10);

	ground = new Ground(200, 690, 1200, 10);


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  
  fill("white");
  rect(805,630,20,100);
  
  paper.display();

  dustbin.display();

  ground.display();
  
  drawSprites();
 
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x: 60, y: -60});
	}
}

