const leftdoor = document.querySelector('.left_section');
const enter = document.querySelector('.enter');



const rightdoor = document.querySelector('.right_section');
const about = document.querySelector('.about');


enter.addEventListener('click', () => {

  const close = document.querySelector('.Close');


  if( enter.value === 'Open'){
  leftdoor.style.transform = 'rotateY(10deg)';
  leftdoor.style.transformOrigin = '500px';
  rightdoor.style.transform='rotateY(-7.5deg)';
  about.style.display = 'block';

  enter.value = 'Close';
  enter.textContent = 'Close';
  document.body.style.backgroundColor = '#000'

}

else{
  leftdoor.style.transform = 'none';
  leftdoor.style.transformOrigin = 'none';
  rightdoor.style.transform='none';
  about.style.display = 'none';

  enter.textContent = 'Open';
  enter.value = 'Open';

  }

});
  

const designSection = document.querySelector('.design_open')
console.log(designSection)

const designTop = document.querySelector('.top')
console.log(designTop)

const designBottom = document.querySelector('.bottom')
console.log(designBottom)


designSection.addEventListener('click', function(){
  designTop.style.top = -9000+ 'px';
  designTop.style.transitionDuration = '8s'
  designBottom.style.bottom = -250 + 'vw'
  designBottom.style.transitionDuration = '5s'
 
  

  const OpenDuration = setTimeout(() => {
    location.href = 'design.html'
  }, 1000);
})

