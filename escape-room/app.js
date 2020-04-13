const readline = require('readline-sync');

// const hole = readline.question(' Put hand in hole? yes or no ');
// const findKey = readline.question(' Find key? ');
// const openDoor = readline.question(' Open the Door? ');

let gameOver = false;
let options = ['Put hand in hole', 'Find key', 'Open door'];

while (!gameOver) {
  const userAnswer = readline.keyInSelect(
    options,
    'What would you like to do :'
  );

  if (userAnswer === 0) {
    console.log('You have just died');
    gameOver = true;
  } else if (userAnswer === 1) {
    console.log(
      'You found the key you are free to open the door. You are out!'
    );
    gameOver = true;
  } else if (userAnswer === 2) {
    console.log('You need to find the key first.');
  } else if (userAnswer === -1) {
    console.log('You can not cancel');
  }
}
