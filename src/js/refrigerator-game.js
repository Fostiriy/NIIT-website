import {startGame} from '/src/js/gameTableMethods.js';

let rows;
let cols;
let steps = 0;
let score = 0;
let stepsPlace = document.querySelector('.game-score');
document.getElementById('start-game-button').addEventListener('click', onClickStartGame);
document.getElementById('repeat-game-button').addEventListener('click', onClickRepeatGame);

function onClickStartGame() {
    startGame(playGame, onClick);
}

function onClickRepeatGame() {
    steps = 0;
    score = 0;
    document.querySelector('.game-table').remove();
    document.querySelector('.congratulation-block').style.display = 'none';
    document.getElementById('start-game-button').style.display = 'block';
    stepsPlace.innerText = '';
    startGame(playGame, onClick);
}

function onClick() {
    steps++;
    stepsPlace.innerText = 'Ходы: ' + steps;
    let id = this.id.slice(7);
    let row = id.slice(0, 1);
    let col = id.slice(1, 2);
    recolorTable(row, col);
}

function playGame() {
    rows = parseInt(document.getElementById('rows').value);
    cols = parseInt(document.getElementById('cols').value);
    stepsPlace.innerText = 'Ходы: ' + steps;
}

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
    if (score == rows * cols) {
        document.querySelector('.congratulation-block').style.display = 'block';
        let inputs = document.querySelectorAll('.input-area');
        inputs.forEach(element => element.removeAttribute('disabled'));
    }
}

function changeStation(button) {
    if (button.classList.contains('active')) {
        button.classList.remove('active');
        score--;
    } else {
        button.classList.add('active');
        score++;
    }
}