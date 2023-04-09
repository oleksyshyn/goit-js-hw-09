const startBtn = document.querySelector('button[data-start]');
const stopBtn = document.querySelector('button[data-stop]');

let timerId = null;
stopBtn.disabled = true;

startBtn.addEventListener('click', onChangeColor);
stopBtn.addEventListener('click', onStopChangeColor)

function onChangeColor() {
    startBtn.disabled = true;
    stopBtn.disabled = false;
    timerId = setInterval(() => {
        const bodyEl = document.querySelector('body');
        bodyEl.style.backgroundColor = getRandomHexColor();
    }, 1000);
}

function onStopChangeColor() {
    startBtn.disabled = false;
    stopBtn.disabled = true;
    clearInterval(timerId);
}

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
}