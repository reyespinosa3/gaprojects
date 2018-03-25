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

// reset cars positions and countdown starting point
const resetRace = () => {
  redLeft = 0;
  purpleLeft = 0;
  countDown = 4;
  redcar.style.left = redLeft + "px";
  purplecar.style.left = purpleLeft + "px";
  document.getElementById('timer').innerHTML = "3";
}

// start the race button, countdown 3, 2, 1, GO
const letsRace = () => {
  console.log("Start the countdown");
  for (let i=3; i>=0; i--) {
    countDown -= 1;
    console.log(countDown);
    document.getElementById('timer').innerHTML = "Go!";
  }
}

// check winner of race, first player to reach end of
// track (track div box), add point to winner total
// and update point total on HTML page
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

// listen for d and right arrow keyup, move car and
// check for winner
const move = (event) => {
  if (event.keyCode == 39) {
    console.log("red car moved");
    redLeft += 40;
    redcar.style.left = redLeft + "px";
    checkWinner();
  }
  if (event.keyCode == 68) {
    console.log("purple car moved");
    purpleLeft += 40;
    purplecar.style.left = purpleLeft + "px";
    checkWinner();
  }
}

// call listen for keyup when page loads
document.onkeyup = move;
