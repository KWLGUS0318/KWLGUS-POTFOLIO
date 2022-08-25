const liSection = document.querySelectorAll('header > ul >li')
console.log(liSection)

let percent = '%'
let widthValue = 15
liSection[0].style.width= widthValue + percent
liSection[1].style.width= 100 + percent

liSection[2].style.width= 10 + percent
liSection[3].style.width= 10 + percent