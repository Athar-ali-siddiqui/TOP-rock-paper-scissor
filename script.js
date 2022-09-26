
const choices = ["rock" , "paper" , "scissor"];

function playRound(playerSelection, computerSelection) {
    // your code here!
    if(playerSelection === computerSelection){
        return "tie! " + playerSelection +" can't beats "+computerSelection;
    }
    else if(playerSelection === 'rock'){
        if(computerSelection == 'paper') {
            return "You Lose! rock can't beats paper";
        }
        else if(computerSelection == 'scissor') {
            return "You Win! rock beats paper";
        }
    }
    else if(playerSelection === 'paper'){
        if(computerSelection == 'rock') {
            return "You Win! paper beats rock";
        }
        else if(computerSelection == 'scissor') {
            return "You Lose! paper can't beats scissor";
        }
    }
    else if(playerSelection === 'scissor'){
        if(computerSelection == 'rock') {
            return "You Lose! scissor can't beats rock";
        }
        else if(computerSelection == 'paper') {
            return "You Win! scissor beats paper";
        }
    }

  }
   
function getComputerChoice(){
    return choices[Math.floor(Math.random()*3)];
}


for (let i = 0; i < 5; i++) {
    const playerSelection = prompt("Enter Your Choice {rock , paper , scissor} ?? :").toLowerCase();
    const computerSelection = getComputerChoice();
    console.log(playRound(playerSelection, computerSelection));
}
