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


let humanScore = 0;
let computerScore = 0;

const result = document.querySelector("#result");
const score = document.querySelector("#score");


function playRound(humanChoice, computerChoice) {
    if (humanChoice === computerChoice) { //if the choices are identical - it's a tie
        result.textContent = (`You both chose ${humanChoice} so it's a tie. For once in your life, please be different! :3`);
        score.textContent = (`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "paper") {
        result.textContent = ("Rock vs Paper! Paper covers rock so you lose. Go cry about it! :3");
        computerScore++;
        score.textContent = (`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "rock" && computerChoice === "scissors") {
        result.textContent = ("Rock vs Scissors! Rock breaks scissors so you win. You got lucky, don't go thinking you're good!");
        humanScore++;
        score.textContent = (`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "scissors") {
        result.textContent = ("Paper vs Scissors! Scissors cut paper so you lose. Go cry about it! :3");
        computerScore++;
        score.textContent = (`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "paper" && computerChoice === "rock") {
        result.textContent = ("Paper vs Rock! Paper covers rock so you win. You got lucky, don't go thinking you're good!");
        humanScore++;
        score.textContent = (`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "rock") {
        result.textContent = ("Scissors vs Rock! Rock breaks scissors so you lose. Go cry about it! :3");
        computerScore++;
        score.textContent = (`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
    else if (humanChoice === "scissors" && computerChoice === "paper") {
        result.textContent = ("Scissors vs Paper! Scissors cut paper so you win. You got lucky, don't go thinking you're good!");
        humanScore++;
        score.textContent = (`The score is:\nComputer - ${computerScore} \nYou - ${humanScore}`);
    }
}


function endGameMessage() {
    if (computerScore > humanScore) {
        result.textContent = ("You lose lol, RIP bozo :3")
    }
    else {
        result.textContent = ("You win but this is only a fortune game so there is nothing to be proud of.")
    }
}



const choices = document.querySelector("#choices");

choices.addEventListener("click", (MouseEvent) => {
    let target = MouseEvent.target;

    switch(target.id) {
        case "Rock" :
            playRound("rock", getComputerChoice());
            checkGameOver();
            break;
        case "Paper" :
            playRound("paper", getComputerChoice());
            checkGameOver();
            break;
        case "Scissors" :
            playRound("scissors", getComputerChoice());
            checkGameOver();
            break;        
    }
})

function checkGameOver() {
    if (humanScore === 5 || computerScore === 5) {
        endGameMessage();
        humanScore = 0;
        computerScore = 0;
    }      
}
