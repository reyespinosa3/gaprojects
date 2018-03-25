console.log("Ready to Play");

// move player 1 using d key
// listen for d keyup action

// move player 2 using right arrow key
// alert winner when player reaches end of div

let redcar = document.getElementById('redcar');
let purpleCar = document.getElementById('purplecar')

let redLeft = 0;
let purpleLeft = 0;
let redWin = 0;
let purpleWin = 0;

const anim = (event) => {
  if (event.keyCode == 39) {
    console.log("red car moved");
    redLeft += 40;
    redcar.style.left = redLeft + "px";
    if (redLeft >= 720) {
      alert("Red Win!");
    }
  }
  if (event.keyCode == 68) {
    purpleLeft += 40;
    purplecar.style.left = purpleLeft + "px";
    if (purpleLeft >= 720) {
      alert("Purple Wins!");
    }
  }
}

document.onkeyup = anim;
