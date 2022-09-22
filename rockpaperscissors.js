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

function cleanResultBanner() {
    const result = document.querySelectorAll("#result")
    result.forEach(item => {
        item.remove();
    })
}

function isWin(player, computer, wins, losses) {
    if (player === "rock" && computer === "scissors") {
        cleanResultBanner();
        const winBanner = document.createElement("div");
        winBanner.id = "result";
        winBanner.textContent = "You won this round.";
        document.body.appendChild(winBanner);
        wins += 1;
    }
    else if (player === "paper" && computer === "rock") {
        cleanResultBanner();
        const winBanner = document.createElement("div");
        winBanner.id = "result";
        winBanner.textContent = "You won this round.";
        document.body.appendChild(winBanner);
        wins += 1;
    }
    else if (player === "scissors" && computer === "paper") {
        cleanResultBanner();
        const winBanner = document.createElement("div");
        winBanner.id = "result";
        winBanner.textContent = "You won this round.";
        document.body.appendChild(winBanner);
        wins += 1;
    }
    else if (player === computer) {
        cleanResultBanner();
        const drawBanner = document.createElement("div");
        drawBanner.id = "result";
        drawBanner.textContent = "This round was a draw.";
        document.body.appendChild(drawBanner);
    }
    else {
        cleanResultBanner();
        const lossBanner = document.createElement("div");
        lossBanner.id = "result";
        lossBanner.textContent= "You lost this round.";
        document.body.appendChild(lossBanner);
        losses += 1;
    }
    return [wins, losses]
}




const buttons = document.querySelectorAll("img");
buttons.forEach(button => {
    button.addEventListener("mouseover", function (e) {
        e.target.classList.add("mouseover");
    })
    button.addEventListener("mouseleave", function (e) {
        e.target.classList.remove("mouseover");
    })
})

function updateScoreboard(wins, losses) {
    const oldScore = document.querySelector("#scoreboard");
    if (oldScore) oldScore.remove();
    const score = document.createElement("div");
    score.id = "scoreboard"
    score.textContent = `Wins: ${wins} --- Losses: ${losses}`;
    document.body.appendChild(score);
}

function game(buttons) {
    let counter = 0;
    let wins = 0;
    let losses = 0;
    buttons.forEach(button => {
        button.addEventListener("click", function (e) {
            if (counter >= 4) return;
            counter +=1;
            let result = isWin(e.target.id, getComputerChoice(), wins, losses);
            wins = result[0];
            losses = result[1];
            updateScoreboard(wins, losses);
        })
    })
}

game(buttons)