class Box{
    constructor(x, y) {
        var options = {
             isStatic:true,
            'restitution':0.5,
            'friction':0.1,
            'density':1.0
        }
        this.box = Bodies.rectangle(x, y, 40, 50, options);
        this.width = 40;
        this.height = 50;
        
        World.add(world, this.box);
      }

      
      
      display(){
    

        var pos= this.box.position;
        
        
        rectMode(CENTER)
        stroke("black")
        strokeWeight(2.3);
        fill(147,112,219)
        rect(pos.x,pos.y,40,50)
       
      
        
      }    
        
}