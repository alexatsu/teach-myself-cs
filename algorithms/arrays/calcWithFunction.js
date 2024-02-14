// really fun one, getting into functional code
// problem: https://www.codewars.com/kata/525f3eda17c7cd9f9e000b39
function zero(operation = null) {
  return operation === null ? 0 : operation(0);
}
function one(operation = null) {
  return operation === null ? 1 : operation(1);
}
function two(operation = null) {
  return operation === null ? 2 : operation(2);
}
function three(operation = null) {
  return operation === null ? 3 : operation(3);
}
function four(operation = null) {
  return operation === null ? 4 : operation(4);
}
function five(operation = null) {
  return operation === null ? 5 : operation(5);
}
function six(operation = null) {
  return operation === null ? 6 : operation(6);
}
function seven(operation = null) {
  return operation === null ? 7 : operation(7);
}
function eight(operation = null) {
  return operation === null ? 8 : operation(8);
}
function nine(operation = null) {
  return operation === null ? 9 : operation(9);
}
function plus(number) {
  return (val) => val + number;
}
function minus(number) {
  return (val) => val - number;
}

function times(number) {
  return (val) => val * number;
}

function dividedBy(number) {
  return (val) => Math.floor(val / number);
}
