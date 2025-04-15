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

console.log (getComputerChoice());