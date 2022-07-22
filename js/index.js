const section2 = document.querySelector('.section_2')
console.log(section2)


  for(let i=0; i<4;i++){
  const row = document.createElement('div')
  row.style.display ='flex'
  section2.appendChild(row)  
  
  row.style.height ='25%'
  row.style.display = 'flex'

  for(let i=0; i<3; i++){
    const photo = document.createElement('img')
    row.appendChild(photo)
    let boxwidth = 33.3
    photo.style.width = boxwidth + '%'


  }
}

const imgs = document.querySelectorAll('img')
console.log(imgs)

imgs[2].src = './img/이미지1.png'
imgs[3].src = './img/이미지2.png'
imgs[4].src = './img/이미지3.png'
imgs[5].src = './img/이미지4.png'
imgs[6].src = './img/이미지5.png'
imgs[7].src = './img/이미지6.png'
imgs[8].src = './img/이미지7.png'
imgs[9].src = './img/이미지8.png'
imgs[10].src = './img/이미지9.png'
imgs[11].src = './img/이미지11.png'
imgs[12].src = './img/이미지10.png'
imgs[13].src = './img/이미지12.png'



const enterbtn = document.querySelector('.enter')
console.log(enterbtn)

enterbtn.addEventListener('click',()=>{
  location.href = './html/home.html'
})