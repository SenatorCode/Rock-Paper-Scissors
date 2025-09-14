function getComputerChoice () {
    let choiceSelector = Math.floor(Math.random()*3);
    let computerChoice;

    if (choiceSelector === 0) {
        computerChoice = "rock";
        return computerChoice;
    } 
    else if (choiceSelector === 1) {
        computerChoice = "scissors";
        return computerChoice;
    }
    else {
        computerChoice = "paper";
        return computerChoice;
    }
}

function getPlayerChoice () {
    let playerChoice = prompt("Please enter your choice, Rock, paper, or Scissors:").toLowerCase().trim()
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("Please enter a valid input");
        return getPlayerChoice()
    }
    return playerChoice;
}
let computerChoice = "rock";
let playerChoice = getPlayerChoice();
console.log(computerChoice);
function playRound (computerChoice, playerChoice) {
    if (computerChoice === playerChoice) {
        alert("It’s a tie! 🤝, you'll replay this round")
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")) {
        alert("You win!!! 🎉🏆")
    }
    else {
        alert("You lose 😭💀")
    }
}

playRound(computerChoice, playerChoice);