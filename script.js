 
let choiceName = ['Rock','Paper','Scissor'];
function getComputerChoice(arr) {
    const randomIndex = Math.floor(Math.random() * arr.length)
    const item = arr[randomIndex];
    return item;
}

let computerSelection = getComputerChoice(choiceName);

let compWin = 0, useWin = 0 , match = 0;




// console.log(playRound(playerSelection,computerSelection));



function game() {
    
    
    for (let i = 0; i < 5; i++){
        userSelection = prompt("What is your choice? ");
        playerSelection = selection(userSelection);
        console.log(`Match: ${++match}`)
        console.log(`playerSelection: ${playerSelection}`)
        console.log(`computerSelection: ${computerSelection}`)
        console.log(playRound(playerSelection,computerSelection))
        console.log(`playerScore: ${useWin}`, `computerScore: ${compWin}`)
        
        
        computerSelection = getComputerChoice(choiceName)
        
       
    }
    


}
game();
if (useWin < compWin){
    console.log("***************** You Lose the Game! ************************");
} else if (useWin > compWin){
    console.log("***************** You Win the Game! ************************");
}else {
    console.log("***************** Tie! Play Again ************************")
}


function selection(select){
    let choice = select.charAt(0).toUpperCase() + select.slice(1).toLocaleLowerCase();
    return choice;
}



function playRound(playerSelection,computerSelection) {
     if (playerSelection == "Rock" && computerSelection == "Paper"){
        ++compWin;
        return 'You Lose! Paper beats Rock';
     }
     else if (playerSelection == "Scissor" && computerSelection == "Paper") {
        ++useWin;
        return 'You Win! Scissor beats Paper';
     }
     else if (playerSelection == "Paper" && computerSelection == "Paper") {
        return 'Tie! Play again!';
     }
     else if (playerSelection == "Paper" && computerSelection == "Rock") {
        ++useWin;
        return 'You Win! Paper beats Rock';
     }

     else if (playerSelection == "Scissor" && computerSelection == "Rock") {
        ++compWin;
        return 'You Lose! Rock beats Scissor';
     }
     else if (playerSelection == "Rock" && computerSelection == "Rock") {
        return 'Tie! Play again!';
     }

     else if (playerSelection == "Paper" && computerSelection == "Scissor") {
        ++compWin;
        return 'You Lose! Scissor beats Paper';
    }
    else if (playerSelection == "Scissor" && computerSelection == "Scissor") {
        
        return 'Tie! Play again!';
    }
    else {
        ++useWin;
        return 'You Win! Rock beats Scissor';
    }

}




