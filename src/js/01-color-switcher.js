const body = document.querySelector('body');
const btnStart = body.querySelector('button[data-start]');
const btnStop = body.querySelector('button[data-stop]');
let timerId = null;

btnStart.addEventListener('click', e => {
  btnStart.disabled = true;
  btnStop.disabled = false;
  timerId = setInterval(() => {
    body.style.backgroundColor = getRandomHexColor();
  }, 1000);
});

btnStop.addEventListener('click', () => {
  btnStop.disabled = true;
  btnStart.disabled = false;
  clearInterval(timerId);
});

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}
