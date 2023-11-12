const inputField = document.getElementById("validation-input");
inputField.addEventListener("blur", (text) => {
  if (inputField.value.length < 6) {
    inputField.classList.add("invalid");
    inputField.classList.remove("valid");
  } else {
    inputField.classList.add("valid");
    inputField.classList.remove("invalid");
  }
  console.dir(inputField);
});
