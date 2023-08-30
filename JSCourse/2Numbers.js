// numbers are variable values whihc do not take qoutes ("")
//  to declare a number we use variable declairation in variables.js

let age = 12; //this is a number
let phone = "675679853"; // this is a string

////// displaying their datatypes
function displayDataTypes() {
  console.log(typeof age);
  console.log(typeof phone);
}

//NB: typeof will be explained further

// convertion
// converting from number to string we use the x.toString() where x is the variable name
function numberToString(age) {
  return age.toString(); //converts age to a string
}
console.log(numberToString(age))
// view datatype of varaible
console.log(typeof numberToString(age))
