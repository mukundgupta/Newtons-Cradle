class SlingShot{
    constructor(body1, body2,offsetX,offsetY){
        var options = {
            bodyA: body1,
            bodyB:body2,
            stiffness: 0.7,
            length: 200,
            //pointB:{x:this.offsetX,y:this.offsetY}
            
        }
        this.sling = Constraint.create(options);
        World.add(world, this.sling);
    }

    display(){
        
        var pointA = this.sling.bodyA.position;
        var pointB = this.sling.bodyB.position;

        var Anchor1X = pointA.x
        var Anchor1Y = pointA.y

        var Anchor2X = pointB.x+offsetX
        var Anchor2Y = pointB.y+offsetY
        strokeWeight(4);
        stroke("blue")
        fill("blue")
        line(Anchor1X, Anchor1Y, Anchor2X, Anchor2Y);
    
}
    
}
