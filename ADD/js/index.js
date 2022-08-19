const rightbtn = document.querySelector('.right')
console.log(rightbtn)

const fistimg = document.querySelector('.first-recommand')
console.log(fistimg)

rightbtn.addEventListener('click', (e) => {
  if (rightbtn.value === 'right') {
    fistimg.style.display = 'none'
  } else {

  }

})

const timer = document.querySelector('.timer')
console.log(timer)

let time = 600;
let min = '';
let sec = '';

let clock = setInterval(() => {
  min = parseInt(time / 60);
  sec = time % 60;
  timer.textContent = min + '분'+ sec + '초'
  time--;

  if(time<0){
    clearInterval(clock);
    timer.textContent = '시간초과';
  }

}, 1000);



const first = document.querySelector('.choice').children[0]
console.log(first)
first.style.backgroundColor = '#fff';