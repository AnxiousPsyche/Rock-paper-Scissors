const rockButton = document.getElementById("rockBtn");
const paperButton = document.getElementById("paperBtn");
const scissorsButton = document.getElementById("scissorsBtn");
const resultDiv = document.getElementById("result");
const incomingMove = document.getElementById("incomingMove");


let playerScore = 0;
let computerScore = 0;

const playerScoreElem = document.getElementById("playerScore");
const computerScoreElem = document.getElementById("computerScore");

const sendAttack = () => {
  const computerChoice = getComputerChoice();
  incomingMove.textContent = computerChoice;
};


// Handle rock button click
rockButton.addEventListener("click", () => {
  const userChoice = getUserChoice("rock");

  playRound(userChoice);
});
// Handle paper button click
paperButton.addEventListener("click", () => {
  const userChoice = getUserChoice("paper");
  playRound(userChoice);
});

// Handle scissors button click
scissorsButton.addEventListener("click", () => {
  const userChoice = getUserChoice("scissors");
  playRound(userChoice);
});

const getUserChoice = (userInput) => {
  userInput = userInput.toLowerCase();

  if (
    userInput === "rock" ||
    userInput === "paper" ||
    userInput === "scissors"
  ) {
    return userInput;
  }
};


/*this gets the computer's choice of move based on
random numbers and their corresponding switch case. */  
const getComputerChoice = () => {
  const randomNumber = Math.floor(Math.random() * 3);
  switch (randomNumber) {
    case 0:
      return "rock";
      
    case 1:
      return "paper";
      
    case 2:
      return "scissors";
      
  }
};


const determineWinner = (userChoice, computerChoice) => {
  if (userChoice === computerChoice) {
    return "Tie";
  } else if (userChoice === "rock" && computerChoice === "paper") {
    return "Lose";
  } else if (userChoice === "paper" && computerChoice === "scissors") {
    return "Lose";
  } else if (userChoice === "scissors" && computerChoice === "rock") {
    return "Lose";
  } else {
    return "Win";
  }
};

//This provides the whole round of what the user and computer chose. 
const playRound = (userChoice) => {

  const computerChoice = getComputerChoice();

  const result = determineWinner(userChoice, computerChoice);
  
  if (result === "Win") {
    resultDiv.textContent = "Wow! You won!";
  }
  else if (result === "Lose") {
    resultDiv.textContent = "Aww, you lost!";
  }
  else {
    resultDiv.textContent = "Safe!, it's a tie!";
  }

  if (result === "Win"){
    playerScore++;
    playerScoreElem.textContent = playerScore;
  }
  else if (result === "Lose") {
    computerScore++;
    computerScoreElem.textContent = computerScore;
}
};
sendAttack();