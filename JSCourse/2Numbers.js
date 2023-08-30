// numbers are variable values whihc do not take qoutes ("")
//  to declare a number we use variable declairation in variables.js

let age = 12; //this is a number
let phone = "675679853"; // this is a string
let x=3.1
let y=3.56

////// displaying their datatypes
function displayDataTypes() {
  console.log(typeof age);
  console.log(typeof phone);
}

//NB: typeof will be explained further

// convertion
// 1.converting from number to string we use the x.toString() where x is the variable name
function numberToString() {
  return age.toString(); //converts age to a string
}
// view datatype of varaible
console.log(typeof numberToString());

// 2.converting from string to interger
function stringToNumber() {
  return parseInt(phone);
}
// view datatype of varaible
console.log(typeof stringToNumber());

// strings to number based on radix
function stringToNumber2() {
  return Number.parseInt(phone, 2); //where "2" is the radix in this case binary
}
console.log(stringToNumber2());

// number methods
// roundUp
function roundUp(){
return Math.round(y)
}
console.log(roundUp())

// roundDown
function roundDown(){
    return Math.floor(y)
}
console.log(roundDown())