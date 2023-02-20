
//Função que faz o computador retornar um valor aleatório entre pedra, papel e tesoura
function getComputerChoice() {
    let choice = Math.floor((Math.random() * 3) + 1);

    switch (choice) {
        case 1:
            choice = 'pedra';
            break;

        case 2:
            choice = 'papel';
            break;

        case 3:
            choice = 'tesoura'
            break;
    }
    return choice;
}

//Função que joga apenas uma rodada do jogo
function playRound(playerSelection, computerSelection) {
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();

    if (playerSelection == 'pedra' && computerSelection == 'pedra') {
        return 'É um impate'
    } else if (playerSelection == 'pedra' && computerSelection == 'papel') {
        return 'Computador ganhou'
    } else if (playerSelection == 'pedra' && computerSelection == 'tesoura') {
        return 'Você ganhou!'
    } else if (playerSelection == 'papel' && computerSelection == 'papel') {
        return 'É um impate'
    } else if (playerSelection == 'papel' && computerSelection == 'pedra') {
        return 'Você ganhou!'
    } else if (playerSelection == 'papel' && computerSelection == 'tesoura') {
        return 'Computador ganhou'
    } else if (playerSelection == 'tesoura' && computerSelection == 'tesoura') {
        return 'É um empate'
    } else if (playerSelection == 'tesoura' && computerSelection == 'pedra') {
        return 'Computador ganhou'
    } else if (playerSelection == 'tesoura' && computerSelection == 'papel') {
        return 'Você ganhou!'
    }
}

//Uma rodada do jogo
const playerSelection = 'TesOura';
const computerSelection = getComputerChoice();
console.log(playRound(playerSelection, computerSelection));