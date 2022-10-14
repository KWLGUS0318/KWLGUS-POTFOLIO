const root = document.getElementById("root");
const windowWidth = window.innerWidth;

let eventHandle = 0;
window.addEventListener("wheel", (event) => {
  if (event.deltaY > 0) {
    eventHandle++;
    window.scrollTo({
      left: windowWidth * eventHandle,
      behavior: "smooth"
    });
  } else {
    eventHandle--;
    window.scrollTo({
      left: windowWidth * eventHandle,
      behavior: "smooth"
    });
  }
  if (eventHandle < 0) {
    eventHandle = 0;
  }
  if (eventHandle > 3) {
    eventHandle = 3;
  }
});



const list = document.querySelectorAll('.list div span')
console.log(list)

function pagechage (a,place){
  a.addEventListener('click',function(){
    location.href = place
  })
}
pagechage(list[0],'#la')
pagechage(list[1],'#barboa')
pagechage(list[2],'#newyork')