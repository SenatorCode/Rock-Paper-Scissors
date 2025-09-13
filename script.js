function getComputerChoice () {
    let choiceSelector = Math.floor(Math.random()*9);
    let computerChoice;

    if (choiceSelector <= 2) {
        computerChoice = "rock";
        return computerChoice;
    } 
    else if (choiceSelector <= 5) {
        computerChoice = "scissors";
        return computerChoice;
    }
    else {
        computerChoice = "paper";
        return computerChoice;
    }
}

console.log(getComputerChoice());

function getPlayerChoice () {
    let playerChoice = prompt("Please enter your choice, Rock, paper, or Scissors:").toLowerCase().trim()
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("Please enter a valid input");
        getPlayerChoice()
    }
    else {
        return playerChoice;
    }
}

console.log(getPlayerChoice())