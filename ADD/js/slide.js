let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1
  }
  slides[slideIndex - 1].style.display = "block";
  setTimeout(showSlides, 2000);
}

const righbtbtn = document.querySelector('.right')
const leftbtn = document.querySelector('.left')
const number = document.querySelector('.number')

console.log(righbtbtn, leftbtn, number)
let a = 1
number.innerHTML = a


righbtbtn.addEventListener('click', function () {
  if (a <= 6) {
    number.innerHTML = a++;
    console.log(a)
  } else {
    a = 6
  }
})

leftbtn.addEventListener('click', function () {
  if (a >= 1) {
    number.innerHTML = a--;
    console.log(a)
  } else {
    a = 1
  }
})


const price = document.querySelectorAll('.price div:nth-child(1)')
console.log(price)
let won = '원'
let chicken = '8,700';
let noodle = '9,900';
let pork = '10,900';
let bread = '5,525';

price[0].textContent = chicken + won
price[1].textContent = noodle + won
price[2].textContent = pork + won
price[3].textContent = bread + won

price.length.toLocaleString();

const plus = document.querySelectorAll('.plus')
const minus = document.querySelectorAll('.minus')


const result = document.querySelectorAll('._plus')
console.log(result.length)

let b = 1;
result[0].textContent = b;
result[1].textContent = b;
result[2].textContent = b;
result[3].textContent = b;



function plusMachine(item,item2){
  item.addEventListener('click',function(){
    if(b<=10){
      item2.textContent = b++
    }
    else{b=10}
  })
    
  }

  plusMachine(plus[0],result[0])
  plusMachine(plus[1],result[1])
  plusMachine(plus[2],result[2])
  plusMachine(plus[3],result[3])

  function minusMachine(item,item2){
    item.addEventListener('click',function(){
      if(b>=1){
        item2.textContent = b--;
      }
      else{b=1};
    })
      
    }


  minusMachine(minus[0],result[0])
  minusMachine(minus[1],result[1])
  minusMachine(minus[2],result[2])
  minusMachine(minus[3],result[3])