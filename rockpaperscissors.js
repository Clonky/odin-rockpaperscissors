function getComputerChoice() {
    let random = Math.floor(Math.random() * 3)
    let result;
    if (random === 0) {
        result = "rock"
    }
    else if (random === 1) {
        result = "paper"
    }
    else if (random === 2) {
        result = "scissors"
    }
    return result
}

function isWin(player, computer, win, loss, draw) {
    if (player === "rock" && computer === "scissors") {
        return win();
    }
    else if (player === "paper" && computer === "rock") {
        return win();
    }
    else if (player === "scissors" && computer === "paper") {
       return win();
    }
    else if (player === computer) {
        return draw()
    }
    else {
        return loss()
    }
}

function game() {
    wins = 0
    losses = 0
    let win = () => {
        console.log("You won!")
        wins += 1;
    }
    let loss = () => {
        console.log("You lost!")
        losses += 1
    }
    let draw = () => {
        console.log("You got a draw!")
    }

    for (let i = 0; i <= 4; i++) {
        let compChoice = getComputerChoice()
        let playerChoice = prompt("Please choose between rock, paper or scissors.").toLowerCase()
        console.log("You chose: " + playerChoice + "\n Computer chose: " + compChoice)
        isWin(playerChoice, compChoice, win, loss, draw)
    }
    console.log("You scored " + wins + " wins.");
    if (wins > losses) {
        console.log("You won the whole game!")
    }
}

while (true) {
    game()
    let isContinue = prompt("Do you want to play again? (y, n)").toLowerCase();
    if (isContinue === "y" || isContinue === "yes") {}
    else {
        break
    }
}