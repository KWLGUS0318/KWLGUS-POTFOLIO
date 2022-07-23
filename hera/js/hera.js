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


