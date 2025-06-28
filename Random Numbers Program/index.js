const button = document.getElementById("roll");
const reset = document.getElementById("reset");
const rolled = document.getElementById("rolled");
const rolled2 = document.getElementById("rolled2");
const rolled3 = document.getElementById("rolled3");
let random;
let random2;
let random3;

button.onclick = function() {
  random = Math.floor(Math.random()*10)+1;
  random2 = Math.floor(Math.random()*10)+1
  random3 = Math.floor(Math.random()*10)+1
  rolled.textContent = random
  rolled2.textContent = random2
  rolled3.textContent = random3
}
