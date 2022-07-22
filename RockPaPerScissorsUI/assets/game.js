function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function computerPlay() {
    let selectedPlayer;
    let rndmNumber = getRandomInt(3);

    switch (rndmNumber) {
      case 0:
        selectedPlayer = "Rock";
        break;
      case 1:
        selectedPlayer = "Paper";
        break;
      case 2:
        selectedPlayer = "Scissors";
        break;
    }
    return selectedPlayer;
};

function selectPlayer(move) {
    let selectedPlayer;
    let selectedMove;

    const rockBtn = document.querySelector('#btn_rock');
    const paperBtn = document.querySelector('#btn_paper');
    const scissorBtn = document.querySelector('#btn_scissors');

    this.selectedMove = move;

    switch (selectedMove) {
      case "rock":
        selectedPlayer = "Rock";
        break;
      case "paper":
        selectedPlayer = "Paper";
        break;
      case "scissors":
        selectedPlayer = "Scissors";
        break;
      default:
        alert("You did not give valid move! please try again and check spelling.");
        selectPlayer();
        break;
    }
    return selectedPlayer;
};
function playRound(playerSelection, compterSelection) {
    const rockBtn = document.querySelector('#btn_rock');
    const paperBtn = document.querySelector('#btn_paper');
    const scissorBtn = document.querySelector('#btn_scissors');
    let rockpaperscissors = playerSelection + " " + compterSelection;
    
    switch (rockpaperscissors) {
        case "Rock Scissors":
            return 1;
        case "Rock Rock":
            return 3;
        case "Paper Rock":
            return 1;
        case "Paper Paper":
            return 3;
        case "Scissors Paper":
            return 1;
        case "Scissors Scissors":
            return "Player and computer ends up in a draw";
        default:
            return 2;
        }
};
function game() {
    const rstBtn = document.getElementById('#rst_btn');
    rstBtn.style.display = 'none';

    const playerScore = 0;
    const computerScore = 0;
    const playerS = document.querySelector('#player');
    const computerS = document.querySelector('#computer');

    const result = document.querySelector('.result');

    for (let i = 0; i < 5; i++) {
        const playerSelection = selectPlayer();
        const compterSelection = computerPlay();
        const round = playRound(playerSelection, compterSelection);
        if (round == 1) {
            console.log("Player wins computer, " + playerSelection + " beats " + compterSelection);
            playerScore++;
            result.textContent = 'Player Won';
            playerS.textContent = ''
        } else if (round == 2) {
            console.log("Computer wins player, " + compterSelection + " beats " + playerSelection);
            computerScore++;
            result.textContent = 'Computer Won';
        }
        else{
            console.log("Draw, no winner for this round");
        }
    }
    if (computerScore == playerScore){
        console.log("Computer and player end up in draw");
    }
    else if (computerScore > playerScore){
        console.log("Computer wins player with score of " + computerScore, playerScore);
    }
    else if (computerScore < playerScore){
        console.log("Player wins computer with score of " + playerScore, computerScore);
    }
};