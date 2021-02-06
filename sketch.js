const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint
var score=0
var engine, world;
var box1;
var birdsound, pigsound
var birds=[]
function preload(){
    backgroundimg = loadImage("bg.jpg")
    birdsound=loadSound("bird_flying.mp3")
    pigsound=loadSound("pig_snort.mp3")
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,300,70,70);
    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    box5 = new Box(810,160,70,70);
    ground = new Ground(600,height,1200,20);
    platform = new Ground(150,305,300,170);
    log1= new Log(810,260,300,PI/2);
    log2= new Log(810,180,300,PI/2);
    log3= new Log(760,120,150,PI/7);
    log4= new Log(870,120,150,-PI/7);
    //log5= new Log(230,1180,80,PI/2);
    pig1 = new Pig(810,350);
    pig2 = new Pig(810,220);
    bird=new Bird(200,50);
    bird2=new Bird(150,170);
    bird3 = new Bird(100,170);
    bird4 = new Bird(50,170);
    birds.push(bird4)
    birds.push(bird3)
    birds.push(bird2)
    birds.push(bird)
    sling = new slingshot(bird.body, {x:200, y:50});
}

function draw(){
    background(backgroundimg);
    Engine.update(engine);
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
   ground.display();
   platform.display();
   bird.display();
   bird2.display();
   bird3.display();
   bird4.display();
   log1.display();
   log2.display();
   log3.display();
   log4.display();
   //log5.display();
   pig1.display();
   pig2.display();
   pig1.score()
   pig2.score()
   textSize(25)
   text("score"+score,width-300,20)
   sling.display();
}

function mouseDragged(){
    Matter.Body.setPosition(birds[birds.length-1].body,{x:mouseX, y:mouseY})
    Matter.Body.applyForce(birds[birds.length-1].body,birds[birds.length-1].body.position,{x:5,y:-5})
}

function mouseReleased(){
sling.fly()
Matter.Body.applyForce(bird.body, bird.body.position, {x:5, y:-5})
birdsound.play()
birds.pop()
}
function keyPressed(){
    if(keyCode==32){
        if(birds.length>0){
            Matter.Body.setPosition(birds[birds.length-1].body,{x:200, y:50})
            sling.attach(birds[birds.length-1].body)
        }
    }
}