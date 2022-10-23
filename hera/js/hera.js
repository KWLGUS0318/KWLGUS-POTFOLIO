
// 퍼스널 테스트
const personbtn = document.querySelector('.btn')

const person = document.querySelector('.personal-test')

personbtn.addEventListener('click', function(){
  if(person.classList.contains('on')){
} else{
  person.classList.add('on');
}}
);


const $slide = document.querySelector('#slide > ul');
const $liItems = document.querySelectorAll('#slide > ul > li');
const $slideHeightValue = $slide.children[0].clientHeight;


let index = 0;
let heightValue = $slideHeightValue;
setInterval(function() {
  slide();
}, 3000);

function slide() {
  if(index < $liItems2.length) {
    $slide.animate({
      top: - (heightValue2 * index) + "px"
    },
    {
      duration: 1000,
      fill:"forwards"
    })
    index += 1;
  } else {
    $slide.animate({
      top:"0px"
    },
    {
      duration: 1000,
      fill:"forwards"
    })
    index = 0;
  }
};


const $slide2 = document.querySelector('#slide2 > ul');
const $liItems2 = document.querySelectorAll('#slide2 > ul > li');
const $slideHeightValue2 = $slide2.children[0].clientHeight;


let index2 = 0;
let heightValue2 = $slideHeightValue2;
setInterval(function() {
  slide2();
}, 3000);


function slide2() {
  if(index2 < $liItems2.length) {
    $slide2.animate({
      top: - (heightValue2 * index2) + "px"
    },
    {
      duration: 1000,
      fill:"forwards"
    })
    index2 += 1;
  } else {
    $slide2.animate({
      top:"0px"
    },
    {
      duration: 1000,
      fill:"forwards"
    })
    index2 = 0;
  }
};