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
  if (eventHandle > 10) {
    eventHandle = 10;
  }
});



