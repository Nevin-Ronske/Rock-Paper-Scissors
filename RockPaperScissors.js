function getComputerChoice() {
    let computedAnswer = Math.floor(Math.random() * 3 + 1);
    if (computedAnswer == 1){
        console.log("Rock");
    }else if (computedAnswer == 2) {
        console.log("Paper");
    }else if (computedAnswer == 3){
        console.log("Scissor");
    }
    return computedAnswer;
}


function getComputeredChoice() {
    let computerAnswer = Math.floor(Math.random() * 3 + 1);
    if (computerAnswer == 1) {
        console.log("Rock");
    } else if (computerAnswer == 2) {
        console.log("Paper");
    } else if (computerAnswer == 3) {
        console.log("Scissor");
    }
    return computerAnswer;
}

function playRound(computerAnswer, computedAnswer) {


    let playedRound = "We could not find a winner"
  if (computedAnswer == computerAnswer) {
    playedRound = "tie"
   }
   else if (computedAnswer || computerAnswer == "Rock" && computerAnswer || computedAnswer == "Paper") {
    playedRound = "Rock Wins"
   }

   return console.log(playedRound);
}

const computeredSelection = getComputeredChoice();
const computerSelection = getComputerChoice();

playRound(computeredSelection, computerSelection)
