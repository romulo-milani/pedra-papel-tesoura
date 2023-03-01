
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

    //se retornar 0 o computador ganhou
    //se retornar 1 o jogador ganhou
    //se retornar 2 é um empate

    if (playerSelection == 'pedra' && computerSelection == 'pedra') {
        return 2
    } else if (playerSelection == 'pedra' && computerSelection == 'papel') {
        return 0
    } else if (playerSelection == 'pedra' && computerSelection == 'tesoura') {
        return 1
    } else if (playerSelection == 'papel' && computerSelection == 'papel') {
        return 2
    } else if (playerSelection == 'papel' && computerSelection == 'pedra') {
        return 1
    } else if (playerSelection == 'papel' && computerSelection == 'tesoura') {
        return 0
    } else if (playerSelection == 'tesoura' && computerSelection == 'tesoura') {
        return 2
    } else if (playerSelection == 'tesoura' && computerSelection == 'pedra') {
        return 0
    } else if (playerSelection == 'tesoura' && computerSelection == 'papel') {
        return 1
    }
}

function game() {
    let playerScore = 0;
    let computerScore = 0;

    //Loop para jogar 5 partidas e anotar o placar dos jogadores
    for (let i = 0; i < 5; i++) {
        console.log(`----Rodada ${i + 1}---- \n`);
        //armazena a escolha do jogador
        const playerSelection = prompt("Digite sua escolha: pedra, papel ou tesoura!");
        //armazena a escolha do computador
        const computerSelection = getComputerChoice();
        //jogue uma rodada
        let resultado = playRound(playerSelection, computerSelection);

        //anuncia as escolhas
        console.log(`Você escolheu ${playerSelection} \n`);
        console.log(`Computador escolheu ${computerSelection} \n`);
        //Determina quem receberá um ponto
        if (resultado == 0) {
            computerScore++
            console.log("O computador venceu a rodada!");
        } else if (resultado == 1) {
            playerScore++
            console.log("Você venceu a rodada!");
        } else if (resultado == 2) {
            computerScore++
            playerScore++
            console.log("Essa rodade foi um empate!");
        }


    }

    //Depois de jogadas as cinco vezes, anunciar o vencedor
    console.log('Terminou o Jogo! \n')
    console.log(`Placar: \n`)
    console.log(`Você ganhou ${playerScore} pontos \n`)
    console.log(`O computador ganhou ${computerScore} pontos \n`)

    if (playerScore == computerScore) {
        console.log("Vocês emparatam!! \n")
    } else if (playerScore > computerScore) {
        console.log('Você é o vencedor!! \n')
    } else if (playerScore < computerScore) {
        console.log("O vencedor é o computador!!")
    }
}

//SELECIONA OS BOTÕES
const btns = document.querySelectorAll('.button');

for (let i = 0; i<btns.length; i++) {
    btns[i].addEventListener('click', () => {
        //salva a escolha do jogador
        const playerChoice = btns[i].value;
        //salva a escolha do computador
        const computerChoice = getComputerChoice();  
        //joga uma rodada com as escolhas e anuncia o vencedor  
        const resultado = playRound(playerChoice, computerChoice);
    })
}

