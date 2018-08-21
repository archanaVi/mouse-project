function Waste (myX, myY, myWidth, myHeight) {
    this.x = myX;
    this.y = myY;
    this.width = myWidth;
    this.height = myHeight;
    this.image = new Image();
    this.speed = 2 + (Math.random() * 4);
  }



Waste.prototype.drawMe = function () {
    
    this.y += this.speed;

    if (this.y < -this.height) {
        this.y = 550;
    }

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}


var waste1 = new Waste(0, 0, 40, 40);
waste1.image.src = "./images/waste.png";

var waste2 = new Waste(100, 0, 40, 40);
waste2.image.src = "./images/waste.png";

var waste3 = new Waste(250, 0, 40, 40);
waste3.image.src = "./images/waste.png";

var allWaste = [waste1, waste2, waste3];