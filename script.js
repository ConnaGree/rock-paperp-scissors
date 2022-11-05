 
let choiceName = ['Rock','Paper','Scissors'];
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex];
    return item;
}


let compWin = 0, useWin = 0;
let computerSelection = getComputerChoice(choiceName);


let userSelection = prompt("What is your choice? ")
function selection(select){
    let choice = select.charAt(0).toUpperCase() + select.slice(1).toLocaleLowerCase();
    return choice;
}

const playerSelection = selection(userSelection);
// console.log(playerSelection, computerSelection)

function playRound(playerSelection,computerSelection) {
     if (playerSelection === "Rock" && computerSelection == "Paper"){
        ++compWin;
        return 'You Lose! Paper beats Rock';
     }
     else if (playerSelection === "Scissors" && computerSelection == "Paper") {
        ++useWin;
        return 'You Win! Scissors beats Paper';
     }
     else if (playerSelection === "Paper" && computerSelection == "Paper") {
        return 'Tie! Play again!';
     }
     else if (playerSelection == "Paper" && computerSelection == "Rock") {
        ++useWin;
        return 'You Win! Paper beats Rock';
     }

     else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        ++compWin;
        return 'You Lose! Rock beats Scissors';
     }
     else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return 'Tie! Play again!';
     }

     else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        ++compWin;
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return 'Tie! Play again!';
    }
    else {
        ++useWin;
        return 'You Win! Rock beats Scissors';
    }

}

function game() {
    
    for (let i = 0; i < 5; i++){
     
//      For game outcomes with out prompt remove line number 69
        console.log(playRound(playerSelection,computerSelection))
        console.log(computerSelection, userSelection);
        userSelection = prompt("What is your choice? ")
        computerSelection = getComputerChoice(choiceName);
    }

}
game();

console.log(useWin, compWin);



