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
    let playerChoice = prompt("Please enter your choice, Rock, paper, or Scissors:").toLowerCase().trim();
    if (playerChoice != "rock" && playerChoice != "paper" && playerChoice != "scissors"){
        alert("Please enter a valid input");
        return getPlayerChoice();
    }
    return playerChoice;
}

function playRound (computerChoice, playerChoice) {
    let winner;
    if (computerChoice === playerChoice) {
        alert("It’s a tie! 🤝");
    }
    else if ((playerChoice === "rock" && computerChoice === "scissors") || (playerChoice === "scissors" && computerChoice === "paper") || (playerChoice === "paper" && computerChoice === "rock")) {
        alert("You win!!! 🎉🏆");
        winner = "player";
        return winner;
    }
    else {
        alert("You lose 😭💀");
        winner = "computer"
        return winner;
    }
}

function playGame() {
    let playerScore = 0;
    let computerScore = 0;
    let round = 1;
    alert("Welcome to the Rock, Paper Scissors Computer Game!!!")
    while (round < 6) {
        alert(`Round ${round} !!!`)
        let computerChoice = getComputerChoice();
        let playerChoice = getPlayerChoice();
        let roundWinner = playRound(computerChoice, playerChoice);
        if (roundWinner === "player") {
            playerScore += 1;
        }
        else {
            computerScore += 1;
        }
        round += 1;
    }
    let finalWinner;
    if (playerScore > computerScore) {
        finalWinner = "Player Wins 🎉🏆"
    }
    else if (playerScore === computerScore) {
        finalWinner = "It’s a tie! 🤝"
    }
    else {
        finalWinner = "Computer wins "
    }
    alert(`The Final Score is \nPlayer Score: ${playerScore} \nComputer Score: ${computerScore}\n${finalWinner}`)
}

playGame();

function replay () {
    let response = prompt("Do you want to replay??, yes or no!");
    if (response.toLowerCase().trim() === "yes"){
        playGame();
    }
    else if (response.toLowerCase().trim() === "no"){
        alert("Thank You")
        end; 
    }
    else {
        alert("Please enter a valid input!!!");
        replay()
    }
}

replay();