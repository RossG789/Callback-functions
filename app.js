// function notifyUser() {
//   console.log("notifyUser was called");
// }
// function notifyUser2() {
//   console.log("notifyUser2 was called");
// }

// function myAwesomeFunction(notifyUserCallback) {
//   console.log("Running myAwesomeFunction... doing complex tasks...");
//   console.log("Complex task complete! I will notify the user.");
//   notifyUserCallback();
// }

// myAwesomeFunction(notifyUser2);

// function greet(name) {
//   console.log(`Hello ${name}`);
// }

// greet("Ross");

function add(a, b) {
  return a + b;
}

function multiply(a, b) {
  return a * b;
}

function myCalculatorFunction(a, b, operationCallback) {
  console.log("Doing a calculation using the numbers: ", a, b);
  console.log("We might have code that saves the result to a log or database");
  return operationCallback(a, b);
}

const result = myCalculatorFunction(1, 2, add);
console.log(result);

const result2 = myCalculatorFunction(2, 3, multiply);
console.log(result2);

const finalResult = myCalculatorFunction(result, result2, add);
console.log(finalResult);
