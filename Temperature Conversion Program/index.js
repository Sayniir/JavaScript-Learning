const input = document.getElementById("number")
const C = document.getElementById("C")
const F = document.getElementById("F")
const submit = document.getElementById("submit")
const result = document.getElementById("result")
let temp;

function convert() {
  if(C.checked) {
    temp = Number(input.value);
    temp = temp * 9 / 5 + 32;
    result.textContent = "Result : " + temp.toFixed(2) + "°F"
  }
  else if(F.checked){
    temp = Number(input.value);
    temp = (temp -32) * (5/9);
    result.textContent = "Result : " + temp.toFixed(2) + "°C"
  }
  else{
    result.textContent = "Select a unit"
  }
}
submit.onclick = convert;