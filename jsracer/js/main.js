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
let p1Total = 0;
let p2Total = 0;
let countDown = 4;

const resetRace = () => {
  redLeft = 0;
  purpleLeft = 0;
  countDown = 4;
  redcar.style.left = redLeft + "px";
  purplecar.style.left = purpleLeft + "px";
  document.getElementById('timer').innerHTML = "3";
}

const letsRace = () => {
  console.log("Start the countdown");
  for (let i=3; i>=0; i--) {
    countDown -= 1;
    console.log(countDown);
    document.getElementById('timer').innerHTML = "Go!";
  }
}

const checkWinner = () => {
  if (redLeft >=750) {
    alert("Player 1 Wins");
    p1Total += 1;
    document.getElementById('p1score').innerHTML = p1Total;
  } else {
    if (purpleLeft >= 750) {
      alert("Player 2 Wins");
      p2Total += 1;
      document.getElementById('p2score').innerHTML = p2Total;
    }
  }
}

const anim = (event) => {
  if (event.keyCode == 39) {
    console.log("red car moved");
    redLeft += 40;
    redcar.style.left = redLeft + "px";
    checkWinner();
  }
  if (event.keyCode == 68) {
    purpleLeft += 40;
    purplecar.style.left = purpleLeft + "px";
    checkWinner();
  }
}

document.onkeyup = anim;
