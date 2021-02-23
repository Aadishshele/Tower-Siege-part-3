const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;


function setup() {
	createCanvas(900,600);


	engine = Engine.create();
	world = engine.world;

	ground1 = new Ground(600,400,250,20)
    box1 = new Box(500,370,50,50)
    box2 = new Box(550,370,50,50)
    box3 = new Box(600,370,50,50)
    box4 = new Box(650,370,50,50)
    box5 = new Box(700,370,50,50)
    box6 = new Box(550,350,50,50)
    box7 = new Box(600,350,50,50)
    box8 = new Box(650,350,50,50)
    box9 = new Box(600,330,50,50)

    polygon = new Polygon(100,100)
    Launch = new Slingshot(polygon.body,{x : 200,y : 300})
   //console.log(polygon.height)
	//Create the Bodies Here.
	

	Engine.run(engine);
  
}

function draw() {
    Engine.update(engine)
    rectMode(CENTER);
    background("red");
  
  
    ground1.display()
    box1.display()
    box2.display()
    box3.display()
    box4.display()
    box5.display()
    box6.display()
    box7.display()
    box8.display()
    box9.display()

    polygon.display()
    Launch.display()
  
    drawSprites();
   
  }

  function mouseDragged(){
    Matter.Body.setPosition(polygon.body,{x : mouseX,y : mouseY})
}

function mouseReleased(){
	Launch.Fly()
}

function keyPressed(){
	if(keyCode === 32){
		Matter.Body.setPosition(polygon.body,{x : 100,y : 540})
	    Launch.Attach(polygon.body)
	}
	
}
