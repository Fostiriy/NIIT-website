import { startGame } from './modules/gameTableFunctions.js';

let rows;
let cols;
let steps = 0;
let score = 0;
let stepsPlace = document.querySelector('.game-score');
document.getElementById('start-game-button').addEventListener('click', onClickStartGame);
document.getElementById('repeat-game-button').addEventListener('click', onClickRepeatGame);
document.getElementById('restart-game-button').addEventListener('click', onClickRepeatGame);

function onClickStartGame() {
    document.getElementById('restart-game-button').style.display = 'block';
    startGame(playGame, onClick);
}

function onClickRepeatGame() {
    steps = 0;
    score = 0;
    document.querySelector('.game-table').remove();
    document.querySelector('.congratulation-block').style.display = 'none';
    document.getElementById('restart-game-button').style.display = 'none';
    document.getElementById('start-game-button').style.display = 'block';
    stepsPlace.innerText = '';
    document.getElementById('restart-game-button').style.display = 'block';
    startGame(playGame, onClick);
}

// Обработка клика по клетке поля
function onClick() {
    steps++;
    stepsPlace.innerText = 'Ходы: ' + steps;
    let id = this.id.slice(7);
    let row = id.slice(0, 1);
    let col = id.slice(1, 2);
    recolorTable(row, col);
}

// Генерация начала игры
function playGame() {
    rows = parseInt(document.getElementById('rows').value);
    cols = parseInt(document.getElementById('cols').value);
    stepsPlace.innerText = 'Ходы: ' + steps;
}

// Перекраска поля и условие окончания игры
function recolorTable(row, col) {
    let button = document.getElementById('button-' + row.toString() + col.toString());
    changeStation(button);
    for (let i = 0; i < rows; i++) {
        button = document.getElementById('button-' + i.toString() + col.toString());
        changeStation(button);
    }
    for (let i = 0; i < cols; i++) {
        button = document.getElementById('button-' + row.toString() + i.toString());
        changeStation(button);
    }
    // условие конца игры
    if (score == rows * cols) {
        document.getElementById('restart-game-button').style.display = 'none';
        document.querySelector('.input-block').style.display = 'flex';
        document.querySelector('.congratulation-block').style.display = 'block';
    }
}

// Перекраска клеток по нажатии на клетку поля
function changeStation(button) {
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        score--;
    } else {
        button.classList.add('active');
        score++;
    }
}