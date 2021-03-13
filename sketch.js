
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine, world;
var plane;
var hammer;
var stone;
var rubber;

function setup() {
	var canvas = createCanvas(800, 600);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	plane = new Plane(400, height, 800, 20);
	hammer = new Hammer(400, 350);
	stone = new Stone(200, 500, 100, 100);
	rubber = new Rubber(600, 500, 50, 50);
  
}


function draw() {
  background("lightblue");
  Engine.update(engine);
  plane.display();
  hammer.display();
  stone.display();
  rubber.display();
}