function getComputerChoice() {
    let randomNumber = Math.floor(Math.random() * 100);
    if (randomNumber <= 33) {
        return "rock";
    }
    else if (randomNumber > 33 && randomNumber <= 66) {
        return "paper";
    }
    else return "scissors";
    
}

function getHumanChoice() {
    const options = ['rock', 'paper', 'scissors'];
    let input = prompt("Choose your weapon lol").toLowerCase();

    while (!options.includes(input)) {
        input = prompt(`Really? You wanna use a/an ${input} as your weapon? Get some help! Choose between rock, paper and scissors! `).toLowerCase();
    }
        return input;
}


function playGame() {
    let humanScore = 0;
    let computerScore = 0;


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { //if the choices are identical - it's a tie
        console.log(`You both chose ${humanChoice} so it's a tie. For once in your life, please be different! :3`);
        console.log(`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        console.log("Rock vs Paper! Paper covers rock so you lose. Go cry about it! :3");
        computerScore++;
        console.log(`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        console.log("Rock vs Scissors! Rock breaks scissors so you win. You got lucky, don't go thinking you're good!");
        humanScore++;
        console.log(`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        console.log("Paper vs Scissors! Scissors cut paper so you lose. Go cry about it! :3");
        computerScore++;
        console.log(`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        console.log("Paper vs Rock! Paper covers rock so you win. You got lucky, don't go thinking you're good!");
        humanScore++;
        console.log(`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        console.log("Scissors vs Rock! Rock breaks scissors so you lose. Go cry about it! :3");
        computerScore++;
        console.log(`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        console.log("Scissors vs Paper! Scissors cut paper so you win. You got lucky, don't go thinking you're good!");
        humanScore++;
        console.log(`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }      
}

for (let round = 0; round < 5; round++) {
    let humanSelection = getHumanChoice();
    let computerSelection = getComputerChoice();
    playRound(humanSelection, computerSelection);
}

function endGameMessage() {
    if (computerScore > humanScore) {
        console.log("You lose lol, RIP bozo :3")
    }
    else if (computerScore === humanScore) {
        console.log("It's a tie lmao")
    }
    else console.log("You win but this is only a fortune game so there is nothing to be proud of.")
}
if (round = 5) endGameMessage();

}

playGame();