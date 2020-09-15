const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var paper;
var dustBin1, dustBin2, dustBin3;

function preload()
{

}

function setup() {
	createCanvas(800, 700);

	engine = Engine.create();
	world = engine.world;

	ground = new Ground(600,height,1200,20);

	paper = new Paper(10, 690, 30);
	dustBin2 = new dustBinClass2(575, 683, 200, 20);
	dustBin1 = new dustBinClass1(480, 642, 20, 100);
	dustBin3 = new dustBinClass3(675, 642, 20, 100);


	//dustBin1 = createSprite(475, 655, 20, 100);
	//dustBin1.shapeColor = "red";

	//dustBin2 = createSprite(375, height-15, 200, 20);
	//dustBin2.shapeColor = "red";

	//dustBin3 = createSprite(675, 655, 20, 100);
	//dustBin3.shapeColor = "red";

	
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);

  ground.display();
  paper.display();
  dustBin2.display();
  dustBin1.display();
  dustBin3.display();
  

  drawSprites();
}

function keyPressed() {
	if(keyCode === UP_ARROW) {
		Matter.Body.applyForce(paper.body, paper.body.position, {x:150, y: -140});
	}
}
