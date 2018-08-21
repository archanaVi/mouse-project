var myCanvas = document.querySelector(".mouse-canvas");
var ctx = myCanvas.getContext("2d");

// Create the character and her image
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


// Display the character and waste

function drawScene () {
    // to not repeat the same image at every moves
    ctx.clearRect(0, 0, myCanvas.width, myCanvas.height);

    perso.drawMe();
    
    allWaste.forEach(function (onePipe) {
      onePipe.drawMe();
    });



    // allWaste.forEach(function (onePipe) {
    //   onePipe.drawMe();

    //   if (collision(perso, onePipe)) {
    //     perso.isCrashed = true;
    //     onePipe.isCrashed = true;
    //   }
    // });

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


  // Create the collision

  function collision (rectA, rectB) {
    return rectA.y + rectA.height >= rectB.y
       &&  rectA.y <= rectB.y + rectB.height
       &&  rectA.x + rectA.width >= rectB.x
       &&  rectA.x <= rectB.x + rectB.width;
  }



  // var allWaste = ["image", "image", "image", "image"];
  // var imgWast = allWaste[Math.floor(Math.random()* allWaste.length)];

