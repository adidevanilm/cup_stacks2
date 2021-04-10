const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, pig1;
var backgroundImg,platform;
var bird, slingShot;
var w = 40, h = 50;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
}

function setup(){
    var canvas = createCanvas(1366,650);
    engine = Engine.create();
    world = engine.world;


    ground = new Ground(600,height,1527,60);
    stand = new Ground(810, 480, 300, 30)
    stand2 = new Ground(1215, 340, 220, 30)

    platform = new Platform(100, 359, 400, 300);

    box1 = new Box (735, 475, w, h);
    box2 = new Box (760, 475, w, h);
    box3 = new Box (790, 475, w, h);
    box4 = new Box (810, 475, w, h);
    box5 = new Box (840, 475, w, h);
    box6 = new Box (870, 475, w, h);
    box7 = new Box (900, 475, w, h);

    box8  = new Box (730, 435, w, h);
    box9  = new Box (790, 435, w, h);
    box10 = new Box (815, 435, w, h);
    box11 = new Box (840, 435, w, h);
    box12 = new Box (875, 435, w, h);

    box13 = new Box (780, 395, w, h);
    box14 = new Box (815, 395, w, h);
    box15 = new Box (850, 395, w, h);

    box16 = new Box (815, 355, w, h);




    block1  = new Box (1130, 335, w, h);
    block2  = new Box (1190, 335, w, h);
    block3  = new Box (1215, 335, w, h);
    block4  = new Box (1240, 335, w, h);
    block5  = new Box (1275, 335, w, h);

    block6  = new Box (1180, 295, w, h);
    block7  = new Box (1215, 295, w, h);
    block8  = new Box (1250, 295, w, h);

    block9 = new Box (1215, 255, w, h);


    bird = new Bird(200, 250);

    //log6 = new Log(230,180,80, PI/2);
    slingshot = new SlingShot(bird.body,{x:200, y:275});
}

function draw(){
    background(backgroundImg);
    Engine.update(engine);
    strokeWeight(4);

    ground.display();

    stand.display()
    stand2.display()


    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();
    box7.display();

    box8.display();
    box9.display();
    box10.display();
    box11.display();
    box12.display();

    box13.display();
    box14.display();
    box15.display();

    box16.display();


    block1.display();
    block2.display();
    block3.display();
    block4.display();
    block5.display();

    block6.display();
    block7.display();
    block8.display();

    block9.display();


    bird.display();
    platform.display();
    //log6.display();
    slingshot.display();    
}

function mouseDragged(){
    Matter.Body.setPosition(bird.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot.fly();
}

function keyPressed(){
    if(keyCode === 32 && bird.body.speed<1){
        Matter.Body.setPosition(bird.body,{x:200, y:250})
        slingshot.attach(bird.body);
    }
}