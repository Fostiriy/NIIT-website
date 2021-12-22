const startButton = document.querySelector('.start-button');
const timerWrapper = document.querySelector('.timer-wrapper');
const timerPlace = document.querySelector('.timer');
const millisecondsPlace = document.querySelector('.milliseconds');
const delay = 47;
const delaySecond = 1000;
let minutes, seconds, milliseconds;

startButton.addEventListener('click', function () {
    timerWrapper.classList.remove('null-point');
    startButton.classList.add('inactive');

    minutes = 0;
    seconds = 5;
    milliseconds = 1000;

    const promise = new Promise((resolve, reject) => {
        updateMinutesSeconds();
        const intervalMinSec = setInterval(() => {
            seconds -= 1;
            milliseconds = 1000;
            if (seconds > 0)
                updateMinutesSeconds();
            if (seconds == 1 && minutes != 0) {
                minutes -= 1;
                seconds = 59;
                updateMinutesSeconds();
            }
        }, delaySecond);
        const intervalMilliseconds = setInterval(() => {
            updateMilliseconds();
            milliseconds -= delay;
            if (milliseconds <= 0) {
                milliseconds = 1000;
            }
            if (seconds == 0) {
                if (minutes == 0) {
                    seconds = 0;
                    milliseconds = 0;
                    updateMilliseconds();
                    clearInterval(intervalMinSec);
                    clearInterval(intervalMilliseconds);
                    resolve('Ok');
                }
            }
        }, delay);
    });

    promise.then(function () {
        timerWrapper.classList.add('null-point');
        startButton.classList.remove('inactive');
    });
});

function updateMinutesSeconds() {
    timerPlace.innerText = `${('00' + minutes).slice(-2)}:${('00' + (seconds - 1)).slice(-2)}`;
}

function updateMilliseconds() {
    millisecondsPlace.innerText = `.${('000' + milliseconds).slice(-3)}`;
}
