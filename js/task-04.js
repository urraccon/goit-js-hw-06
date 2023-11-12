let counterValue = 0;

const decreaseButton = document.querySelector('[data-action="decrement"]');
const increaseButton = document.querySelector('[data-action="increment"]');
const value = document.getElementById("value");
console.log(value);
console.log(decreaseButton);
decreaseButton.addEventListener("click", (decrease) => {
  counterValue -= 1;
  value.textContent = counterValue;
});
increaseButton.addEventListener("click", (increase) => {
  counterValue += 1;
  value.textContent = counterValue;
});
