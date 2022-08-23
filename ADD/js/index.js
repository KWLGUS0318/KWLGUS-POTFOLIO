const rightbtn = document.querySelector('.right')
console.log(rightbtn)

const fistimg = document.querySelector('.first-recommand')
console.log(fistimg)

const secimg = document.querySelector('.sec-recommand')
console.log(secimg)

rightbtn.addEventListener('click', function(){
  let isStatus = true;
  if(isStatus === true){
    fistimg.style.display= 'none'
    secimg.style.display = 'block'
  }
  else{}
})

const timer = document.querySelector('.timer')

let time = 600;
let min = '';
let sec = '';

let clock = setInterval(() => {
  min = parseInt(time / 60);
  sec = time % 60;
  timer.textContent = min + '분' + sec + '초'
  time--;

  if (time < 0) {
    clearInterval(clock);
    timer.textContent = '시간초과';
  }

}, 1000);



const first = document.querySelector('.choice').children[0]
first.style.backgroundColor = '#fff';
first.style.color = '#000';