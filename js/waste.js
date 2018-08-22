function Waste (myX, myY, myWidth, myHeight) {
    this.x = myX;
    this.y = myY;
    this.width = myWidth;
    this.height = myHeight;
    this.image = new Image();
    this.speed = 2 + (Math.random() * 4);
    this.opacity = 0;
    this.isCrashed = false;
  }


Waste.prototype.drawMe = function () {
    if (!perso.isCrashed) {

        this.y += this.speed;

        if (this.y > myCanvas.height) {
            this.y = -40;
            this.x = Math.random() * 360;
        }
    }

    if (this.isCrashed) {
        ctx.globalAlpha = this.opacity;
      }

    ctx.drawImage(this.image, this.x, this.y, this.width, this.height);
}


// var imagesArray = [ "./images/waste-1.png", "./images/waste-2.png", "./images/waste-3.png" ];
// var randomImage = imagesArray[ Math.floor( Math.random * imagesArray.length - 1 )];


var waste1 = new Waste(0, 0, 40, 40);
waste1.image.src = "./images/waste-1.png";

var waste2 = new Waste(200, 0, 40, 40);
waste2.image.src = "./images/waste-2.png";

var waste3 = new Waste(350, 0, 40, 40);
waste3.image.src = "./images/waste-3.png";

var allWaste = [waste1, waste2, waste3];



