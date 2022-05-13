class Cow{
    constructor(x,y,width,height,cowPos){
        this.body = Bodies.rectangle(x,y,width,height);
        World.add(world, this.body);

        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;
        this.cowPos = cowPos;
        this.cow_img = loadImage("./assets/Cow.png");
    }

    display(){
        let pos = this.body.position;
    
        push();
        translate(pos.x, pos.y);
        imageMode(CENTER);
        image(this.cow_img, 0, this.cowPos, this.width, this.height);
        pop();
    }
}

function remove(index){
    setTimeout(function(){
        World.remove(world,cows[index].body)
        delete cows[index]
    },2000)
}