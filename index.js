const topDisplay = document.getElementById("topNum");
const bottomDisplay = document.getElementById("answer");
const container = document.querySelector(".container");

let firstNum = "";
let operator = "";
let secondNum = "";

function appendNumber(num) {
  if (operator === "") {
    firstNum += num;
    topDisplay.textContent = firstNum;
  } else {
    secondNum += num;
    topDisplay.textContent = `${firstNum} ${operator} ${secondNum}`;
  }
}

function clearCalculator() {
  firstNum = "";
  operator = "";
  secondNum = "";
  topDisplay.textContent = "";
  bottomDisplay.textContent = "";
}

function validateInput() {
  if (firstNum === "" || operator === "" || secondNum === "") {
    return false;
  } 
  return true;
}

function calculate() {
  let num1 = parseFloat(firstNum);
  let num2 = parseFloat(secondNum);

  let finalResult = 0;

  switch (operator) {
    case "+":
      finalResult = num1 + num2;
      break;

    case "-":
      finalResult = num1 - num2;
      break;

    case "*":
      finalResult = num1 * num2;
      break;

    case "/":
      finalResult = num1 / num2;
      break;

    default:
      return "Error";
    //console.error(`Unknown operator: ${operator}`);
  }

  return finalResult;
}

container.addEventListener("click", (e) => {
  if (e.target.tagName === "BUTTON") {
    if (e.target.classList.contains("number")) {
      let clicked = e.target.textContent;

      appendNumber(clicked);

      //console.log(`number ${clicked} is clicked`)
    } else if (e.target.classList.contains("operator")) {
        if (firstNum === "") {
            bottomDisplay.textContent = "Error";
            return;
        }
      let clicked = e.target.textContent;
      operator = clicked;
      topDisplay.textContent = `${firstNum} ${operator} `;
      //console.log(`${clicked} operator is clicked`)
    } else if (e.target.classList.contains("equal")) {
        if (validateInput()){
            let result = calculate();
            bottomDisplay.textContent = result;
        } else {
            bottomDisplay.textContent = "Error";
        }
      // console.log("equal is clicked")
    } else if (e.target.classList.contains("clear")) {
      clearCalculator();
      //console.log("clear is clicked")
    }
  }
});
