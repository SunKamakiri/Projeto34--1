
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

let engine, world;

let ground;

let alien;
let cow;
let cows = [];
let barn;
let raio;
let bg_img, alien_img, barn_img, raio_img;


function preload(){
  alien_img = loadImage("./assests/Alien.png");
  barn_img = loadImage("./assests/Barn.png");
  bg_img = loadImage("./assests/background.png");
  raio_img = loadImage("./assests/raio colisor.png");
}

function setup() {
  createCanvas(700,700);
  //text("score: " + score + " / total: 100" , x, y )

  engine = Engine.create();
  world = engine.world;

  ground = new Ground(200,385,400,20);
  cow = new Cow(50,100,20,20);

  
}

function draw() {
  background(51);
  Engine.update(engine);

  ground.display();
  image(bg_img,0,0,width,height);

  //colocar o et e as vacas
  alien.display();
  cow.display();
  
}


function laser(){
  if (keyIsDown(DOWN_ARROW)){

  }
}

function spawCows(){
  if(cows.length > 0){
    if(cows[cows.length -1] === undefined || cows[cows.length -1].body.position.x < width -300){
      var positions =[-20,-40,-60,-70];
      var seletor =random(positions);
      var cow = new Cow(width -79,height -60,170,170,seletor)
      cows.push(cow);
    }
    for(var i = 0; i < cows.length; i++){
      if(cows[i]){
        Matter.Body.setVelocity(cows[i].body,{x:-1,y:0})
        cows[i].display();
      }
    }
  }
  else{
    var cow = new Cow(width -79,height -60,170,170,-80)
    cows.push(cow);
  }
}