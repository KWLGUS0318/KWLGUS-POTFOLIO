const logo = document.querySelector('#root header ul')
console.log(logo)
const slide = document.querySelector('.slide')

const box = document.querySelector('.box')
console.log(box)
console.log(box)


logo.addEventListener('click', () => {
  slide.style.display = 'block'
  slide.style.position = 'fixed'
  box.addEventListener('mouseover', () => {
    slide.style.display = 'none'
  })
})

//logo.addEventListener('mouseleave',()=>{
//  slide.style.display = 'none'
//})





const nav = document.querySelector('.nav');
const nextbtn = document.querySelector('.nextbtn');
const listItems = document.querySelectorAll('.list-items');
listItems[0].style.display= "block";

for (let i = 1; i < listItems.length; i++) {
  listItems[i].style.opacity = 0;
  listItems[i].style.display = "none";
}

let index = 1;

nextbtn.addEventListener('click', function () {
  if (index < listItems.length) {
    let opacityValue = 0;
    const fadeIn = setInterval(function () {
      opacityValue += 0.5
      listItems[index - 1].style.opacity = opacityValue;
      if (opacityValue > 1) {
        clearInterval(fadeIn);
      }
    }, 100);
    listItems[index].style.display = "list-item";


    if (listItems[index].previousElementSibling !== null) {
      listItems[index].previousElementSibling.style.display = "none";
    }
    index += 1;
    console.log(index)
  } else {
    listItems[index - 1].style.display = "none";
    listItems[0].style.display = "list-item";
    index = 1;
  }
});


