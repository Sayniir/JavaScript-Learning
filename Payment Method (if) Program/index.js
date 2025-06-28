const submit = document.getElementById("submit")
const sub = document.getElementById("checkbox")
const visa = document.getElementById("visa")
const mastercard = document.getElementById("mastercard")
const american = document.getElementById("american-express")
const Subresult = document.getElementById("sub")
const CardResult = document.getElementById("card-result")

submit.onclick = function() {
  if(sub.checked) {
    Subresult.textContent = `You are Subscribed`
  }
  else {
    Subresult.textContent = `You are not Subscribed`
  }

  if(visa.checked) {
    CardResult.textContent = `You pay with Visa`
  }
  else if(mastercard.checked) {
    CardResult.textContent = `You pay with MasterCard`
  }
  else if(american.checked) {
    CardResult.textContent = `You pay with American Express`
  }
  else  {
    CardResult.textContent = `You didn't select a payment method`
  }
}