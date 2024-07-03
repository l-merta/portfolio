const main = document.querySelector("main");
const colorChangerCont = main.querySelector(".colorChangerCont");
const mainAnchorLink = main.querySelector(".continue");

writeTextEffect(main.querySelector("h1"), false);
writeTextEffect(main.querySelector("h2"), true);
//
function newColorChanger() {
  const newCC = document.createElement('div');
  newCC.classList = "colorChanger colorChangerAnimate";
  colorChangerCont.appendChild(newCC, colorChangerCont.children[colorChangerCont.children.length]);
}
/*
function writeTextEffect(element) {
  let letters = element.innerHTML.split('');
  element.innerHTML = "";
  setTimeout(() => {
    for(let i = 0; i < letters.length; i++) {
      const curText = element.innerHTML;
      for(let j = 0; j < 3; j++) {
        setTimeout(() => {
          element.innerHTML += "x";
        }, j * 100);
        element.innerHTML = curText;
      }
      element.innerHTML += letters[i];
    }
  }, 1000);
}
*/
function writeTextEffect(element, colorChange) {
  const letters = element.innerHTML.split('');
  element.innerHTML = ".";
  const randomChar = () => String.fromCharCode(33 + Math.floor(Math.random() * 94));
  let displayText = Array(letters.length).fill('');
  let currentIndex = 0;

  function updateText() {
      if (currentIndex < letters.length) {
          for (let i = currentIndex; i < letters.length; i++) {
              displayText[i] = randomChar();
          }
          element.textContent = displayText.join('');
          setTimeout(updateText, 50);
      } else {
          element.textContent = letters.join('');
          setTimeout(() => {
            if(colorChange)
              newColorChanger();
          }, 500);
      }
  }

  function revealLetter() {
      if (currentIndex < letters.length) {
          displayText[currentIndex] = letters[currentIndex];
          currentIndex++;
          setTimeout(revealLetter, 100);
      }
  }

  setTimeout(() => {
    setTimeout(updateText, 50);
    setTimeout(revealLetter, 200);
}, 500);
}

mainAnchorLink.addEventListener("mouseover", () => {
  newColorChanger();
});