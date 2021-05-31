
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5
var roof;

function preload()
{
	
}

function setup() {
	createCanvas(1000, 700);

// bobObject1 = createSprite(200,440,80,80);
// bobObject2 = createSprite(300,440,80,80);
// bobObject3 = createSprite(400,440,80,80);
// bobObject4 = createSprite(500,440,80,80);
// bobObject5 = createSprite(600,440,80,80);

// roof = createSprite(400,100,600,30);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	roof = new Roof(400,100,600,30);
	bobObject1= new Bob(200,440,80);
	bobObject2 = new Bob(300,440,80);
	bobObject3 = new Bob(400,440,80);
	bobObject4 = new Bob(500,440,80);
	bobObject5 = new Bob(600,440,80);

	rope3 = new Rope(bobObject3.body, roof.body, 0,0);
	rope2 = new Rope(bobObject2.body, roof.body, 70,0);
	rope1 = new Rope(bobObject1.body, roof.body, 70*2,0);
	rope4 = new Rope(bobObject4.body, roof.body, -70,0);
	rope5 = new Rope(bobObject5.body, roof.body, -70*2,0);roof = new Roof(665,50,500,30);
	bobObject1= new Bob(810,380,70);
	bobObject2 = new Bob(740,380,70);
	bobObject3 = new Bob(670,380,70);
	bobObject4 = new Bob(600,380,70);
	bobObject5 = new Bob(530,380,70);

	rope3 = new Rope(bobObject3.body, roof.body, 0,0);
	rope2 = new Rope(bobObject2.body, roof.body, 70,0);
	rope1 = new Rope(bobObject1.body, roof.body, 70*2,0);
	rope4 = new Rope(bobObject4.body, roof.body, -70,0);
	rope5 = new Rope(bobObject5.body, roof.body, -70*2,0);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("white");
  drawSprites();

  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  roof.display();	
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();
 
}

function keyPressed(){
	if(keyCode===RIGHT_ARROW){
		Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:200, y:-50})
	}
}



