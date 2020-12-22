class Bob{

    constructor(x,y,r){
        var options={
            isStatic: false,
            restitution: 1.15,
            friction: 0.5,
            density: 0.1
        }
        this.x=x;
        this.y=y;
        this.r=r;
        this.body=Matter.Bodies.circle(this.x, this.y, this.r/2, options);
        World.add(world, this.body);
    }
    display(){

        var paperPos = this.body.position;
        push();
        translate(paperPos.x, paperPos.y);
        stroke("green")
        strokeWeight(2);
        fill("black")
        ellipse(0,0,this.r,this.r);
        pop();
    }
}   