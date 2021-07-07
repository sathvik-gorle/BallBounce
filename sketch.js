
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var wedge;
var angle = 0;
var leftWall;

function setup() {
  createCanvas(400,400);

  engine = Engine.create();
  world = engine.world;
  
   var ball_options = {
    restitution: 0.95,
    frictionAir:0.01
  }
   
   var ground_options ={
     isStatic: true
   };
  

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);
  
  leftWall = Bodies.rectangle(10, 200, 10, 400, ground_options)
  World.add(world,leftWall)

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);

  
   wedge = Bodies.rectangle(100, 200, 100, 20, ground_options)
   World.add(world,wedge)
   
 

}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
  rect(leftWall.position.x,leftWall.position.y,10,400)

  Matter.Body.rotate(wedge,angle)
  push()
  translate(wedge.position.x, wedge.position.y)
  rotate(angle)
  rect(0,0,100,20)
  pop()
  angle = angle+0.1

  
 
}

