
const rockButton = document.getElementById("rock");
const paperButton = document.getElementById("paper");
const scissorsButton = document.getElementById("scissors");
const resultDiv = document.getElementById("result");

// Handle rock button click
rockButton.addEventListener("click", () => {
    const userChoice = getUserChoice("rock");
});
 // Handle paper button click
paperButton.addEventListener("click", () => {
    const userChoice = getUserChoice("paper");

});

// Handle scissors button click
scissorsButton.addEventListener("click", () => {
    const userChoice = getUserChoice("scissors");
    
});

const playRound = (userChoice) => {
    const computerChoice = getComputerChoice();
    const result = determineWinner(userChoice, computerChoice);
    resultDiv.textContent = result;
};

playRound(userChoice);

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;;
  }
};
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      break;
    case 1:
      return "paper";
      break;
    case 2:
      return "scissors";
      break;
  }
};

const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "The game is a tie!";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "You lost, sadt huhu";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "You lost, sadt huhu";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "You lost, sadt huhu";
  } else {
    return "You won! Congratulations!";
  }
};

const playGame = () => {
  const userChoice = getUserChoice();
  const computerChoice = getComputerChoice();

};
playGame();
