const options = document.querySelector(".options");
let playerChoice = document.querySelector("#p-emoji");
let computerChoice = document.querySelector("#c-emoji");
let text = document.querySelector("h3");
let Rwinner = document.querySelector("h2");
let playerScore = document.querySelector("#p-score");
let computerScore = document.querySelector("#c-score");
let playerScoreNum = 0;
let computerScoreNum = 0;

// Modal elements
const gameModal = document.querySelector("#gameModal");
const modalTitle = document.querySelector("#modalTitle");
const modalPlayerScore = document.querySelector("#modalPlayerScore");
const modalComputerScore = document.querySelector("#modalComputerScore");
const playAgainBtn = document.querySelector("#playAgainBtn");
const quitBtn = document.querySelector("#quitBtn");

function getComputerChoice() {
    let choiceSelector = Math.floor(Math.random() * 3);
    if (choiceSelector === 0) {
        computerChoice.textContent = "✊";
    }
    else if (choiceSelector === 1) {
        computerChoice.textContent = "✋";
    }
    else {
        computerChoice.textContent = "✌️";
    }
}

function playRound(playerChoice, computerChoice) {
    let pContent = playerChoice.textContent;
    let cContent = computerChoice.textContent;
    const matchKey = `${pContent}-${cContent}`;
    switch (matchKey) {
        case "✊-✌️":
            text.textContent = `${pContent} beats ${cContent}`;
            Rwinner.textContent = "You win";
            playerScoreNum++;
            playerScore.textContent = playerScoreNum;
            break;
        case "✊-✋":
            text.textContent = `${cContent} beats ${pContent}`;
            Rwinner.textContent = "You lose";
            computerScoreNum++;
            computerScore.textContent = computerScoreNum;
            break;
        case "✊-✊":
        case "✋-✋":
        case "✌️-✌️":
            Rwinner.textContent = "It is a tie";
            text.textContent = `${pContent} ties with ${cContent}`;
            break;
        case "✋-✊":
            text.textContent = `${pContent} beats ${cContent}`;
            Rwinner.textContent = "You win";
            playerScoreNum++;
            playerScore.textContent = playerScoreNum;
            break;
        case "✋-✌️":
            text.textContent = `${cContent} beats ${pContent}`;
            Rwinner.textContent = "You lose";
            computerScoreNum++;
            computerScore.textContent = computerScoreNum;
            break;
        case "✌️-✊":
            text.textContent = `${cContent} beats ${pContent}`;
            Rwinner.textContent = "You lose";
            computerScoreNum++;
            computerScore.textContent = computerScoreNum;
            break;
        case "✌️-✋":
            text.textContent = `${pContent} beats ${cContent}`;
            Rwinner.textContent = "You win";
            playerScoreNum++;
            playerScore.textContent = playerScoreNum;
            break;
    }

    // Check if game is over
    if (playerScoreNum === 5 || computerScoreNum === 5) {
        showModal();
    }
}

function showModal() {
    modalPlayerScore.textContent = playerScoreNum;
    modalComputerScore.textContent = computerScoreNum;

    if (playerScoreNum === 5) {
        modalTitle.textContent = "🎉 You Won!";
    } else {
        modalTitle.textContent = "💀 You Lost!";
    }

    gameModal.classList.add("show");
}

function resetGame() {
    playerScoreNum = 0;
    computerScoreNum = 0;
    playerScore.textContent = "0";
    computerScore.textContent = "0";
    playerChoice.textContent = "❔";
    computerChoice.textContent = "❔";
    Rwinner.textContent = "Choose Your Weapon";
    text.textContent = "First to score 5 points wins the game";
    gameModal.classList.remove("show");
}

options.addEventListener("click", (e) => {
    let target = e.target;
    switch (target.id) {
        case "rock":
            playerChoice.textContent = "✊";
            break;
        case "paper":
            playerChoice.textContent = "✋";
            break;
        case "scissors":
            playerChoice.textContent = "✌️";
            break;
    }
    getComputerChoice();
    playRound(playerChoice, computerChoice);
});

playAgainBtn.addEventListener("click", resetGame);
quitBtn.addEventListener("click", () => {
    alert("Thanks for playing!");
});