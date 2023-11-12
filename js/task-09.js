function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215)
    .toString(16)
    .padStart(6, 0)}`;
}

const body = document.querySelector("body");
const colorChangeBttn = document.querySelector(".change-color");
const colorName = document.querySelector(".color");
console.dir(body);
console.dir(colorChangeBttn);
console.dir(colorName);
colorChangeBttn.addEventListener("click", (action) => {
  console.dir(action);
  const randomColor = getRandomHexColor();
  console.log(randomColor);
  body.style.backgroundColor = randomColor;
  colorName.textContent = randomColor;
  console.log(body.style.backgroundColor);
  console.log(colorName.textColor);
});
