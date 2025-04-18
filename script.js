// this is the code that generate the computer choice, the probability of all the options are equal, it is absolutely random
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

// this code gets the human choice 
function getHumanChoice () {
    let humanChoice = prompt("Please enter your choice: rock, paper or scissors")
    return humanChoice;
};

// getHumanChoice()
// console.log(getHumanChoice())

// this is the game logic, it compares the choice of the player and the computer
function playGame (){
    let humanScore = 0;
    let computerScore= 0;
    let prevRound;
    let nextRound;

    function playRound (computerChoice, humanChoice) {
        let playerScore = 0;
        let compScore = 0;
        if (computerChoice === "rock" && humanChoice === "paper") {
            alert("Paper beats rock, therefore you win this round Hurayyyy!!!");
            ++playerScore;
            return {
                humanScore: playerScore,
                computerScore: compScore
            };
        } else if (computerChoice === "paper" && humanChoice === "rock") {
            alert("Paper beats rock, therefore you lose this round");
            ++compScore;
            return {
                humanScore: playerScore,
                computerScore: compScore
            };
        } else if (computerChoice === "paper" && humanChoice === "scissors") {
            alert("Scissors cut through paper, therefore you win this round Hurayyyy!!!");
            ++playerScore;
            return {
                humanScore: playerScore,
                computerScore: compScore
            };
        } else if (computerChoice === "scissors" && humanChoice === "paper") {
            alert("Scissors cut through paper, therefore you lose this round");
            ++compScore;
            return {
                humanScore: playerScore,
                computerScore: compScore
            };
        } else if (computerChoice === "rock" && humanChoice === "scissors") {
            alert("Scissors is harmless against rock, therefore you lose this round")
            ++compScore;
            return {
                humanScore: playerScore,
                computerScore: compScore
            };
        } else if (computerChoice === "scissors" && humanChoice === "rock") {
            alert("Scissors is harmless against rock, therefore you win this round, Hurayyyy!!!");
            ++playerScore;
            return {
                humanScore: playerScore,
                computerScore: compScore
            };
        } else if (computerChoice === humanChoice){
            // this condition is for when they both choose the same answer, i have to consider the current round being played, and also the next round, also, will the round be replayed or we'll move to another round, so i decided to make it go to the next round when there's a tie.
            alert("No one win this round, which means it is a tie");
            // getComputerChoice();
            // getHumanChoice();
            if (prevRound === 0 && nextRound === 2) {
                return roundTwo();
            } else if (prevRound === 1 && nextRound === 3) {
                return roundThree();
            } else if (prevRound ===2 && nextRound === 4) {
                return roundFour();
            } else if (prevRound ===3 && nextRound === 5) {
                return roundFive();
            }
            return {
                humanScore: 0,
                computerScore: 0
            };
            // playRound();
        } else {
            alert("Wrong entry, please input your choice again");
            // getComputerChoice();
            // getHumanChoice();
            if (prevRound === 0 && nextRound === 2) {
                return roundOne();
            } else if (prevRound === 1 && nextRound === 3) {
                return roundTwo();
            } else if (prevRound ===2 && nextRound === 4) {
                return roundThree();
            } else if (prevRound ===3 && nextRound === 5) {
                return roundFour();
            } else if (prevRound === 4 && nextRound === 0) {
                return roundFive();
            }
            return {
                humanScore: 0,
                computerScore: 0
            };
        };
    };

    // playRound(humanSelection, computerSelection);

    // this is the one that is in charge of the numbers of rounds played
    function roundOne () {
        // getComputerChoice();
        const computerSelection = getComputerChoice().toLowerCase();
        alert("Round One");
        // getHumanChoice();
        const humanSelection = getHumanChoice().toLowerCase();
        prevRound = 0;
        nextRound = 2;
        return playRound(computerSelection, humanSelection);
    };

    const resultOne = roundOne();
    humanScore = resultOne.humanScore;
    computerScore = resultOne.computerScore;

    function roundTwo () {
        // getComputerChoice();
        const computerSelection = getComputerChoice().toLowerCase();
        alert("Round Two");
        // getHumanChoice();
        const humanSelection = getHumanChoice().toLowerCase();
        prevRound = 1;
        nextRound = 3;
        return playRound(computerSelection, humanSelection);
    };

    const resultTwo = roundTwo();
    humanScore += resultTwo.humanScore;
    computerScore += resultTwo.computerScore;

    function roundThree () {
        // getComputerChoice();
        const computerSelection = getComputerChoice().toLowerCase();
        alert("Round Three");
        // getHumanChoice();
        const humanSelection = getHumanChoice().toLowerCase();
        prevRound = 2;
        nextRound = 4;
        return playRound(computerSelection, humanSelection);
    };

    const resultThree = roundThree();
    humanScore += resultThree.humanScore;
    computerScore += resultThree.computerScore;

    function roundFour () {
        // getComputerChoice();
        const computerSelection = getComputerChoice().toLowerCase();
        alert("Round Four");
        // getHumanChoice();
        const humanSelection = getHumanChoice().toLowerCase();
        prevRound = 3;
        nextRound = 5;
        return playRound(computerSelection, humanSelection);
    };

    const resultFour = roundFour();
    humanScore += resultFour.humanScore;
    computerScore += resultFour.computerScore;

    function roundFive () {
        // getComputerChoice();
        const computerSelection = getComputerChoice().toLowerCase();
        alert ("Round Five");
        // getHumanChoice();
        const humanSelection = getHumanChoice().toLowerCase();
        prevRound = 4;
        nextRound = 0;
        return playRound(computerSelection, humanSelection);
    };

    const resultFive = roundFive();
    humanScore += resultFive.humanScore;
    computerScore += resultFive.computerScore;

    function gameOver () {
        let finalHumanScore = humanScore;
        let finalCompScore = computerScore;
        alert(`The game is over, The result is;
            Player: ${finalHumanScore}
            Computer: ${finalCompScore}`)
        let playAgain = confirm("Do you want to play another set of rounds");
        if (playAgain){
            playGame();
        } else {
            alert("Thank you for playing  the game, if you want to continue later, please refresh the page");
        };
    };

    // roundOne();
    // roundTwo();
    // roundThree();
    // roundFour();
    // roundFive();
    gameOver();
};

playGame();