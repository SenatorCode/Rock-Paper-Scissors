function getComputerChoice () {
    let computerChoice;
    let randomNumber = Math.floor(Math.random() * 9)
    if(randomNumber <= 2) {
        computerChoice = "Rock"
        return computerChoice;
    } else if (randomNumber <=5 ) {
        computerChoice = "Paper"
        return computerChoice;
    } else{
        computerChoice = "scissors"
        return computerChoice;
    };
};

// getComputerChoice();
// console.log(getComputerChoice());

function getHumanChoice () {
    let humanChoice = prompt("Please enter your choice: rock, paper or scissors")
    return humanChoice;
};

// getHumanChoice()
// console.log(getHumanChoice())

function playGame (){
    // let humanScore = 0;
    // let computerScore = 0;
    // function playRound (computerChoice, humanChoice) {
    //     if (computerChoice === "rock" && humanChoice === "paper") {
    //         alert("Paper beats rock, therefore you win this round Hurayyyy!!!");
    //         humanScore++;
    //     } else if (computerChoice === "paper" && humanChoice === "rock") {
    //         alert("Paper beats rock, therefore you lose this round");
    //         computerScore++;
    //     } else if (computerChoice === "paper" && humanChoice === "scissors") {
    //         alert("Scissors cut through paper, therefore you win this round Hurayyyy!!!");
    //         humanChoice++;
    //     } else if (computerChoice === "scissors" && humanChoice === "paper") {
    //         alert("Scissors cut through paper, therefore you lose this round");
    //         computerChoice++;
    //     } else if (computerChoice === "rock" && humanChoice === "scissors") {
    //         alert("Scissors is harmless against rock, therefore you lose this round")
    //         computerChoice++;
    //     } else if (computerChoice === "scissors" && humanChoice === "rock") {
    //         alert("Scissors is harmless against rock, therefore you win this round, Hurayyyy!!!");
    //         humanChoice++;
    //     } else if (computerChoice === humanChoice){
    //         alert("No one win this round, which means it is a tie");
    //     } else {
    //         alert("Wrong entry")
    //         getHumanChoice();
    //     };
    // }
    // const humanSelection = getHumanChoice();
    // const computerSelection = getComputerChoice();
    // playRound (humanSelection, computerSelection);

    let humanScore = 0;
    let computerScore= 0;

    function playRound (computerChoice, humanChoice) {
        let playerScore;
        let compScore;
        if (computerChoice === "rock" && humanChoice === "paper") {
            alert("Paper beats rock, therefore you win this round Hurayyyy!!!");
            return ++playerScore;
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            alert("Paper beats rock, therefore you lose this round");
            return ++compScore;
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            alert("Scissors cut through paper, therefore you win this round Hurayyyy!!!");
            return ++playerScore;
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            alert("Scissors cut through paper, therefore you lose this round");
            return ++compScore;
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            alert("Scissors is harmless against rock, therefore you lose this round")
            return ++compScore;
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            alert("Scissors is harmless against rock, therefore you win this round, Hurayyyy!!!");
            return ++playerScore;
        } else if (computerChoice === humanChoice){
            alert("No one win this round, which means it is a tie");
        } else {
            alert("Wrong entry")
            getHumanChoice();
        };
    }
    const humanSelection = getHumanChoice().toLowerCase();
    const computerSelection = getComputerChoice().toLowerCase();
    playRound(humanSelection, computerSelection);
}

playGame();