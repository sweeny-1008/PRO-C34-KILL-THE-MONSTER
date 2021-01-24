class Monster
{
    constructor(x,y,width,height)
    {
    var options=
    {
        isStaic:true,
        friction:0.4,
        restitution:0.5
    }
    this.body=Bodies.rectangle(x,y,width,height,options)
    this.width=width;
    this.height=height;
    this.image = loadImage("monster-01.png")
    World.add(world,this.body);
    }
     display()
     {
        push();
        translate(this.body.position.x,this.body.position.y);
        imageMode(CENTER);
        image(this.image0,0,this.width,this.height)
        pop();
     }
    }
