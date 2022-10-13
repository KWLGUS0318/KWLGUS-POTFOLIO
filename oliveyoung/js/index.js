const brandsection = document.querySelectorAll('.brand-zone div')
console.log(brandsection)

let widthValue = '100%'



let widthValue2 = '15%'
let heightValue = '35%'

for (let a = 0; a < 6; a++) {
  const branditem = document.createElement('div')
  branditem.style.width = widthValue2;
  branditem.style.height = heightValue;
  branditem.style.borderRadius = '60px';
  branditem.style.display = 'flex'
  branditem.style.alignItems = 'center';
  branditem.style.justifyContent = 'center';
  branditem.style.border = '1px solid black';
  branditem.style.backgroundColor = '#fff';
  brandsection[0].appendChild(branditem);
  brandsection[0].classList = 'brand_name-1';
}

for (let a = 0; a < 6; a++) {
  const branditem = document.createElement('div')
  branditem.style.width = widthValue2
  branditem.style.height = heightValue
  branditem.style.borderRadius = '60px';
  branditem.style.display = 'flex'
  branditem.style.alignItems = "center"
  branditem.style.justifyContent = 'center'
  branditem.style.border = '1px solid black'
  branditem.style.backgroundColor = '#fff';
  brandsection[1].appendChild(branditem)
  brandsection[1].classList = 'brand_name-2'
}

const brandName1 = document.querySelectorAll('.brand_name-1 div')
console.log(brandName1)
brandName1[0].textContent = 'Club CLIO'
brandName1[1].textContent = "d'Alba"
brandName1[2].textContent = 'Avene'
brandName1[3].textContent = 'SKINFOOD'
brandName1[4].textContent = 'HERA'
brandName1[4].style.backgroundColor = '#000';
brandName1[4].style.color = '#fff';
brandName1[4].style.cursor= 'pointer';
brandName1[4].addEventListener('click',function(){
  location.href = '../hera/index.html'
})

brandName1[5].textContent = 'Lush'




//function brand(item,color,backgroundcolor,color2,backgroundcolor2){
//item.addEventListener('mouseover',function(){
//  item.style.backgroundColor = backgroundcolor;
//  item.style.color = color;
//})
//
//
//item.addEventListener('mouseout',function(){
//  item.style.backgroundColor = backgroundcolor2;
//  item.style.color = color2;
//})
//}
//
//brand(brandName1[0],colorsort[white],colorsort[black],colorsort[black],colorsort[white])
//
//
//let colorsort = [
//  black = '#000', 
//  white = '#fff', 
//  dalba = '#DB8321',
//  abene ='E98371', 
//  yuriazu= '#0CA8DD', 
//  manyeo= '#B50217'
//]


const brandName2 = document.querySelectorAll('.brand_name-2 div')
brandName2[0].textContent = 'URIAGE'
brandName2[1].textContent = 'MANYO'
brandName2[2].textContent = 'DR-G'
brandName2[3].textContent = 'Beplain'
brandName2[4].textContent = 'peripera'
brandName2[5].textContent = 'LANEIGE'








//const routine = document.querySelector('.routine')
//routine.style.height = '30%'
//
//
//const notice = document.querySelector('.notice-area')
//console.log(notice)
//
//notice.style.height = "10%";
//notice.style.marginTop = '100px'
//
//
//
//
//const oliyskin = document.querySelector('.oily-skin')
//const oily = document.querySelector('.oily')
//
//const dryskin = document.querySelector('.dry-skin')
//const dry = document.querySelector('.dry')
//
//
//const sensitiveskin = document.querySelector('.sensitive-skin')
//const sensitive = document.querySelector('.sensitive')
//
//
//const complexeskin = document.querySelector('.complex-skin')
//const complex = document.querySelector('.complex')
//
//let skintype = function (type, skin1, skin2, skin3, skin4) {
//  type.addEventListener('click', () => {
//    skin1.style.zIndex = 4;
//    skin2.style.zIndex = 3;
//    skin3.style.zIndex = 2;
//    skin4.style.zIndex = 1;
//  })
//}
//
//skintype(oliyskin, oily, sensitive, dry, complex);
//skintype(dryskin, dry, sensitive, oily, complex);
//skintype(complexeskin, complex, sensitive, dry, oily);
//skintype(sensitiveskin, sensitive, oily, dry, complex);