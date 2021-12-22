function createTable(place, rows, cols, onClick) {
    let table = document.createElement('table');
    table.classList.add('game-table');

    for (let i = 0; i < rows; i++) {
        let tr = document.createElement('tr');
        tr.classList.add('game-table-row');

        for (let j = 0; j < cols; j++) {
            let td = document.createElement('td');
            let button = document.createElement('button');
            td.classList.add('game-table-cell');
            button.classList.add('cell-button');
            button.id = 'button-' + i.toString() + j.toString();
            button.addEventListener('click', onClick);

            td.append(button);
            tr.append(td);
        }

        table.append(tr);
    }

    place.append(table);
}

export function addTable(onClick) {
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);
    let inputs = document.querySelectorAll('.input-area');
    inputs.forEach(element => element.setAttribute('disabled', 'disabled'));
    let place = document.querySelector('.game-table-wrapper');
    document.querySelector('.error').style.display = 'none';
    createTable(place, rows, cols, onClick);
}

export function startGame(playGame, onClick) {
    let rows = parseInt(document.getElementById('rows').value);
    let cols = parseInt(document.getElementById('cols').value);
    if (rows > 0 && rows < 10 && cols > 0 && cols < 10) {
        document.getElementById('start-game-button').style.display = 'none';
        addTable(onClick, rows, cols);
        playGame();
    } else
        document.querySelector('.error').style.display = 'flex';
}