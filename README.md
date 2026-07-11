# Jokenpô

Projeto web simples de **Jokenpô (Pedra, Papel e Tesoura)** desenvolvido com **HTML, CSS e JavaScript**.

## Sobre o projeto

Este projeto apresenta uma interface moderna para jogar Jokenpô contra a CPU. O usuário escolhe entre **rock**, **paper** ou **scissors**, e o sistema sorteia automaticamente a jogada da máquina.

## Funcionalidades

- Página inicial com apresentação do jogo
- Navegação para a tela principal da partida
- Escolha entre pedra, papel e tesoura
- Jogada aleatória da CPU
- Atualização do placar do jogador e da CPU
- Botão para reiniciar a partida
- Página `404.html` com redirecionamento para a página inicial
- Estrutura pronta para publicação no **GitHub Pages**

## Estrutura do projeto

```text
.
├── 404.html
├── index.html
└── src
    ├── css
    │   ├── game.css
    │   └── style.css
    ├── js
    │   └── script.js
    └── paginas
        └── game.html
```

## Tecnologias utilizadas

- HTML5
- CSS3
- JavaScript
- Bootstrap Icons
- Google Fonts

## Como executar o projeto

1. Clone este repositório:

```bash
git clone https://github.com/lucasalbuquerque09/simple-jokenp--project.git
```

2. Acesse a pasta do projeto:

```bash
cd simple-jokenp--project
```

3. Abra o arquivo `index.html` no navegador.

## Como jogar

1. Abra a página inicial
2. Clique em **Start Game**
3. Escolha entre **Rock**, **Paper** ou **Scissors**
4. Veja o resultado da rodada contra a CPU
5. Use o botão **Reset Game** para reiniciar o placar

## Lógica do jogo

A regra implementada no JavaScript segue a estrutura abaixo:

- Rock vence Scissors
- Paper vence Rock
- Scissors vence Paper

A CPU escolhe uma opção aleatória a cada rodada, e o placar é atualizado conforme o vencedor.

## Publicação

O projeto pode ser publicado facilmente com **GitHub Pages**, já que é composto apenas por arquivos estáticos.

## Autor

Desenvolvido por **Lucas Albuquerque**.
