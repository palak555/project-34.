class Fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness:0.4,
            length: 500
        }
        this.pointB = pointB
        this.fly = Constraint.create(options);
      
        World.add(world, this.fly);
        
        
    }

    

    display(){
        
            var pointA = this.fly.bodyA.position;
            var pointB = this.pointB;
            
           push();
           stroke("white");
           strokeWeight(5);

            line(pointA.x, pointA.y, pointB.x, pointB.y);
            pop();
          
               
        
       

        
    }
    
}