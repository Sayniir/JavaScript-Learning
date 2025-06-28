const where = document.getElementById("generated");

function GeneratePassword(length, includeLowercase, includeUppercase, includeNumbers, includeSymbols){

const lowercaseChars = "azertyuiopqsdfghjklmwxcvbn"
const uppercaseChars = "AZERTYUIOPQSDFGHJKLMWXCVBN"
const numberChars = "0123456789"
const SymbolChars = "&@#~_--+*/!?"

let allowedchars =" ";
let password = "";

allowedchars += includeLowercase ? lowercaseChars : "";
allowedchars += includeUppercase ? uppercaseChars : "";
allowedchars += includeNumbers ? numberChars : "";
allowedchars += includeSymbols ? SymbolChars : "";


if(length <= 0){
    return"It's must be superior to 0";
}
else if(allowedchars.length === 0){
    return"Select at least one set";
}

for(let i = 0; i < length; i++){
    const randomIndex = Math.floor(Math.random()*allowedchars.length);
    password += allowedchars[randomIndex];
}
where.textContent = "Your password : " + password
return password

}

const passwordLength =10;
const includeLowercase = true;
const includeUppercase = true;
const includeNumbers = true;
const includeSymbols = true;

const password = GeneratePassword(passwordLength, 
    includeLowercase, 
    includeUppercase, 
    includeNumbers, 
    includeSymbols)


console.log(`Generated Password : ${password}`);