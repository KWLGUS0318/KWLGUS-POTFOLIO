const logo = document.querySelector('#root header ul')
console.log(logo)
const slide = document.querySelector('.slide')

const container = document.querySelector('.container')
console.log(container)
console.log(slide)


logo.addEventListener('click',()=>{
    slide.style.display = 'block'
    slide.style.position = 'fixed'
    container.addEventListener('mouseover',()=>{
      slide.style.display = 'none'
    })
})

//logo.addEventListener('mouseleave',()=>{
//  slide.style.display = 'none'
//})


function Sectional (a){
  let swiper = new Swiper('.section'+ a+'secion-container',{
    pagination:{
      el: 'section' + a + 'section-container', clickable : true
    }
  })
}

sectional(1)