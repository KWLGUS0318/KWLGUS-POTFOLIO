const root = document.getElementById("root")
console.log(root)
const brightbtn = document.querySelector('.brightbtn')
console.log(brightbtn)

const sectiondiv = document.querySelectorAll('.section>div')
console.log(sectiondiv)



brightbtn.addEventListener("click", function(){
  if(brightbtn.className === 'brightbtn')
  {root.style.backgroundColor = "#F5DFBB"

  brightbtn.className = "darkbtn"

}
  else{
    root.style.backgroundColor = "#000"
  
  
    brightbtn.className = "brightbtn"
  }
})