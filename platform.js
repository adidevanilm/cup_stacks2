class Platform {
    constructor(x,y,width,height) {
      var options = {
          isStatic: true
      }
      this.width = width;
      this.height = height;
      this.x = x;
      this.y = y;
      this.img = loadImage("sprites/wooden.png")
    }
    display(){
      
      image(this.img, this.x, this.y, this.width, this.height);
      }
  };
