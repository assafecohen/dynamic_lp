import { countDownDate } from '../config.js';
export function updateTimer() {
  const timer = new Date(countDownDate).getTime();

  let x = setInterval(function() {
    let now = new Date().getTime();

    let distance = timer - now;

    let days = Math.floor(distance / (1000 * 60 * 60 * 24));
    let hours = Math.floor(
      (distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
    );
    let minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    let seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById('timer').innerHTML =
      days + 'd ' + hours + 'h ' + minutes + 'm ' + seconds + 's ';

    if (distance < 0) {
      clearInterval(x);
      document.getElementById('timer').innerHTML = 'EXPIRED';
    }
  }, 1000);
}
