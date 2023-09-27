import Notiflix from 'notiflix';

const options = {
  position: 'center-bottom',
  distans: '15px',
  cssAnimationStile: 'from-right',
};

const form = document.querySelector('.form');
let delay;
let amount;
let step;

form.addEventListener('submit', e => {
  e.preventDefault();

  delay = Number(e.currentTarget.elements.delay.value);
  step = Number(e.currentTarget.elements.step.value);
  amount = Number(e.currentTarget.elements.amount.value);

  for (let i = 1; i <= amount; i += 1) {
    delay += step;

    createPromise(i, delay)
      .then(({ position, delay }) => {
        Notiflix.Notify.success(`${position} - ${delay}`, options);
        console.log(`OK - ${position} - ${delay}`);
      })
      .catch(({ position, delay }) => {
        Notiflix.Notify.warning(`${position} - ${delay}`, options);
        console.log(`ERROR - ${position} - ${delay}`);
      });
  }
  e.currentTarget.reset();
});

function createPromise(position, delay) {
  return new Promise((resolve, reject) => {
    const shouldResolve = Math.random() > 0.3;
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    }, delay);
  });
}
