# Jokenpo | Rock, Paper, Scissors

![GitHub repo size](https://img.shields.io/github/repo-size/lucasalbuquerque09/simple-jokenp--project)
![GitHub last commit](https://img.shields.io/github/last-commit/lucasalbuquerque09/simple-jokenp--project)
![License](https://img.shields.io/badge/license-MIT-green)

A web-based Rock, Paper, Scissors game built with HTML, CSS, and JavaScript.
This project was created to practice game logic, DOM manipulation, and GitHub Pages deployment.

## Live Demo

- Production: https://lucasalbuquerque09.github.io/simple-jokenp--project/

## Highlights

- Full navigation flow between landing page and game screen
- Random CPU move generation each round
- Dynamic score tracking for player and CPU
- Reset button to restart the match
- Structure ready for GitHub Pages
- Route fallback with [404.html](404.html) to reduce broken-route errors

## Stack

- HTML5
- CSS3
- JavaScript (vanilla)
- Bootstrap Icons
- Google Fonts

## Project Structure

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

## Run Locally

```bash
git clone https://github.com/lucasalbuquerque09/simple-jokenp--project.git
cd simple-jokenp--project
```

Open [index.html](index.html) in your browser.
Optionally, run it with Live Server in VS Code.

## Game Rules

- Rock beats Scissors
- Paper beats Rock
- Scissors beats Paper

## Future Improvements

- Better win/loss visual feedback per round
- Match history of recent moves
- Best-of-3 and best-of-5 modes

## Author

Developed by [Lucas Albuquerque](https://github.com/lucasalbuquerque09)
