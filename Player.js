class Player{
    constructor(x,y,width,height){

this.body = Bodies.rectangle(x,y,width,height)
this.width = width;
this.height = height;
World.add(world, this.body);
if(keyDown(LEFT_ARROW)){
this.speed = -3
}
if(keyDown(RIGHT_ARROW)){
    this.speed = 3
}

}
display(){
    var pos =this.body.position;
    rectMode(CENTER);
    rect(pos.x, pos.y, this.width, this.height);
}






}