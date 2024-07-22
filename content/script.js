

//convert input into number and store
//randomize computer choice using number and store
//check winner


let humanScore = 0
let computerScore = 0

PlayGame(

)
function PlayGame() {
    for (let i = 0; i < 5; ++i) {
    let humanChoice = getHumanChoice()
    let computerChoice = getComputerChoice()
    playRound(humanChoice, computerChoice)
    }

    alert("Final Scores:\nHuman: " + humanScore + "\nComputer: " + computerScore);
    
}




function playRound (humanChoice, computerChoice) {
     //human choice wins: human rock/scissors paper/rock scissors/paper 
     if (humanChoice === 'ROCK' && computerChoice === 'SCISSORS' || humanChoice === 'PAPER' && computerChoice  === 'ROCK' || humanChoice === 'SCISSORS' && computerChoice === 'PAPER' ) {
        alert('Human Won!')
        humanScore++
     } else if (humanChoice === computerChoice) {
        alert('Tie!')
     } else {
        alert('Computer won!')
        computerScore++
     }
}

function getComputerChoice() {
    let computerChoice = Math.floor(Math.random()*3) + 1
    if (computerChoice === 1) {
        computerChoice = 'Rock'
    } else if (computerChoice === 2) {
        computerChoice = 'Paper'
    } else {
        computerChoice = 'Scissors'
    }
    computerChoice = computerChoice.toUpperCase()
    alert("Computer chose: " + computerChoice)
    return computerChoice
}

function getHumanChoice() {
    let userInput
    let reappear = true

    while (reappear === true) {
       userInput = prompt("(Enter your choice: Rock, Paper, Scissors)")
       userInput = userInput.toUpperCase() 

       if (userInput === 'ROCK' || userInput === 'PAPER'|| userInput === 'SCISSORS') {
        reappear = false
       } else {
        alert('Your response is not ROCK, PAPER, OR SCISSORS. Click OK to re-enter choice.')
       }
    }
    return userInput
}