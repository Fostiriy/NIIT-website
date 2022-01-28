import {startGame} from '/src/js/gameTableMethods.js';

let rows;
let cols;
let score = 0;
let time = 30;
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
    time = 30;
    score = 0;
    document.querySelector('.game-table').remove();
    document.querySelector('.congratulation-block').style.display = 'none';
    document.getElementById('start-game-button').style.display = 'block';
    scorePlace.innerText = '';
    timerPlace.innerText = '';
    startGame(playGame, onClick);
}

function onClick() {
    if (this.classList.contains('mole'))
        score++;
    scorePlace.innerText = 'Очки: ' + score;
}

function moveMole() {
    mole.classList.remove('mole');
    let row = getRandomInt(rows);
    let col = getRandomInt(cols);
    mole = document.getElementById('button-' + row.toString() + col.toString());
    mole.classList.add('mole');
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function timeCounter() {
    timerPlace.innerText = 'Время: ' + time;
    time--;
}

function timeoutCounter() {
    clearInterval(moveMoleInterval);
    clearInterval(timer);
    mole.classList.remove('mole');
    document.querySelector('.congratulation-block').style.display = 'block';
    document.querySelector('.input-block').style.display = 'flex';
}

function playGame() {
    rows = parseInt(document.getElementById('rows').value);
    cols = parseInt(document.getElementById('cols').value);
    mole = document.getElementById('button-00');
    scorePlace.innerText = 'Очки: ' + score;
    timerPlace.innerText = 'Время: ' + time;
    timer = setInterval(timeCounter, 1000);
    moveMoleInterval = setInterval(moveMole, 700);
    setTimeout(timeoutCounter, 32000);
}

