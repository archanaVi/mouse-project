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
    // to not repeat the same image at every moves
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    perso.drawMe();

    drawWaste();

    fall();

    requestAnimationFrame(function () {
        drawScene();
      });
}

drawScene();
  
// The falling waste

var x = 0;
var y = 0;
var nbOfWaste = 3;
var fallingWaste = [];

function fall() {
    for (var i = 0; i < nbOfWaste; i++) {
        ctx.drawImage (fallingWaste[i].image, fallingWaste[i].x, fallingWaste[i].y);

        fallingWaste[i].y += fallingWaste[i].speed; // set the falling speed

        if (fallingWaste[i].y > 550) { //Repeat the raindrop when it falls out of view
            fallingWaste[i].y = -25 //Account for the image size
            fallingWaste[i].x = Math.random() * 400; //Make it appear randomly along the width
        }
    }
}

function drawWaste() {

    // setInterval(fall, 36);

    for (var i = 0; i < nbOfWaste; i++) {
        var oneWaste = new Object();
        oneWaste["image"] = new Image();
        oneWaste.image.src = "./images/waste.png";

        oneWaste["x"] = Math.random() * 400;
        oneWaste["y"] = Math.random() * 50;
        oneWaste["speed"] = Math.random() * 5;

        fallingWaste.push(oneWaste);
    }
}

// drawWaste();


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
        // shoot

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
