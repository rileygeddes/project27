class bob {
    constructor(x, y) {
        var options = {
            isStatic:false,
            restitution:1,
            friction:0.5,
            density:1.2
             }
             console.log(options)
    this.body = Bodies.circle(x, y, 25, options);
      this.width = 70;  
      this.height = 70; 
                        
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      var angle = this.body.angle;
      push();
      translate(pos.x, pos.y);
      rotate(angle);
      ellipseMode(RADIUS)
      fill("white");
      ellipse(0, 0,25,25);
      
      pop();
      
    }
}