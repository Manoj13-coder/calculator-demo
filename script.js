let currentInput = '0'

const inputNumber = (number) => {
  if (currentInput === '0') {
    currentInput = number
  } else {
    currentInput += number
  }
}

const inputOperator = (operator) => {
  currentInput += operator
}

const calculate = () => {
  let result = 0
  try {
    result=eval(currentInput);
    currentInput = result.toString()
  } catch (error) {
    currentInput = 'Error';
    console.log(error)
  }
}

const clearAll = () => {
  currentInput = '0'
}

const calculatorScreen = document.querySelector(".calculator-screen")
const updateScreen = (number) => {
  calculatorScreen.value = number
}

const numbers = document.querySelectorAll(".number")

numbers.forEach((number) => {
  number.addEventListener(("click"), (event) => {
    inputNumber(event.target.value)
    updateScreen(currentInput)
  })
})

const operators = document.querySelectorAll(".operator")

operators.forEach((operator) => {
  operator.addEventListener("click", (event) => {
    inputOperator(event.target.value)
    updateScreen(currentInput)
  })
})

const equalSign = document.querySelector('.equal-sign')

equalSign.addEventListener("click", () => {
  equalSign.style
  calculate()
  updateScreen(currentInput)
})

const clearBtn = document.querySelector('.all-clear')

clearBtn.addEventListener("click", () => {
  clearAll()
  updateScreen(currentInput)
})

const backspace = document.querySelector(".backspace")

backspace.addEventListener("click", (event) => {
  backspace.style.backgroundColor = 'rgb(255, 0, 0)';
  currentInput=currentInput.slice(0,-1);
  currentInput=(currentInput=='')?'0':currentInput
  updateScreen(currentInput)
})