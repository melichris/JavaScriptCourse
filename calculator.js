let a, b, sum, quotien, product, diff, operand;
document.getElementById("myButton").onclick = function () {
  a = document.getElementById("num1");
  b = document.getElementById("num2");
  operand = document.getElementById("operator");

  sum = a + b;
  product = a * b;
  diff = a - b;
  quotien = a / b;

  if (operand == 1) {
    sum = a + b;
    document.getElementById("results").innerHTML = "Your results is :" + sum;
  }else if (operand == 2) {
    diff = a - b;
    document.getElementById("results").innerHTML = "Your results is :" + diff;
  }else if (operand == 3) {
    product = a * b;
    document.getElementById("results").innerHTML = "Your results is :" + product;
  }else if (operand == 3) {
    if(a>b){
    quotien = a / b;
    document.getElementById("results").innerHTML = "Your results is :" + quotien;
  }else{
    document.getElementById("results").innerHTML = "Your results is undefined";
  }
}

};
