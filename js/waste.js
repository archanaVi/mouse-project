function Waste (myX, myY, myWidth, myHeight, boolean) {
    this.x = myX;
    this.y = myY;
    this.width = myWidth;
    this.height = myHeight;
    this.image = new Image();
    this.speed = 2 + (Math.random() * 4);
    this.opacity = 0;
    this.isCrashed = false;
    this.isWaste = true;
  }


Waste.prototype.drawMe = function () {
    if (!perso.isCrashed && this.isWaste) {

        this.y += this.speed;

        if (this.y > myCanvas.height) {
            this.y = -40;
            this.x = Math.random() * 360;
        }
    }

    if (!this.isWaste) {

        this.y += this.speed;

        if (this.y > myCanvas.height) {
            this.y = -500;
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


var waste1 = new Waste(0, 0, 71, 38, true);
waste1.image.src = "./images/banana.svg";

var waste2 = new Waste(200, 0, 51, 51, true);
waste2.image.src = "./images/fish-bones.svg";

var waste3 = new Waste(200, 0, 56, 56, true);
waste3.image.src = "./images/coffee.svg";

var waste4 = new Waste(200, 0, 54, 47, true);
waste4.image.src = "./images/can.svg";

var waste5 = new Waste(350, 0, 64, 58, false);
waste5.image.src = "./images/dollar.svg";

var allWaste = [waste1, waste2, waste3, waste4, waste5];



