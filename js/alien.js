class Alien {
    constructor(x,y,width,height,alienPos) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      this.alienPos = alienPos;
      
    }

   display(){
      let pos = this.body.position;
      function controlers(){
        if(keyIsDown(RIGHT_ARROW)){
          this.pos.x += 0.5;
        }
        if(keyIsDown(LEFT_ARROW)){
          this.pos.x -= 0.5;
        }
      }
  
      push();
      translate(pos.x, pos.y);
      imageMode(CENTER);
      image(this.alien_img, 0, this.alienPos, this.width, this.height);
      pop();
  }
}

