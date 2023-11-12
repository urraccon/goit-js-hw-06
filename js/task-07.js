const controlButton = document.getElementById("font-size-control");
const adjustedText = document.getElementById("text");
console.dir(adjustedText);
controlButton.addEventListener("input", (fontSize) => {
  adjustedText.style.fontSize = `${controlButton.value}px`;
  console.dir(fontSize);
  console.log(fontSize.target.value);
  console.dir(controlButton);
  console.log(controlButton.value);
});
