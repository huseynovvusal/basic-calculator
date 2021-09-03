const keys = document.querySelectorAll(".calculator .keys a");
const display = document.querySelector("input");
const equal = document.querySelector(".equal");
const clear = document.querySelector(".clear");
const backspace = document.querySelector(".backspace");

events();

function events() {
  keys.forEach((key) => {
    if (
      key.className != "equal" &&
      key.className != "clear" &&
      key.className != "backspace"
    ) {
      key.addEventListener("click", enterCalculator);
    }
  });

  equal.addEventListener("click", displayEqual);
  clear.addEventListener("click", clearDisplay);
  backspace.addEventListener("click", deleteLastChar);
}

function enterCalculator() {
  display.value += this.innerHTML;
}

function displayEqual() {
  display.value = eval(display.value);
}

function clearDisplay() {
  display.value = "";
}

function deleteLastChar() {
  display.value = display.value.slice(0, -1);
}
