const inputField = document.getElementById("validation-input");
inputField.addEventListener("blur", (text) => {
  debugger;
  if (inputField.value.length !== Number(inputField.dataset.length)) {
    debugger;
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  } else {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  }
  console.dir(inputField);
  console.log(inputField.dataset.length);
});
