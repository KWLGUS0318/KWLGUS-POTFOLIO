
// 퍼스널 테스트
const personbtn = document.querySelector('.btn')
console.dir(personbtn)

const person = document.querySelector('.personal-test')
console.dir(person)

personbtn.addEventListener('click', function(){
  if(person.classList.contains('on')){
} else{
  person.classList.add('on');
}}
);


