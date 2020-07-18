class Player{
    constructor(x,y,width,height){
       var options = {
           restitution : 0.2,
           density : 10,
           friction : 0.5
       }
       //this.visible=255;
       this.runningImage = loadAnimation("images/running1.png","images/running2.png","images/running3.png","images/running4.png","images/running5.png");
       this.image = loadImage("images/standing.png");
       this.body = Bodies.rectangle(x,y,width,height,options);
       this.width = width;
       this.height = height;
       World.add(world,this.body);
    }
    display(){
        var pos = this.body.position;
        imageMode(CENTER);
        image(this.image,pos.x,pos.y,this.width,this.height);
        push();
        if(keyDown(RIGHT_ARROW)){
            //this.visible=this.visible-5;
            //tint(255,10);
            //image(this.image,pos.x,pos.y,this.width,this.height);
            animation(this.runningImage, pos.x,pos.y,this.width,this.height);
            pos.x=pos.x+2;
       }
        pop();
        }
}