// window event call
window.addEventListener('load', function () {

  const titleText = this.document.querySelector('#container > section > h1');
  const titleTextBox = this.document.querySelector('#container > section > div');
  const backgroundImage = this.document.querySelector('#container > section');

  const titleTextArr = ["이거 보이시나요?", "흐릿한 색감", "참 나에게 맞추기 어렵죠...", "그래서...!","저희가 각자에 맞는 색을 추천해드립니다!", "그럼 긴말없이 시작하겠습니다."];



  backgroundImage.style.filter = 'blur(1px)';

  let textIndex = 0;
  let time = 1000;
  let opacityValue = 0;
  let blurValue = 1;
  const textTimer = this.setInterval(function () {
    const intro = this.setTimeout(function () {
      if (blurValue > 0) {
        backgroundImage.style.filter = `blur(${blurValue}px)`;
        blurValue -= 0.5;
      } else {
        backgroundImage.style.filter = `blur(0px)`;
        clearTimeout(intro);
      }
    }, 10);
    if (textIndex < titleTextArr.length) {
      titleText.textContent = titleTextArr[textIndex];


      const opacityTimer = setInterval(() => {
        if (opacityValue < 1) {
          titleText.style.opacity = opacityValue;
          opacityValue += 0.1;
        } else {
          clearInterval(opacityTimer);
          opacityValue = 0;
          textIndex += 1;
        }
      }, 16);
    } else {
      return textIndex = 0;
    }
  }, 2000);


  titleTextBox.animate([
    {
      width: "50vw",
      opacity: "0.5"
    },
    {
      width: "70vw",
      opacity: "1"
    },
    {
      width: "50vw",
      opacity: "0.5"
    }
  ],
    {
      duration: titleTextArr.length * time,
      iterations: Infinity
    });




});