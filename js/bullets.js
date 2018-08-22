function Bullet (myX, myY, myWidth, myHeight) {
    this.x = perso.x + 22;
    this.y = perso.y - 15;
    this.width = 5;
    this.height = 15;
    this.color = "#fff";
    this.isCrashed = false;
  };

Bullet.prototype.drawMe = function () {

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

}

var bulletsArr = [];