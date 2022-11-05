 
let choiceName = ['Rock','Paper','Scissors'];
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex];
    return item;
}

const computerSelection = getComputerChoice(choiceName);
console.log(computerSelection)

let userSelection = prompt("What is your choice? ")
function selection(select){
    let choice = select.charAt(0).toUpperCase() + select.slice(1).toLocaleLowerCase();
    return choice;
}

const playerSelection = selection(userSelection);
console.log(playerSelection)

function playRound(playerSelection,computerSelection) {
     if (playerSelection == "Rock" && computerSelection == "Paper"){
        return 'You Lose! Paper beats Rock';
     }
     else if (playerSelection == "Scissors" && computerSelection == "Paper") {
        return 'You Win! Scissors beats Paper';
     }
     else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return 'Tie! Play again!';
     }
     else if (playerSelection == "Paper" && computerSelection == "Rock") {
        return 'You Win! Paper beats Rock';
     }

     else if (playerSelection == "Scissors" && computerSelection == "Rock") {
        return 'You Lose! Rock beats Scissors';
     }
     else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return 'Tie! Play again!';
     }

     else if (playerSelection == "Paper" && computerSelection == "Scissors") {
        return 'You Lose! Scissors beats Paper';
    }
    else if (playerSelection == "Scissors" && computerSelection == "Scissors") {
        return 'Tie! Play again!';
    }
    else {
        return 'You Win! Rock beats Scissors';
    }

}

function game() {
    
    
    for (let i = 0; i < 5; i++){
        console.log(playRound(playerSelection,computerSelection))
    }


}
game()




