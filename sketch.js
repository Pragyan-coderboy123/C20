
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine;
let world;
var ball;
var ground;
var rockBody;
var wall;

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
  
   var rockBody_options={
    
    restitution: 0.5,
    frictionAir:0.03
   }

   var wall_options={
    isStatic: true
    
   }
   wall=Bodies.rectangle(200,350,80,70,wall_options);
   World.add(world,wall)
    
   rockBody=Bodies.circle(200,70,30,rockBody_options);
   World.add(world,rockBody);
   

  ground = Bodies.rectangle(200,390,400,20,ground_options);
  World.add(world,ground);

  ball = Bodies.circle(100,10,20,ball_options);
  World.add(world,ball);
  
  rectMode(CENTER);
  ellipseMode(RADIUS);
}


function draw() 
{
  background(51);
  Engine.update(engine);
  
  ellipse(ball.position.x,ball.position.y,20);
  rect(ground.position.x,ground.position.y,400,20);
 

  ellipse(rockBody.position.x, rockBody.position.y,30)
  rect(wall.position.x,wall.position.y,80,70);
}

