var helicopterIMG, helicopterSprite, packageSprite,packageIMG;
var packageBody,ground,engine,world,body,bodies,medicines,medicinesBody,holder1,holder2,holder3
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	helicopterIMG=loadImage("helicopter.png")
	packageIMG=loadImage("package.png")
	medicinesIMG=loadImage("med.png")
}

function setup() {
	createCanvas(800, 700);
	rectMode(CENTER);

	medicines=createSprite(width/2,80,20,15)
	medicines.addImage(medicinesIMG)
	medicines.scale=0.2

	packageSprite=createSprite(width/2, 80, 10,10,);
	packageSprite.addImage(packageIMG)
	packageSprite.scale=0.2

	helicopterSprite=createSprite(width/2, 200, 10,10);
	helicopterSprite.addImage(helicopterIMG)
	helicopterSprite.scale=0.6

	groundSprite=createSprite(width/2, height-35, width,10);
	groundSprite.shapeColor=color(255)


	engine = Engine.create();
	world = engine.world;
	
	 medicinesBody=Bodies.circle(width/2,200,5,{restitution:0.6,isStatic:true})
	World.add(world,medicinesBody)


	packageBody = Bodies.circle(width/2 , 200 , 5 , {restitution:0.5, isStatic:true});
	World.add(world, packageBody);

	//Create a Ground
	ground = Bodies.rectangle(width/2, 650, width, 10 , {isStatic:true} );
 	World.add(world, ground);
     
	 holder1= new Holder(310,600)
	 holder2=new Holder(470,600)
	 holder3 =new Holder2(390,630,150,30)
	 
	Engine.run(engine);
}


function draw() {
  rectMode(CENTER);
  background(0);
  packageSprite.x= packageBody.position.x 
  packageSprite.y= packageBody.position.y 
  medicines.x=medicinesBody.position.x
  medicines.y=medicinesBody.position.y
  keyPressed();
  holder1.display();
  holder2.display();
   holder3.display();
   drawSprites()
}

function keyPressed() {
 if (keyCode === DOWN_ARROW){
	Matter.Body.setStatic(packageBody,false)
	Matter.Body.setStatic(medicinesBody,false)
}

}
 