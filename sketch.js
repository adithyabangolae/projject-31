const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var particles = [];


function setup(){
    var canvas = createCanvas(480,800);
    engine = Engine.create();
    world = engine.world;
    


    ground = new Ground(240,790,480,20);
    division1 = new Division(10,630,20,300)
    division2 = new Division(160,630,20,300)
    division3 = new Division(330,630,20,300)
    division4 = new Division(470,630,20,300)
   
    
    
    
}

function draw(){
    background("blue");
    Engine.update(engine);

    if (frameCount%60===0) {

        particles.push(new Particle(random(width/2-10), 10,10));
    }

    ground.display();
    division1.display();
    division2.display();
    division3.display();
    division4.display();
    particles.display();
    
    
}


