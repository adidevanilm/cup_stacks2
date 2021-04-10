class Box extends BaseClass {
  constructor(x, y, width, height){
    super(x,y,width,height);
    this.image = loadImage("sprites/cup.png");
        this.Visibility = 255;

  }
  display(){
    console.log(this.body.speed);
    if(this.body.speed<4){
  super.display();
    }else{      World.remove(world,this.body);
     // World.remove(world,this.body);

      push ()
      this.Visibility = this.Visibility-2;
      tint (255,this.Visibility)
    //  image(this.image,this.body.x, this.body.y, 50, 50)
      pop ()
    }

  }
}
