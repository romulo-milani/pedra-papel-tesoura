
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

console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
console.log(getComputerChoice());
