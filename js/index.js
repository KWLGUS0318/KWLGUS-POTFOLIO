const section2 = document.querySelector('.section_2')
console.log(section2)


  for(let i=0; i<4;i++){
  const row = document.createElement('div')
  row.style.display ='flex'
  section2.appendChild(row)  
  row.style.height ='25%'
  row.style.border = '1px solid black'
  row.style.display = 'flex'

  for(let i=0; i<4; i++){
    const photo = document.createElement('img')
    row.appendChild(photo)
    let boxwidth = 25
    photo.style.width = boxwidth + '%'
    photo.style.border = '1px solid black'


  }
}

