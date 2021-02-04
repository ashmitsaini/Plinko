const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground;
var division1, division2, division3, division4, division5, division6, division7;

var particles = [];
var plinkos = [];
var divisions = [];

var divisionHeight = 300

function setup() {
  createCanvas(480,800);

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(width/2, height-5, width, 10);


  //Create divisions
  for(var k = 0; k <= width; k = k + 80){
    divisions.push(new Division(k, height - divisionHeight/2, 10, divisionHeight));
  }


  //Create Plinkos
  for(var j=40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 75, 20));
  }

  for(var j=15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 175, 20));
  }

  for(var j=40; j <= width; j=j+50){
    plinkos.push(new Plinko(j, 275, 20));
  }

  for(var j=15; j <= width-10; j=j+50){
    plinkos.push(new Plinko(j, 375, 20));
  }

}

function draw() {
  background(0);
  Engine.update(engine);
  ground.display();


  //Create particles
  if(frameCount % 5 === 0){
    particles.push(new Particle(random(width/2-80, width/2+80), 20,20));
  }

  //Display objects
  for(var j = 0; j < particles.length; j++){
    particles[j].display();
  }

  for(var k = 0; k < divisions.length; k++){
    divisions[k].display();
  }

  for(var l = 0; l < plinkos.length; l++){
    plinkos[l].display();
  }

  drawSprites();
}