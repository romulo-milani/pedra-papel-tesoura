
//fazer com que o pc retorne aleatoriamente pedra, papel ou tesoura

// ------passo 1------
//fazer o computador retornar um valor inteiro aleatório entre 1 e 3
//------passo 2 ------
//Criar um id entre 1 e 3 para cada opção e ligar com o número que o computador retorna. Fazer a função retornar uma string ao invés de um valor


function getComputerChoice() {
    let choice = Math.floor((Math.random() *3)+1);
    return choice;
}
