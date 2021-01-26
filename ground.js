class Ground{
   constructor(x,y){
       var options={
           isStatic:true,
       }
       this.ground=Bodies.rectangle(x,y,2500,20,options)
       World.add(world,this.ground);
   }

   display(){
       rectMode(CENTER)
       fill("white")
       rect(this.ground.position.x,this.ground.position.y,2500,20)
   }
}