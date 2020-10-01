const daysEl = document.querySelector('.days');
const hoursEl = document.querySelector('.hours');
const minutesEl = document.querySelector('.minutes');
const secondsEl = document.querySelector('.seconds');

const date = '1 Jan 2021';

function countown() {
  const newYearDate = new Date(date);
  const currentDate = new Date();

  const remainingDate = newYearDate - currentDate;
  const days = Math.floor(remainingDate / (1000 * 60 * 60 * 24));
  const hours = Math.floor((remainingDate % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  const minutes = Math.floor((remainingDate % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((remainingDate % (1000 * 60)) / 1000);

  daysEl.innerHTML = days;
  hoursEl.innerHTML = hours;
  minutesEl.innerHTML = minutes;
  secondsEl.innerHTML = seconds < 10 ? "0" + seconds : seconds;
}

setInterval(countown, 1000)

