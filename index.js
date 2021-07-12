let winCounter = 0;
let loseCounter = 0;
let secondsLeft = 11;
let chosenWord = "";
let won = false;
let blanks = 0;

let words = ["badger", "snake", "spider", "crow", "monkey", "wolf"];

const timeEl = document.querySelector(".timer-text");
const gameover = document.getElementById("gameover");
const start = document.getElementById("start");
let win = document.querySelector(".win");
let lose = document.querySelector(".lose");


start.addEventListener("click", function (event) {
    event.preventDefault();
    startGame();
});

function init() {
    getWins();
    getLosses();
}

function startGame() {
    hideText();
    setTime();
}

function setWins() {
    win.textContent = winCounter;
    localStorage.setItem("winCount", winCounter);
}

function setLosses() {
    lose.textContent = loseCounter;
    localStorage.setItem("loseCount", loseCounter);
}

function getWins() {
    let storedWins = localStorage.getItem("winCount");
    if (storedWins == null) {
        winCounter = 0;
    } else {
        winCounter = storedWins;
    }
    win.textContent = winCounter;
}

function getLosses() {
    let storedLosses = localStorage.getItem("loseCount");
    if (storedLosses == null) {
        loseCounter = 0;
    } else {
        loseCounter = storedLosses;
    }
    lose.textContent = storedLosses;
}

function hideText() {
    start.classList.remove("show");
    start.classList.add("hide");
}

function resetScore() {

}

function setTime() {
    let timerInterval = setInterval(function () {
        secondsLeft--;
        timeEl.textContent = secondsLeft + " seconds left";
        
        if (secondsLeft === 0) {
            clearInterval(timerInterval);
            gameOver();
        }
    }, 1000);
}

function playerWin() {
    

}

function gameOver() {
    timeEl.textContent = "";
    gameover.classList.add("show");
    loseCounter++;
    setLosses();
}
