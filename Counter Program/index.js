let count=0;
document.getElementById("decrease").onclick = function() {
  count -=1;
  document.getElementById("number").textContent = count
}

document.getElementById("reset").onclick = function() {
  count = 0;
  document.getElementById("number").textContent = count
}

document.getElementById("increase").onclick = function() {
  count +=1;
  document.getElementById("number").textContent = count
}