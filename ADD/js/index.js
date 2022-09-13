const rightbtn = document.querySelector('.right')

const fistimg = document.querySelector('.first-recommand')

const secimg = document.querySelector('.sec-recommand')


const timer = document.querySelector('.timer')

let time = 600;
let min = '';
let sec = '';

let clock = setInterval(() => {
  min = parseInt(time / 60);
  sec = time % 60;
  timer.textContent = 'AM' + min + ':' + sec
  time--;

  if (time < 0) {
    clearInterval(clock);
    timer.textContent = '시간초과';
  }

}, 1000);



const first = document.querySelector('.choice').children[0]
first.style.backgroundColor = '#fff';
first.style.color = '#000';
first.style.cursor = 'auto';


