class Throw
{
    constructor(bodyA,pointB)
    {
        var options=
        {
            bodyA:bodyA,
            pointB:pointB,
            stifness:0.01,
            lenght:10

        }

    this.pointB=pointB;
    this.throw=Constraint.create(options);
    World.add(world,this.throw);
    }
    
    fly()
    {
        this.throw.bodyA=null;
    }
    
    launch()
    {
        this.throw.bodyA=bodyA;
    }
    
    display()
     {
     }



}