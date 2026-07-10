// selecionando os elementos do DOM
const playerChoice = document.querySelector("#playerChoice");
const cpuChoice = document.querySelector("#cpuChoice");

const playerResult = document.querySelector("#playerResult");
const cpuResult = document.querySelector("#cpuResult");

const resethame = document.querySelector("#btnReset");

// variáveis para armazenar os resultados do jogador e da máquina
let playerResultScore = 0;
let cpuResultScore = 0;


// mapa de emojis, onde a chave é a escolha do jogador e o valor é o emoji correspondente
const choiceEmoji = {

    rock: "&#x1F44A",
    paper: "&#x1F91A",
    scissors: "&#x270C"

}
// mapa de vitórias, onde a chave é a escolha do jogador e o valor é a escolha que ele vence
const winMap = {

    rock: "scissors",
    paper: "rock",
    scissors: "paper"
    
}


// função que recebe a escolha do jogador e chama a função de batalha
const humanPlayer = (humanChoice) => {
    
    jokenpoBatlle(String(humanChoice).toLowerCase(), cpuPlayer());

}

// função que retorna a escolha aleatória da máquina
const cpuPlayer = () => {
    
    const choice = ["rock", "paper", "scissors"]
    const cpuChoice = Math.floor(Math.random() * 3);

    return choice[cpuChoice]
}

// função que realiza a batalha entre o jogador e a máquina
const jokenpoBatlle = (human, cpu) => {
    
    console.log(`Jogador: ${human} | Máquina: ${cpu}`);
    // convertendo as escolhas para minúsculas para evitar problemas de comparação
    const convertHumanString = String(human).toLowerCase();
    const convertStringCpu = String(cpu).toLowerCase();

    // verificando se as escolhas são válidas
    if (!choiceEmoji[convertHumanString] || !choiceEmoji[convertStringCpu]) {
        
        console.warn("Escolha inválida detectada.");
        return;

    }

    playerChoice.innerHTML = choiceEmoji[convertHumanString];
    playerChoice.style.fontSize = "5rem";

    cpuChoice.innerHTML = choiceEmoji[convertStringCpu];
    cpuChoice.style.fontSize = "5rem";

    // retona empate
    if (convertHumanString === convertStringCpu) {
        
        return
    
    }

    // retorna vitória do jogador
    else if (winMap[convertHumanString] === convertStringCpu) {
        
        playerResultScore++;
        playerResult.textContent = playerResultScore;
        return

    }

    // retorna vitória da máquina
    else {

        cpuResultScore++;
        cpuResult.textContent = cpuResultScore;
        return
    }

}

// função que reseta o jogo
resethame.addEventListener("click", () => {
    
    playerChoice.innerHTML = "Waiting..." ;
    playerChoice.style.fontSize = "1rem";
    playerResultScore = 0
    playerResult.textContent = playerResultScore;
    
    
    cpuChoice.innerHTML = "Waiting...";
    cpuChoice.style.fontSize = "1rem";
    cpuResultScore = 0;
    cpuResult.textContent = cpuResultScore;


})

/* 
rock => scissors => paper => rock
*/