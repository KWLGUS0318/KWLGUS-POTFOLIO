const upperbox = document.querySelector('.upper-Box >ul').children[0]
console.log(upperbox)

upperbox.addEventListener('click', ()=>{
  const login = document.createElement('div')
  let sizevalue = '500px'
  login.style.width = sizevalue;
  login.style.height = sizevalue;
  login.style.position = 'absolute';
  login.style.top = '200px';
  login.style.left = '40%';
  login.style.border = '1px solid #000';
  login.style.position = 'fixed';
  login.style.opacity = '100%';
  login.style.background = '#fff';

  const root = document.getElementById('root')
  console.log(root);
  root.style.background = '#000';
  root.style.opacity = 0.5;
  document.body.appendChild(login);

const deletelog = document.createElement('div')
deletelog.style.width = '8vw'
deletelog.style.height = '100px'
deletelog.textContent = 'X'
deletelog.style.position = 'absolute'
deletelog.style.right = '0'

deletelog.style.fontSize = '2rem'
deletelog.style.textAlign = 'center'
deletelog.style.lineHeight = 3.2
deletelog.style.cursor = 'pointer'

login.appendChild(deletelog)




deletelog.addEventListener('click', function(){
  login.style.display = 'none'
  root.style.background = '#fff';
  root.style.opacity = 1;
})
})


const titlebox = document.createElement('h3')
titlebox.textContent = '로그인'

