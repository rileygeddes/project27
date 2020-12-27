class chain{
    constructor(body1, body2, offsetX, offsetY){
        this.offsetX=offsetX
        this.offsetY=offsetY
        var options = {
            bodyA: body1,
            bodyB: body2,
            pointB:{x:this.offsetX,y:this.offsetY}
        }
        console.log(options)
        this.chain = Constraint.create(options);
        World.add(world, this.chain);
    }
    //fly(){
      //  this.chain.body1= null
        
        
     //   }
    display(){
        //if(this.chain.body1){
        var posA = this.chain.bodyA.position;
        var posB = this.chain.bodyB.position
        strokeWeight(4);
        var anchor1X=posA.x
        var anchor1Y=posA.y

        var anchor2X=posB.x+this.offsetX
        var anchor2Y=posB.y+this.offsetY
        line(anchor1X,anchor1Y,anchor2X,anchor2Y);
//        }
    }
    
}