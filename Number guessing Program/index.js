const min = 1;
const max = 100;
const random = Math.floor(Math.random()*(max - min + 1 ));

let answer;
let attempts = 0;

answer = window.prompt("Guess the number");


while(answer !== random) {
  if(isNaN(answer)) {
    window.alert("Please enter a number")
    answer = window.prompt("Guess the number")
  } else if (answer < min || answer > max){
    window.alert("Respect the limits");
    answer = window.prompt("Guess the number");
  }
  else {
    attempts +=1;
    if(answer == random) {
      window.alert(`You found it, it was ${random}`);
      window.alert(`it took you ${attempts} trys`)
      break;
    }
    else if(answer < random) {
      answer = window.prompt(`The number is bigger and this is your ${attempts} attempt`);
    }
    else {
      answer = window.prompt(`The number is smaller and this is your ${attempts} attempt`);
    }
  }
}