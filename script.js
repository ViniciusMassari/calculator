const numbers = [...document.querySelectorAll("[data-number]")];
const operators = [...document.querySelectorAll("[data-operator]")];
const currentOperand = document.querySelector("[data-current]");
const previousOperand = document.querySelector("[data-previous]");
const clearButton = document.querySelector("[data-allClear]");
const equalButton = document.querySelector("[data-equal]");

function handleOperation(event) {
  currentOperand.innerText += `${event.target.innerText}`;
}

function handleOperator(event) {
  currentOperand.innerText += `${event.target.innerText}`;
}

function handleClear() {
  currentOperand.innerText = "";
}

operators.forEach((operator) => {
  operator.addEventListener("click", handleOperator);
});

numbers.forEach((button) => {
  button.addEventListener("click", handleOperation);
});

clearButton.addEventListener("click", handleClear);

equalButton.addEventListener("click", () => {
  previousOperand.innerHTML = "";
  const operation = currentOperand.innerHTML.replace(
    /(\d{1,})([+/\-*])(\d{1,})/g,
    "$1 $2 $3"
  );
  let operationArray = operation.split(" ");
  let result;

  switch (operationArray[1]) {
    case "+":
      result = +operationArray[0] + +operationArray[2];
      break;
    case "-":
      result = +operationArray[0] - +operationArray[2];
      break;
    case "*":
      result = +operationArray[0] * +operationArray[2];
      break;
    case "/":
      result = +operationArray[0] / +operationArray[2];
      break;

    default:
      break;
  }

  if (result === undefined || isNaN(result)) {
    previousOperand.innerHTML = "Error";
  } else {
    previousOperand.innerHTML = result;
  }
  handleClear();
});
