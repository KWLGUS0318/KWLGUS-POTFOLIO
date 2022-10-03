const flower = document.querySelector('#flower')
console.log(flower)
const root = document.querySelector('#root')

flower.addEventListener('click', function () {
  window.scrollTo({
    top: 0,
    behavior: 'smooth'
  })
})

const web = document.querySelector('.web')
const logo = document.querySelector('.logo')
const illust = document.querySelector('.illust')

console.log(web,logo,illust.classList)

const list = document.querySelector('.list')

function classes (a,b,c){
  a.classList.add('off')
  b.classList.add('off')
  c.classList.add('off')
}
classes(web,logo,illust);


function classadd (a,b,c){
  a.classList.remove('off')
  a.classList.add('on')
  b.classList.remove('off')
  b.classList.add('on')
  c.classList.remove('off')
  c.classList.add('on')
}

list.addEventListener('mousedown',()=>{
  if(list.value === 'list'){
    classes(web,logo,illust)
    list.value = 'none'
  }
  else{
    classadd(web,logo,illust)
    list.value = 'list'
  }
})


web.addEventListener('click',()=>{
  location.href = '#web'
})


logo.addEventListener('click',()=>{
  location.href = '#logo'
})


illust.addEventListener('click',()=>{
  location.href = '#illust'
})