let humanScore = 0;
let computerScore = 0;
let currentRoundNumber = 1;

// Write your code below:
const generateTarget = () => {
  return Math.floor(Math.random() * 10);
};

const compareGuesses = (userGuess, computerGuess, target) => {
  if (userGuess < 0 || userGuess >= 10) {
    alert("Please try again, the number is not valid");
    return;
  }

  if (
    getAbsoluteDistance(userGuess, target) <=
    getAbsoluteDistance(computerGuess, target)
  ) {
    return true;
  } else {
    return false;
  }
};

const getAbsoluteDistance = (guess, target) => {
  return Math.abs(guess - target);
};

const updateScore = (winner) => {
  if (winner === "human") {
    humanScore++;
  } else if (winner === "computer") {
    computerScore++;
  } else {
    console.log("This value is not permitted, please try again");
  }
};

const advanceRound = () => {
  currentRoundNumber++;
};
