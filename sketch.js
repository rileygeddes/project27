
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint
var bobObject1,bobObject2,bobObject3,bobObject4,bobObject5
var roof1
var chain1,chain2,chain3,chain4,chain5
var bobnum = 0

function preload()
{
	
}

function setup() {
	createCanvas(800, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
    bobObject1 = new bob(300,400)
	bobObject2 = new bob(350,400)
	bobObject3 = new bob(400,400)
	bobObject4 = new bob(450,400)
	bobObject5 = new bob(500,400)
	roof1 = new roof(400,200,300,30)
	chain1 = new chain(bobObject1.body,roof1.body,-bobObject1.body.circleRadius*4,0)
	chain2 = new chain(bobObject2.body,roof1.body,-bobObject2.body.circleRadius*2,0)
	chain3 = new chain(bobObject3.body,roof1.body,-bobObject3.body.circleRadius*0,0)
	chain4 = new chain(bobObject4.body,roof1.body,bobObject4.body.circleRadius*2,0)
	chain5 = new chain(bobObject5.body,roof1.body,bobObject5.body.circleRadius*4,0)

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background("grey");
  
  drawSprites();
 

  bobObject1.display()
  bobObject2.display()
  bobObject3.display()
  bobObject4.display()
  bobObject5.display()

  roof1.display()
  chain1.display()
  chain2.display()
  chain3.display()
  chain4.display()
  chain5.display()
  keypressed();
}

function keypressed(){
	if(keyCode === UP_ARROW && bobnum===0){
	  
	  Matter.Body.applyForce(bobObject1.body,bobObject1.body.position,{x:-150,y:0})
	  console.log(keypressed)
	  bobnum = 1
	  	}
  
  }

