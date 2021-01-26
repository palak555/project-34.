class Hero{
    constructor(x,y){
        var options={
            isStatic:false,
        }
        this.hero=Bodies.rectangle(x,y,500,100,options)
        this.image=loadImage("hero.png")
        World.add(world,this.hero);
    }
 
    display(){
        imageMode(CENTER)
        image(this.image,350,500,700,250)
        var angle=this.hero.angle;
        push();
        translate(this.hero.position.x,this.hero.position.y);
        rotate(angle)
        rectMode(CENTER)
        fill("red")
        rect(0,0,50,10)
        pop ();
    }
 }