# Jokenpo | Pedra, Papel e Tesoura

English version: [README.en.md](README.en.md)

![GitHub repo size](https://img.shields.io/github/repo-size/lucasalbuquerque09/simple-jokenp--project)
![GitHub last commit](https://img.shields.io/github/last-commit/lucasalbuquerque09/simple-jokenp--project)
![License](https://img.shields.io/badge/license-MIT-green)

Jogo web de Jokenpo desenvolvido com HTML, CSS e JavaScript.
O projeto foi construído para praticar logica de jogo, manipulacao de DOM e publicacao com GitHub Pages.

## Deploy

- Producao: https://lucasalbuquerque09.github.io/simple-jokenp--project/

## Destaques

- Fluxo completo de navegacao entre pagina inicial e tela de jogo
- CPU com jogada aleatoria por rodada
- Placar dinamico para jogador e CPU
- Botao de reset da partida
- Estrutura preparada para GitHub Pages
- Fallback com [404.html](404.html) para reduzir erros de rota

## Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap Icons
- Google Fonts

## Estrutura

```text
.
├── 404.html
├── index.html
└── src/
    ├── css/
    │   ├── game.css
    │   └── style.css
    ├── js/
    │   └── script.js
    └── paginas/
        └── game.html
```

## Como rodar localmente

```bash
git clone https://github.com/lucasalbuquerque09/simple-jokenp--project.git
cd simple-jokenp--project
```

Abra o [index.html](index.html) no navegador.
Opcionalmente, execute com Live Server no VS Code.

## Regras do jogo

- Rock vence Scissors
- Paper vence Rock
- Scissors vence Paper

## Melhorias futuras

- Melhor feedback visual de vitoria/derrota por rodada
- Historico das ultimas jogadas
- Modo melhor de 3 e melhor de 5

## Autor

Desenvolvido por [Lucas Albuquerque](https://github.com/lucasalbuquerque09)
