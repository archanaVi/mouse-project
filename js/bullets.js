function Bullet (myX, myY, myWidth, myHeight) {
    this.x = perso.x;
    this.y = perso.y;
    this.width = 5;
    this.height = 15;
    this.color = "#fff";
    this.isCrashed = false;
  };

Bullet.prototype.drawMe = function () {
    if (!perso.isCrashed) {

        ctx.fillStyle = this.color;
        ctx.fillRect(this.x, this.y, this.width, this.height);

    }
}
