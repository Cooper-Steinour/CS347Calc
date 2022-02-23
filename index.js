let numOne = document.getElementById("num-one");
let numTwo = document.getElementById("num-two");
let symbol = document.getElementById("symbol");
let sum = document.getElementById("sum");

numOne.addEventListener("input", calculate);
numTwo.addEventListener("input", calculate);

function calculate() {
  let one = parseFloat(numOne.value) || 0;
  let two = parseFloat(numTwo.value) || 0;
  switch (symbol.innerText) {
    case "*":
      sum.innerText = one * two;
      break;
    case "/":
      sum.innerText = one / two;
      break;
    case "+":
      sum.innerText = one + two;
      break;
    case "-":
      sum.innerText = one - two;
      break;
    default:
      sum.innerText = "Choose an operator";
      break;
  }
}

function changeOperator(operator) {
  symbol.innerText = operator;
  calculate();
}
