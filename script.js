//botões de seleção
const btns = document.querySelectorAll('.button');
//texto h3 que anuncia o vencedor da jogada
const h3resultado = document.querySelector('.h3-resultado-rodada');
//placar do jogador
let placarJogador = document.querySelector('.jogador-score');
//placar do computador
let placarComputador = document.querySelector('.computador-score');
//contador de rodada
let contadorRodada = document.querySelector('.contador-rodada');
//imagem mostrando a escolha do jogador
const imgJogador = document.querySelector('.img-jogador');
//imagem mostrando a escolha do computador
const imgComputador = document.querySelector('.img-computador');
//div mostrando a imagem da escolha do jogador
const divEscolhaJogador = document.querySelector('.div-escolha-jogador');
//div mostrando a imagem da escolha do computador
const divEscolhaComputador = document.querySelector('.div-escolha-computador');
//seleciona o texto principal para anunciar o fim do jogo
const h3Rodada = document.querySelector('#h3-rodada');

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
//função que troca a imagem nos divs conforme as escolhas dos jogadores
function mostraEscolhas(escolhaJogador, escolhaComputador) {
    //troca as imagens
    imgJogador.setAttribute('src', `imagens/${escolhaJogador}.png`);
    imgComputador.setAttribute('src', `imagens/${escolhaComputador}.png`);

    //faz as imagens aparecerem
    imgJogador.classList.remove('img-resultado-antes');
    imgComputador.classList.remove('img-resultado-antes');

    imgJogador.classList.add('img-resultado-depois');
    imgComputador.classList.add('img-resultado-depois');

    //troca o estilo das divs
    divEscolhaJogador.classList.remove('escolha-jogador-antes');
    divEscolhaComputador.classList.remove('escolha-computador-antes');

    divEscolhaJogador.classList.add('escolha-jogador-depois');
    divEscolhaComputador.classList.add('escolha-computador-depois');


}

let playerScore = 0;
let computerScore = 0;
let rodada = 0;

for (let i = 0; i < btns.length; i++) {
    btns[i].addEventListener('click', function game() {

        const playerChoice = btns[i].value;
        const computerChoice = getComputerChoice();
        const resultado = playRound(playerChoice, computerChoice);

        if (rodada < 4) {
            if (resultado == 0) {
                //atualiza o score do computador
                computerScore++;
                placarComputador.textContent = computerScore;
                //anuncia o vencedor no texto h3
                h3resultado.textContent = 'Robô venceu a rodada';
                h3resultado.classList.remove('h3-resultado-rodada');
                h3resultado.classList.add('h3-aparece');
                //atualiza e mostra a imagem na div
                mostraEscolhas(playerChoice, computerChoice);
                //passa a rodada
                rodada++;
                contadorRodada.textContent = rodada;
            } else if (resultado == 1) {
                //atualiza o score do jogador
                playerScore++;
                placarJogador.textContent = playerScore;
                //anuncia o vencedor no texto h3
                h3resultado.textContent = 'Você venceu a rodada';
                h3resultado.classList.remove('h3-resultado-rodada');
                h3resultado.classList.add('h3-aparece');
                //atualiza e mostra a imagem na div
                mostraEscolhas(playerChoice, computerChoice);
                //passa a rodada
                rodada++;
                contadorRodada.textContent = rodada;

            } else if (resultado === 2) {
                //se empatar, os dois recebem um ponto
                computerScore++;
                placarComputador.textContent = computerScore;
                playerScore++;
                placarJogador.textContent = playerScore;
                h3resultado.textContent = 'Foi um empate';
                h3resultado.classList.remove('h3-resultado-rodada');
                h3resultado.classList.add('h3-aparece');
                //atualiza e mostra a imagem na div
                mostraEscolhas(playerChoice, computerChoice);
                //passa a rodada
                rodada++;
                contadorRodada.textContent = rodada;
            }

        } else if (rodada == 4) {

            //atualiza o placar
            if (resultado == 0) {
                //atualiza o score do computador
                computerScore++;
            } else if (resultado == 1) {
                playerScore++
            } else if (resultado == 2) {
                computerScore++;
                playerScore++
            }

            placarJogador.textContent = playerScore;
            placarComputador.textContent = computerScore;
            //mostra o resultado
            mostraEscolhas(playerChoice, computerChoice);
            //passa a rodada
            rodada++
            contadorRodada.textContent = '';
            h3Rodada.textContent = 'FIM!!'

            if (playerScore == computerScore) {
                h3resultado.textContent = "O jogo foi um empate!";
                return;
            } else if (playerScore > computerScore) {
                h3resultado.textContent = "Parabéns, você ganhou o jogo!";
                return;
            } else if (playerScore < computerScore) {
                h3resultado.textContent = "O robô ganhou o jogo!";
                return;
            }

        } else if (rodada > 4) {
            return;
        }
    })
}
