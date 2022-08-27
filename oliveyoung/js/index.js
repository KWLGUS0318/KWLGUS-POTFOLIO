
const brand = document.querySelector('.part').children

console.log(brand)


brand[0].classList = 'brand'

const brandlist = document.querySelector('.brand')
console.log(brandlist)

for(let a =0; a<2; a++){
  const brandBox = document.createElement('div')
  brandBox.style.width = '100%'
  brandBox.style.height = '50%'
  brandBox.style.display = 'flex' ;

  let center = 'center';
  brandBox.style.alignItems = center;
  brandBox.style.justifyContent = center;

 brandlist.appendChild(brandBox)
}


for(let a =0; a<4; a++){
  const branditem = document.createElement('div')
  branditem.style.width = '25%'
  branditem.style.height = '75%';
  branditem.style.borderRadius = '60px';
  branditem.style.margin = '0px 5px 0px 4px';
 

  const box = document.querySelectorAll('.brand>div')

  box[0].appendChild(branditem)
}




for(let a =0; a<4; a++){
  const branditem = document.createElement('div')
  branditem.style.width = '25%'
  branditem.style.height = '75%';
  branditem.style.borderRadius = '60px';
  branditem.style.margin = '0px 5px 0px 4px';

  const box2 = document.querySelector('.brand').children[1]

  box2.appendChild(branditem)
}
