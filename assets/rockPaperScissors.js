function getRandomInt(max) {
    return Math.floor(Math.random() * max);
};
function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}

function computerPlay() {
    let selectedPlayer;
    let rndmNumber = getRandomInt(3);

    switch (rndmNumber){
        case 0: selectedPlayer = "rock";
        break;
        case 1: selectedPlayer = "paper";
        break;
        case 2: selectedPlayer = "scissors";
        break;
    }
    return selectedPlayer;
};
/** 
function buttonClicked(){
    let moveId = this.id
    let selectedPlayer;

    switch(moveId){
        case "btn_rock": alert("HI"), selectedPlayer = "Rock";
        break;
        case "btn_paper": selectedPlayer = "Paper";
        break;
        case "btn_scissors": selectedPlayer = "Scissors";
        break;
    }
    return selectedPlayer;

    function playRound(playersMove) {
    const result = document.getElementById('.results');
    const playerScore = document.getElementById('player');
    const computerScore = document.getElementById('computer');
    let rockpaperscissors = playersMove.toLowerCase() + " " + computerPlay();
    switch(rockpaperscissors){
        case "rock scissors": 
            result.textContent = "Player wins computer " + playerSelection + " slaps " + compterSelection;
            break;
        case "rock rock": 
            result.textContent = "Player and computer ends up in a draw";
            break;
        case "paper rock": 
            result.textContent = "Player wins computer " + playerSelection + " beats " + compterSelection;
            break;
        case "paper paper": 
            result.textContent = "Player and computer ends up in a draw";
            break;
        case "scissors paper": 
            result.textContent = "Player wins computer " + playerSelection + " destroys " + compterSelection;
            break;
        case "scissors scissors": 
            result.textContent = "Player and computer ends up in a draw";
        break;
        default: 
            result.textContent = "Computer wins player, " + compterSelection + " is better than " + playerSelection;
            break;
    }
};
}*/
function playRound(playersMove) {
    let rockpaperscissors = playersMove.toLowerCase() + " " + computerPlay();
    switch(rockpaperscissors){
        case "rock scissors": 
            return 1;
        case "rock rock": 
            return 2;
        case "paper rock": 
            return 1;
        case "paper paper": 
            return 2;
        case "scissors paper": 
            return 1;   
        case "scissors scissors": 
            return 2;
        default: 
            return 3;
    }
};

function game() {
    const rstBtn = document.getElementById('rst_btn');
    const gameBtns = document.getElementById('gb_btns');
    rstBtn.style.display = 'none';
    gameBtns.style.display = 'flex';

    let playerScore = 0;
    let computerScore = 0;
    let currentRound = 0;
    const result = document.getElementById('results');
    const playerScoreBoard = document.getElementById('player');
    const computerScoreBoard = document.getElementById('computer');

    const btnRock = document.getElementById('btn_rock');
    const btnPaper = document.getElementById('btn_paper');
    const btnScissor = document.getElementById('btn_scissors');
    
    const playersMove = [btnRock,btnPaper,btnScissor];
     
    // ''game starts''
    playersMove.forEach(myMove => {
        myMove.addEventListener('click',function(){
            currentRound++;
            const round = playRound(this.innerText);
            switch(round){
                case 1: 
                    playerScore = playerScore + 1;
                    result.textContent = 'Player wins computer';
                    playerScoreBoard.textContent = 'Player:' + playerScore;
                    break;
                case 2: 
                    result.textContent = 'Tie';
                    break;
                case 3: 
                    computerScore = computerScore + 1;
                    result.textContent = 'Computer wins player'
                    computerScoreBoard.textContent = 'Computer:' + computerScore;
                    break;
            }
            if(currentRound == 5){
                gameBtns.style.display = 'none';
                result.innerText = 'Game Over!!'
         
                if(playerScore > computerScore){
                    result.innerText = 'Player Won!'
                }
                else if(playerScore < computerScore){
                    result.innerText = 'Computer Won!';
                }
                else{
                    result.innerText = 'Player and computer ends up in a draw';
                }
                
                sleep(3000).then(() => { window.location.reload(); });;
            }
        })
    })
};
