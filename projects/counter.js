let count;
count = Number(count);
document.getElementById("decrease").onclick = function () {
  count -= 1;
  document.getElementById("myResults").innerHTML = count;
};
document.getElementById("reset").onclick = function () {
  count = 0;
  document.getElementById("myResults").innerHTML = count;
};
document.getElementById("increase").onclick = function () {
  count += 1;
  document.getElementById("myResults").innerHTML = count;
};
