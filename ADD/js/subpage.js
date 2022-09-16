const root = document.getElementById("root");
const main = document.getElementById("main");

const menuContainer = document.querySelector('#root > header > ul'); 


menuContainer.addEventListener('click', function (event) {
  let getHashValue = event.target.dataset.hash;
  for(let i = 0; i < main.children.length; i++) {
    if(getHashValue === main.children[i].dataset.hash) {
      main.children[i].style.display = "block";
    } else {
      main.children[i].style.display = "none";
    }
  }
});
