let operator_stack = [];
let operand_stack = [];
let operation_stack = [];

operationsMap = {
  "+": (a, b) => a + b,
  "-": (a, b) => a - b,
  "*": (a, b) => a * b,
  "/": (a, b) => a / b
}

function performOperation() {
  if (operand_stack.length < 2) {
    window.alert("Operands missing")
    return;
  }
  console.log(operation_stack.join(' '));
  while (operator_stack.length > 0) {
    operand_1 = operand_stack.shift();
    operand_2 = operand_stack.shift();
    operator = operator_stack.shift();
    operand_stack.unshift(
      operationsMap[operator](operand_1, operand_2));
  }
  result = operand_stack.shift();
  document.getElementById("resultValue").value = result;
  operation_stack.push(result);
  document.getElementById("logInformation").value += operation_stack.join(' ') + '\n';
  operand_stack = [];
  operator_stack = [];
  operation_stack = [];
}

function resetCalculator() {
  operand_stack = [];
  operator_stack = [];
  operation_stack = [];
  document.getElementById("logInformation").value = null;
  operand_input.value = null;
}

window.addEventListener('load', function(event) {
  operator_buttons = document.getElementsByClassName("operator");
  for (var i = 0; i < operator_buttons.length; i++) {
    operator_buttons[i].addEventListener('click', function(event) {
      operator = event.target.innerText;
      if (operator == "RESET") {
        resetCalculator();
        return;
      }
      operand_input = document.getElementsByClassName("inputNumber")[0];
      if (operand_input.value.length > 0) {
        operand_stack.push(Number(operand_input.value));
        operation_stack.push(operand_input.value);
        operation_stack.push(operator);
        if(operator == "=") {
          performOperation();
        } else {
          operator_stack.push(operator);
          operand_input.value = null;
        }
      } else {
        window.alert("Please introduce a number")
        return;
      }
    });
  }
});
