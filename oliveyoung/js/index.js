
const brand = document.querySelector('.part').children

console.log(brand)


brand[0].classList = 'brand'

const brandlist = document.querySelector('.brand')



let widthValue = '100%'

for(let a =0; a<2; a++){
  const brandBox = document.createElement('div')
  brandBox.style.width = widthValue;
  brandBox.style.height = '50%'
  brandBox.style.display = 'flex' ;

  let center = 'center';
  brandBox.style.alignItems = center;
  brandBox.style.justifyContent = center;

 brandlist.appendChild(brandBox)
}

let widthValue2 = '25%'
let heightValue = '55%'

for(let a =0; a<4; a++){
  const branditem = document.createElement('div')
  branditem.style.width = widthValue2
  branditem.style.height = heightValue
  branditem.style.borderRadius = '60px';
  branditem.style.margin = '0px 5px 0px 4px';
 

  const box = document.querySelectorAll('.brand>div')

  box[0].appendChild(branditem)
  branditem.classList = 'brandname'
}




let brandname = document.querySelectorAll('.brandname')
brandname[0].textContent = '클리오'
brandname[1].textContent = '달바'
brandname[2].textContent = '아벤느'
brandname[3].textContent = '스킨푸드'
for(let a =0; a<4; a++){
  const branditem = document.createElement('div')
  branditem.style.width = widthValue2
  branditem.style.height = heightValue
  branditem.style.borderRadius = '60px';
  branditem.style.margin = '0px 5px 0px 4px';

  const box2 = document.querySelector('.brand').children[1]

  box2.appendChild(branditem)
  branditem.classList = 'brandname2'
}

let brandname2 = document.querySelectorAll('.brandname2')
brandname2[0].textContent = '유리아쥬'
brandname2[1].textContent = '마녀공장'
brandname2[2].textContent = '닥터지'
brandname2[3].textContent = '비플레인'

const more = document.querySelector('.more')
more.style.position = 'absolute'
more.style.right = '40px'
more.style.top = '490px'



brandlist.style.height= '17%'


const routine = document.querySelector('.routine')
routine.style.height = '30%'


const notice = document.querySelector('.notice-area')
console.log(notice)

notice.style.height = "10%";
notice.style.marginTop = '100px'



const lalo = document.querySelector('.lalo > img')
console.log(lalo)

lalo.style.width = '116%'
lalo.style.height = '407px'