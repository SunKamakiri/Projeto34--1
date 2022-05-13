class Ground 
{
  constructor(x, y, w, h) 
  {
    let options = {
      isStatic:true
    };
    
    this.body = Bodies.rectangle(x, y, w, h, options);
    this.w = w;
    this.h = h;
    World.add(world, this.body);
  }

  display() {
    var pos = this.body.position;
    push();
    rectMode(CENTER);
    stroke(255);
    fill(127);
    rect(pos.x, pos.y, this.w, this.h);
    pop();
  }

  // move(){
  //   Matter.Body.setVelocity(this.body, {x: -0.5, y: 0})
  // }
  
}

// EXEMPLO CORPO QUE SE MOVE

// display() {
//   var pos = this.body.position;
//   push();
//   translate(pos.x, pos.y);
//   rectMode(CENTER);
//   stroke(255);
//   fill(127);
//   rect(0, 0, this.w, this.h);
//   pop();
// }



