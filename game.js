let userScore = 0;
let computerScore = 0;
let gameOver = false;

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const result_p = document.querySelector(".result > p");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");
const userLabel = document.getElementById("user-label");
const computerLabel = document.getElementById("computer-label");
const targetScoreDisplay = document.getElementById("target-score-display");

const dialogContent = document.querySelector(".dialog-content");
const winnerDialog = document.getElementById("winner-dialog");
const winnerMessage = document.getElementById("winner-message");
const playAgainButton = document.getElementById("play-again-button");
const resetButton = document.getElementById("reset-button");

const playerName = sessionStorage.getItem("playerName");
const computerName = sessionStorage.getItem("computerName");
const targetScore = parseInt(sessionStorage.getItem("targetScore"));

if (!playerName || !computerName || !targetScore) {
    window.location.href = "setup.html";
}

userLabel.textContent = playerName;
computerLabel.textContent = computerName;
targetScoreDisplay.textContent = `Target Score: ${targetScore}`;

function getComputerChoice() {
    const choices = ["r", "p", "s"];
    const randomNumber = Math.floor(Math.random() * 3);
    return choices[randomNumber];
}

function convertToWord(letter) {
    if (letter === "r") return "Rock";
    if (letter === "p") return "Paper";
    return "Scissors";
}

function checkWinner() {
    if (userScore === targetScore) {
        endGame("user");
    } else if (computerScore === targetScore) {
        endGame("computer");
    }
}

function endGame(winner) {
    gameOver = true;

    dialogContent.classList.remove("win", "lose");

    if (winner === "user") {
        dialogContent.classList.add("win");
        setTimeout(() => {
            winnerMessage.innerHTML = `${playerName} reached the target score!<br>Congratulations, You win! Well Done.`;
            winnerDialog.classList.remove("hidden");
        }, 150);
    } else {
        dialogContent.classList.add("lose");
        setTimeout(() => {
            winnerMessage.innerHTML = `${computerName} reached the target score!<br>You lose... Better luck next time!`;
            winnerDialog.classList.remove("hidden");
        }, 150);
    }
}

function resetScoresOnly() {
    userScore = 0;
    computerScore = 0;
    gameOver = false;

    userScore_span.textContent = userScore;
    computerScore_span.textContent = computerScore;
    result_p.textContent = "Don't Forget: Paper Covers Rock.";
    winnerDialog.classList.add("hidden");
    dialogContent.classList.remove("win", "lose");
}

function resetEntireGame() {
    sessionStorage.removeItem("playerName");
    sessionStorage.removeItem("computerName");
    sessionStorage.removeItem("targetScore");
    window.location.href = "setup.html";
}

function win(userChoice, computerChoice) {
    const smallYouWord = "(You)".fontsize(3).sub();
    const smallComputerWord = "(Computer)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    userScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(userChoice)}${smallYouWord} beats ${convertToWord(computerChoice)}${smallComputerWord}. You Win! 🔥`;

    userChoice_div.classList.add("green-glow");
    setTimeout(() => userChoice_div.classList.remove("green-glow"), 300);

    checkWinner();
}

function lose(userChoice, computerChoice) {
    const smallYouWord = "(You)".fontsize(3).sub();
    const smallComputerWord = "(Computer)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    computerScore++;
    userScore_span.innerHTML = userScore;
    computerScore_span.innerHTML = computerScore;

    result_p.innerHTML = `${convertToWord(userChoice)}${smallYouWord} loses to ${convertToWord(computerChoice)}${smallComputerWord}. You Lost... 🫠`;

    userChoice_div.classList.add("red-glow");
    setTimeout(() => userChoice_div.classList.remove("red-glow"), 300);

    checkWinner();
}

function draw(userChoice, computerChoice) {
    const smallYouWord = "(You)".fontsize(3).sub();
    const smallComputerWord = "(Computer)".fontsize(3).sub();
    const userChoice_div = document.getElementById(userChoice);

    result_p.innerHTML = `${convertToWord(userChoice)}${smallYouWord} equals ${convertToWord(computerChoice)}${smallComputerWord}. It's a draw... 🤖`;

    userChoice_div.classList.add("gray-glow");
    setTimeout(() => userChoice_div.classList.remove("gray-glow"), 300);
}

function game(userChoice) {
    if (gameOver) {
        return;
    }

    const computerChoice = getComputerChoice();

    switch (userChoice + computerChoice) {
        case "rs":
        case "pr":
        case "sp":
            win(userChoice, computerChoice);
            break;
        case "rp":
        case "ps":
        case "sr":
            lose(userChoice, computerChoice);
            break;
        case "rr":
        case "pp":
        case "ss":
            draw(userChoice, computerChoice);
            break;
    }
}

function main() {
    rock_div.addEventListener("click", () => game("r"));
    paper_div.addEventListener("click", () => game("p"));
    scissors_div.addEventListener("click", () => game("s"));

    playAgainButton.addEventListener("click", resetScoresOnly);
    resetButton.addEventListener("click", resetEntireGame);
}

main();
