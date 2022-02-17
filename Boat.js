class Boat{
    constructor(x,y,width,height,boatPos,boatAnimation){

        this.x = x;
        this.y = y;

        this.width = width;
        this.height = height;

        this.boatPosition = boatPos;
        this.Animation = boatAnimation;

        this.image = loadImage("barc.png");


        var options = {
            restitution: 0.8,
            friction: 1.0,
            density: 1.0
        }

        this.body = Bodies.rectangle(x,y,width,height,options);

        World.add(world,this.body);
    }

    animate(){
        this.speed += 0.05%1.1;

    }

    display(){

        var pos = this.body.positon;

        var index = floor(this.speed % this.Animation.length);

        push();

        translate(this.x,this.y);

        imageMode(CENTER);
        image(this.Animation[index],0,this.boatPosition,this.width,this.height);

        pop();
    }
}