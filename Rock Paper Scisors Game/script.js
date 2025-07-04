const choices = ["rock", "paper", "scissors"];
const playerDisplay = document.getElementById("playerDisplay");
const ComputerDisplay = document.getElementById("ComputerDisplay");
const resultDisplay = document.getElementById("result");
const playerscoredisplay = document.getElementById("playerScoreDisplay");
const computerscoredisplay = document.getElementById("computerScoreDisplay");

let PlayerScore = 0;
let ComputerScore = 0;

function playGames(playerchoice){
    const computerChoice = choices[Math.floor(Math.random()*3)]

    let result = "";

    if(playerchoice === computerChoice){
        result = "IT'S A TIE"
    }
    else{
        switch(playerchoice){
            case "rock":
                result = (computerChoice === "scissors") ? "YOU WIN" : "YOU LOOSE"
                break;
            case "paper":
                result = (computerChoice === "rock") ? "YOU WIN" : "YOU LOOSE"
                break;
            case "scissors":
                result = (computerChoice === "paper") ? "YOU WIN" : "YOU LOOSE"
                break;
        }
        }

        playerDisplay.textContent = `Player : ${playerchoice}`
        ComputerDisplay.textContent = `Computer : ${computerChoice}`
        resultDisplay.textContent = result;
        resultDisplay.classList.remove("greenText", "redText")

        switch(result){
            case "YOU WIN":
                resultDisplay.classList.add("greenText")
                PlayerScore+=1;
                break;
            case"YOU LOOSE":
                resultDisplay.classList.add("redText")
                ComputerScore+=1;
                break;
        }


        computerscoredisplay.textContent = ComputerScore;
        playerscoredisplay.textContent = PlayerScore;
    }