const leftdoor = document.querySelector('.left_section');
const enter = document.querySelector('.enter');



const rightdoor = document.querySelector('.right_section');
const about = document.querySelector('.about');


enter.addEventListener('click', () => {

  const close = document.querySelector('.Close');


  if( enter.value === 'Open'){
  leftdoor.style.transform = 'rotateY(10deg)';
  leftdoor.style.transformOrigin = '500px';
  rightdoor.style.transform='rotateY(-5deg)';
  about.style.display = 'block';

  enter.value = 'Close';
  enter.textContent = 'Close';

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
  



