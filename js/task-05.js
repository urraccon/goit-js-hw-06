const nameInput = document.getElementById("name-input");
console.dir(nameInput);
const nameOutput = document.getElementById("name-output");
console.dir(nameOutput);
nameInput.addEventListener("input", (text) => {
  console.log(nameInput);
  if (!nameInput.value) {
    nameOutput.textContent = "Anonymous";
  } else {
    nameOutput.textContent = nameInput.value;
  }
});
