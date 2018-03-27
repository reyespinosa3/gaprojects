// Short javascript code to have man battle
// monster. Uses objects to create man and
// monster. Uses randome number generator to
// determine who attacks.
// Console logs who attacks and who wins

const adventurer = {
  name: "Silver Knight",
  hitpoints: "1000",
  weapon: "sword",
  weapon2: "dagger"
};
const ogre = {
  name: "Shrek",
  hitpoints: "1000",
  weapon: "club",
  weapon2: "rock"
}

console.log("Start the Battle");
const startBattle = () => {
  let turn = Math.random();
  if (turn >= .5) {
    console.log(adventurer.name + " attacks!");
    ogre.hitpoints -= 100;
    checkWinner();
  } else {
    console.log(ogre.name + " attacks!");
    adventurer.hitpoints -= 100;
    checkWinner();
  }
}

const checkWinner = () => {
  if (adventurer.hitpoints <= 0) {
    console.log(ogre.name + " Wins Battle!");
  } else if (ogre.hitpoints <=0) {
    console.log(adventurer.name + " Wins Battle!");
  } else
  startBattle();
}
startBattle();
