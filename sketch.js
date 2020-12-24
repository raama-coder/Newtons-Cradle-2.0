const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var ball1, ball2, ball3, ball4, ball5;
var rope1, rope2, rope3, rope4, rope5;

function setup() {
	createCanvas(1000, 600);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	ball1=new Bob(401,500,50);
	ball2=new Bob(450,500,50);
	ball3=new Bob(501,500,50);
	ball4=new Bob(550,500,50);
	ball5=new Bob(601,500,50);

	rope1=new Rope (ball1.body, {x: 401, y: 100});
	rope2=new Rope (ball2.body, {x: 450, y: 100});
	rope3=new Rope (ball3.body, {x: 501, y: 100});
	rope4=new Rope (ball4.body, {x: 550, y: 100});
	rope5=new Rope (ball5.body, {x: 601, y: 100});
	
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background("black");
  
  ball1.display()
  ball2.display()
  ball3.display()
  ball4.display()
  ball5.display()
  
  rope1.display()
  rope2.display()
  rope3.display()
  rope4.display()
  rope5.display()

//   drawSprites();
} 

function mouseDragged(){
	Matter.Body.setPosition(ball1.body, {x:mouseX, y:mouseY})
}
