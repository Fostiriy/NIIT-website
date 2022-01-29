import { startGame } from './modules/gameTableFunctions.js';

let rows;
let cols;
let score;
let time; // время в секундах
let mole;
let scorePlace = document.querySelector('.game-score');
let timerPlace = document.querySelector('.game-timer');
let timer;
let moveMoleInterval;
document.getElementById('start-game-button').addEventListener('click', onClickStartGame);
document.getElementById('repeat-game-button').addEventListener('click', onClickRepeatGame);

function onClickStartGame() {
    startGame(playGame, onClick);
}

function onClickRepeatGame() {
    document.querySelector('.game-table').remove();
    document.querySelector('.congratulation-block').style.display = 'none';
    document.getElementById('start-game-button').style.display = 'block';
    scorePlace.innerText = '';
    timerPlace.innerText = '';
    startGame(playGame, onClick);
}

// Обработка клика по клетке поля с кротом
function onClick() {
    if (this.classList.contains('mole'))
        score++;
    scorePlace.innerText = 'Очки: ' + score;
}

// Перемещение крота
function moveMole() {
    mole.classList.remove('mole');
    let row = getRandomInt(rows);
    let col = getRandomInt(cols);
    mole = document.getElementById('button-' + row.toString() + col.toString());
    mole.classList.add('mole');
}

// Случайное число
function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

// Изменение счётчика
function timeCounter() {
    time--;
    timerPlace.innerText = 'Время: ' + time;
    if (time == 0)
        endGame();
}

// Окончание игры (обнуление счётчика)
function endGame() {
    clearInterval(moveMoleInterval);
    clearInterval(timer);
    mole.classList.remove('mole');
    document.querySelector('.congratulation-block').style.display = 'block';
    document.querySelector('.input-block').style.display = 'flex';
}

// Генерация начала игры
function playGame() {
    time = 10;
    score = 0;
    rows = parseInt(document.getElementById('rows').value);
    cols = parseInt(document.getElementById('cols').value);
    mole = document.getElementById('button-00');
    scorePlace.innerText = 'Очки: ' + score;
    timerPlace.innerText = 'Время: ' + time;
    timer = setInterval(timeCounter, 1000);
    moveMoleInterval = setInterval(moveMole, 700);
}

