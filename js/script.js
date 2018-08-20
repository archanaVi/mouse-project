var myCanvas = document.querySelector(".mouse-canvas");
var ctx = myCanvas.getContext("2d");

// The character and her image 
var persoImg = new Image();
persoImg.src = "./images/ellipse.png";

var perso = {
    x: 180,
    y: 503,
    width: 45,
    height: 45,
    drawMe: function () {
      ctx.drawImage(persoImg, this.x, this.y, this.width, this.height);
    },
    controlBoundries: function () {
        if (this.x < 0) {
          this.x = 0;
        }
    
        if (this.y < 0) {
          this.y = 0;
        }
    
        if (this.x > 400 - this.width) {
          this.x = 400 - this.width;
        }
    
        if (this.y > 550 - this.height) {
          this.y = 550 - this.height;
        }
      }    
  };


function drawScene () {
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    perso.drawMe();

    requestAnimationFrame(function () {
        drawScene();
      });
}

drawScene();
  

// Move the character -----------------------------------

document.onkeydown = function (event) {
    if (perso.isCrashed) {
      // exit the function without moving if the character is crashed
      return;
    }
  
    switch (event.keyCode) {
      case 37: // left arrow
        perso.x -= 20;
        break;
  
      case 32: // space bar
      case 38: // up arrow
        // perso.y -= 10;
        break;
  
      case 39: // right arrow
        perso.x += 20;
        break;
  
      case 40: // down arrow
        // perso.y += 10;
        break;
    }
  
    perso.controlBoundries();
  };

