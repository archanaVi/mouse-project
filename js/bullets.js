function Bullet (myX, myY, myWidth, myHeight) {
    this.x = perso.x;
    this.y = perso.y;
    this.width = 5;
    this.height = 15;
    this.color = "#fff";
    this.isCrashed = false;
  };


  drawMe = function () {
    ctx.fillStyle = this.color;
    ctx.fillRect(this.x, this.y, this.width, this.height);
  },
  controlBoundries = function () {
      return this.x >= 0 && this.x <= 400 && this.y >= 0 && this.y <= 550;
  }
  update = function () {
      this.x += this.xVelocity;
      this.y += this.yVelocity;

      this.isActive = this.isActive && this.controlBoundries();
  }


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