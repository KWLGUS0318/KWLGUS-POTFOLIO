const signUp = document.querySelector('.sign-up')
const login = document.querySelector('.login')
const loginBox = document.querySelector('.login-box')
const container = document.querySelector('.container')
signUp.addEventListener('click', function(){
  login.style.visibility= 'hidden';
  loginBox.style.display = 'none'
})


