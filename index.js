// let day = 1 ;

/*switch(day) {
  case 1: 
    console.log("It's Sunday");
    break;
  case 2: 
    console.log("It's Monday");
    break;
  case 3:
    console.log("It's Tuesday");
    break;
  case 4:
    console.log("It's Wednesday");
    break;
  case 5:
    console.log("It's Thursday");
    break;
  case 6:
    console.log("It's Friday");
    break;
  case 7:
    console.log("It's Saturday");
    break;
  default:
    console.log("This is not a day")
}*/

/*let score = 1000;
let letter;

switch(true){

  case score > 100:
    console.log("You can't have more than 100")
    break;
  case score > 90:
    console.log("A");
    break;

  case score > 80:
    console.log("B");
    break;

  case score > 60:
    console.log("C");
    break;

  case score > 40:
    console.log("D");
    break;
  
  case score > 20:
    console.log("F");
    break;

    case score < 20:
    console.log("GUEZ");
    break;
}*/


/*let User = "Sayniir";

let truc = User.startsWith(" ")

console.log(truc)*/

/*let FullName = "Rynas Kebdi"

let FirstName = FullName.slice(0, FullName.indexOf(" "))
let LastName = FullName.slice(FullName.indexOf(" ")+1)

console.log(FirstName)
console.log(LastName)*/


/*const email = "rynaskebdi.pro@gmail.com";

let username = email.slice(0, email.indexOf("@"));
let extention = email.slice(email.indexOf("@")+1)

console.log(username)
console.log(extention)*/

/*let username = window.prompt("Enter Your Username");

username = username.trim();

let letter = username.charAt(0)

letter = letter.toUpperCase()

let Extra = username.slice(1);

Extra = Extra.toLowerCase()

username = letter + Extra;

console.log(username);*/

/*let username = window.prompt("Enter your Username");

username = username.trim().charAt(0).toUpperCase() + username.trim().slice(1).toLowerCase();

console.log(username)*/

/*let age = 20;

if (age < 18 || age > 65) {
  console.log("Tarif réduit");
} else {
  console.log("Tarif normal");
}
*/


/*const IsSunny = true;

if(!IsSunny) {
  console.log("It's CLOUDY")
}
else{
  console.log("It's SUNNY")
}*/


/*let age = 15;
const pi = 3.14;

if(pi !== "3.14") {
  console.log("That is not pi")
}
else{
  console.log("that is pi")
}*/


/*let username = "";

while (username === "" || username === null) {
  username = window.prompt("Enter your username");
  console.log("you didn't enter a username");
}

console.log(`Hello ${username}`);*/


/*let logged = true;
let username;
let password;

while(!logged) {
  username = window.prompt("enter your username")
  password = window.prompt("enter your password")

  if (password === "MyUser" && username === "Sayniir") {
    logged = true;
    console.log("You logged in")
  }
  else {
    console.log("False infos")
  }
}*/


/*for(let i  = 1; i <=20; i++) {
  if(i == 13) {
    continue;
  }
  else {
    console.log(i)
  }
}*/

/*function Happy(username, age){
  console.log("Happy birthday to you ! ")
  console.log("Happy birthday to you ! ")
  console.log(`Happy birthday to you ${username} !`)
  console.log("Happy birthday to you ! ")
  console.log("Happy birthday to you ! ")
  console.log("Happy birthday to you ! ")
  console.log(`You are now ${age} years old !`)
}

Happy("Rynas", 15);
Happy("Rynas", 15);*/


/*function add(x, y){
  let result = x + y;
  return result;
}

let answer = add(5, 3);
console.log(answer);*/


/*function function1(){
  let x = 1;
  console.log(x)
}

function function2(){
  let x = 2;
  console.log(x)
}*/

/*let fruits = ["apple", "orange", "banana", "kiwi"]

console.log(fruits.reverse())*/

/*let numbers = [1, 2, 3, 4, 5]
let max = Math.min(...numbers)
console.log(max)

let username = "Sayniir";
let letters = [...username].join("-");
console.log(letters)*/


/*function sum(...numbers) {
  let result = 0;
  for(let number of numbers){
    result += number
  }
  return result
}

const total = sum(1, 2, 5, 1)


function avg(...numbers) {
  let result = 0;
  let average;
  for(let number of numbers){
    result += number
  }
  average = result/numbers.length
  return average
}

const average = avg(75, 100, 85, 90, 50)

console.log(average)*/

/*function combineStrings(...strings){
  return strings.join(" ")
}

const fullname = combineStrings("Mr", "SpongeBoB", "squarepants", "III")

console.log(fullname)*/

/*function sum(callback, callback2, x, y){
  let result = x+y;
  callback(result)
  callback2(result)
}

function displayConsole(result){
  console.log(result);
}
function displayPage(result){
  document.getElementById("MyH1").textContent = result;
}
sum(displayConsole, displayPage, 8, 2);*/

/*let numbers = [1, 2, 3, 4, 5];

numbers.forEach(double);
numbers.forEach(display);

function double(element, index, array){
  array[index] = element * element;
}

function display(element){
  console.log(element)
}*/

/*let fruits = ["apple", "orange", "banana", "coconut"];

fruits.forEach(Title)
fruits.forEach(display);

function Upper(element, index, array){
  array[index] = element.toUpperCase();
}

function Lower(element, index, array){
  array[index] = element.toLowerCase();
}

function Title(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1)
}

function display(element){
  console.log(element);
}*/


/*let numbers = [1, 2, 3, 4, 5, 6];  

let squares = numbers.map(square);

function square(element){
  return Math.pow(element, 2);
}

console.log(squares)*/


/*let numbers = [1, 2, 3, 4, 5, 6, 7];
let oddNumbers = numbers.filter(isOdd)

let EvenNumbers = numbers.filter(isEven)

function isEven(element){
  return element % 2 === 0;
}

function isOdd(element){
  return element % 2 !== 0;
}

console.log(oddNumbers)
console.log(EvenNumbers)*/


/*const age = [18, 16, 14, 15, 12, 19, 20, 60];

function isAdult(element){
  return element >= 18;
}

function isKids(element){
  return element < 18;
}

let Adults = age.filter(isAdult)
let kids = age.filter(isKids)


console.log(Adults)
console.log(kids)*/


/*let fruits = ["apple", "orange", "banana", "coconut"];
shortwords = fruits.filter(getShorter)
longwords = fruits.filter(getLong)
console.log(shortwords)
console.log(longwords)

function getShorter(element){
  return element.length <= 6;
}

function getLong(element){
  return element.length > 6;
}*/


/*function welcome(callback){
  setTimeout(() => {
    console.log(`Welcome Rynas`);
    callback();
  }, 2000);
}

function hello(){
  console.log(`Hello Rynas`);
}

welcome(hello);*/

/*function count(){
  for(let i = 1; i <= 1000000; i++){
    console.log(i);
  }
}

function weFinished(){
  console.log("We finished counting");
}

count();
weFinished();*/


/*const prices = [10, 20, 30, 40, 50];

const total = prices.reduce(sum);

console.log(total);

function sum(accumulator, element){
  return accumulator + element;
}


console.log("Hello");*/

/*function hello(callback){
  setTimeout(function () {
    console.log("Hello");
    callback();
  }, 2000);

}

function goodBye(){
  console.log("Goodbye");
}

hello(goodBye);*/

/*function sum(callback, x, y) {
  let result = x + y;
  callback(result);
}

function displayConsole(result) {
  console.log(result);
}

function displayPage(result) {
  document.getElementById("MyH1").textContent = result;

}

sum(displayPage, 5, 3);*/

/*Array = [1, 2, 3, 4, 5];

function displaay(element){
  console.log(element);
}


function double(element, index, array) {
  array[index] = element * 2;
  console.log(array[index]);
}

Array.forEach(double);*/

/*let fruits = ["apple", "orange", "banana", "coconut"];

function display(element){
  console.log(element);
}

fruits.forEach(display);

function Upper(element, index, array){
  array[index] = element.slice(0, 1).toUpperCase() + element.slice(1).toLowerCase();
  console.log(array[index]);
}

function Capitalize(element, index, array){
  array[index] = element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
  console.log(array[index]);
}

fruits.forEach(Upper);
fruits.forEach(Capitalize);*/


/*const numbers = [1, 2, 3, 4, 5];
function square(element) {
  return Math.pow(element, 2);
}

const squares = numbers.map(square);

console.log(squares);*/

/*const students = ["SpongeBob", "Patrick", "Squidward", "Sandy"];

function Upper(element) {
  return element.toUpperCase();
}

function Capitalize(element) {
  return element.charAt(0).toUpperCase() + element.slice(1).toLowerCase();
}

function lower (element) {
  return element.toLowerCase();
}
const UpperStudents = students.map(Upper);
const CapitalizedStudents = students.map(Capitalize);
const LowerStudents = students.map(lower);

console.log(UpperStudents);
console.log(CapitalizedStudents);
console.log(LowerStudents);*/

/*const dates = ["2023-01-01", "2023-02-15", "2023-03-10"];

function FormatDates(element) {
  const parts = element.split("-");
  return `${parts[2]}/${parts[1]}/${parts[0]}`;
}

const formattedDates = dates.map(FormatDates);

console.log(formattedDates);*/

/*let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];

function isEven(element) {
  return element % 2 === 0;
}

function isOdd(element) {
  return element % 2 !== 0;
}
let evenNumbers = numbers.filter(isEven);
let oddNumbers = numbers.filter(isOdd);

console.log(evenNumbers);
console.log(oddNumbers);*/

/*const ages = [18, 16, 14, 15, 12, 19, 14, 16];

function isAdult(element) {
  return element >= 18;
}

function isKids(element) {
  return element < 18;
}
let Adults = ages.filter(isAdult);
let kids = ages.filter(isKids);

console.log(Adults);
console.log(kids);*/

/*const words = ["apple", "orange", "banana", "coconut", "kiwi", "pomegranate"];

function getShorter(element) {
  return element.length <= 6;
}

function getLong(element) {
  return element.length > 6;
}

function WhatistheLength(element) {
  return `The length of the word "${element}" is ${element.length}`;
}

const shortwords = words.filter(getShorter);
const longwords = words.filter(getLong);
const wordsLengths = words.map(WhatistheLength);

console.log(shortwords);
console.log(longwords);
console.log(wordsLengths);*/

/*const prices = [10, 20, 30, 40, 50]; 

const total = prices.reduce(sum);

function sum(accumulator, element) {
  return accumulator + element;
}

console.log(total);*/

/*const grades = [85, 90, 78, 92, 88];

const maxvalue = grades.reduce(findMax);
const minvalue = grades.reduce(findMin);


function findMax(accumulator, element) {
  return Math.max(accumulator, element);
}

function findMin(accumulator, element) {
  return Math.min(accumulator, element);
}

function average(array) {
  let sum = 0;
  for (let i = 0; i < array.length; i++) {
    sum +=  array[i];
}
  return sum / array.length;
}
console.log(maxvalue);
console.log(minvalue);

const avg = average(grades);
console.log(avg);*/

/*const numbers = [1, 2, 3, 4, 5, 6];

numbers.map(function(element){
  return Math.pow(element, 2);
})

numbers.map(function(element){
  return Math.pow(element, 3);
})

const even = numbers.filter(function(element){
  return element % 2 === 0;
})

const odd = numbers.filter(function(element){
  return element % 2 !==0;
})

const total = numbers.reduce(function(accumulator, element){
  return accumulator + element;
})

const average = total / numbers.length;
console.log(even);
console.log(odd);
console.log(total);
console.log(average);*/

/*const hello = (name) => console.log("Hello "+name);

hello ("World");

function hello(){
  console.log("Hello World");
}*/


/*setTimeout( () => {
  console.log("Hello World");
}, 3000);*/

/*const numbers = [1, 2, 3, 4, 5, 6];

const square = numbers.map((element) => Math.pow(element, 2));

const even = numbers.filter((element) => element % 2=== 0);

const total = numbers.reduce((accumulator, element) => accumulator + element);

console.log(even);
console.log(square);
console.log("[ " + total + " ]");*/

/*const person = {
  FirstName: "Rynas",
  LastName: "Kebdi",
  age: 16,
  IsStudent: true,
  sayHello: function(){console.log("Hello my name is "+ person.FirstName)},
  Plus: function(x, y){console.log(`The sum of ${x} and ${y} is ${x+y}`)},
  Minus: (x, y) => console.log(`The difference between ${x} and ${y} is ${x-y}`),
}

const person2 = {
  FirstName: "SpongeBob",
  LastName: "SquarePants",
  age: 30,
  IsStudent: false,
  sayHello: function(){console.log("Hello my name is "+ person2.FirstName)},
  Minus: function(x, y){console.log(`The difference between ${x} and ${y} is ${x-y}`)},
  Plus: (x, y) => console.log(`The sum of ${x} and ${y} is ${x+y}`),
}

console.log(person.FirstName);
console.log(person.LastName);
console.log(person.age);
console.log(person.IsStudent);
person.sayHello();
person.Plus(5, 3);
person.Minus(5, 3);

console.log("   ");

console.log(person2.FirstName);
console.log(person2.LastName);
console.log(person2.age);
console.log(person2.IsStudent);
person2.sayHello();
person2.Minus(5, 3);
person2.Plus(5, 3);*/


/*const person = {
  FirstName: "Rynas",
  LastName: "Kebdi",
  age: 16,
  IsStudent: true,
  sayHello: function(){console.log("Hello my name is "+ this.FirstName)},
}

const person2 = {
  FirstName: "SpongeBob",
  LastName: "SquarePants",
  age: 30,
  IsStudent: false,
  sayHello: function(){console.log("Hello my name is "+ this.FirstName)},
}
person.sayHello();*/


/*function Car(make, model, color, year){
  this.make = make;
  this.model = model;
  this.color = color;
  this.year = year;
  this.drive = function(){console.log(`You drive the ${this.model}`)}
}

const car1 = new Car("Toyota", "Corolla", "Red", 2020);
const car2 = new Car("Honda", "Civic", "Blue", 2021);
const car3 = new Car("Ford", "Mustang", "Black", 2022);

console.log(car1.make);
console.log(car1.model);
console.log(car1.color);
console.log(car1.year);
car1.drive();*/

/*class Product{
  constructor(name, price){
    this.name = name;
    this.price = price;
  }
  DisplayProduct(){
    console.log(`Product Name : ${this.name}, Price : $${this.price.toFixed(2)}`);
  }

  calculateTotal(salesTax){
    return this.price + (this.price * salesTax);
  }
}

const product1 = new Product("Laptop", 999.99);
const product2 = new Product("Smartphone", 499.99);
const product3 = new Product("Tablet", 299.99);

product1.DisplayProduct();
product2.DisplayProduct();
product3.DisplayProduct();  
console.log("");
const total = product2.calculateTotal(0.07);
console.log(`Total Price with Sales Tax: $${total.toFixed(2)}`);*/

/*class MathUtil{
  static PI = 3.1415926;

  static getDiameter(radius) {
    return 2 * radius;
  }

  static getCircumference(radius) {
    return 2 * MathUtil.PI * radius;
  }

  static getArea(radius) {
    return MathUtil.PI * radius * radius;
  }
}

console.log(MathUtil.PI);
console.log(MathUtil.getDiameter(5));
console.log(MathUtil.getCircumference(5)); 
console.log(MathUtil.getArea(5));*/

/*class User{
  static count = 0;
  constructor(username){
    this.username = username;
    User.count++;
  }
}

const user1 = new User("Rynas");
const user2 = new User("Sayniir");
const user3 = new User("SpongeBob");

console.log(`Total Users Created: ${User.count}`);
console.log(`User 1: ${user1.username}`);
console.log(`User 2: ${user2.username}`);
console.log(`User 3: ${user3.username}`); */

/*class Animal {
  alive = true;

  eat() {
    console.log(`This ${this.name} is eating.`);
}
}
class Rabbit extends Animal {
    name = "Rabbit";
    run() {
      console.log(`The ${this.name} is running.`);}
  }


class Fish extends Animal {
  name = "Fish";
}

class Hawk extends Animal {
  name = "Hawk";
}

const rabbit = new Rabbit();
const fish = new Fish();
const hawk = new Hawk();

rabbit.alive = false;

console.log(`Is the ${rabbit.name} alive? ${rabbit.alive}`);
rabbit.eat();*/

/*class Animal {
  constructor(name, age, speed){
    this.name = name;
    this.age = age;
  }
}

class Rabbit extends Animal {
  constructor(name, age, runspeed){
    super(name, age);
    this.runspeed = runspeed;
  }
}

class Fish extends Animal {
  constructor(name, age, swimspeed){
    super(name, age);
    this.swimspeed = swimspeed;
  }
}

class Hawk extends Animal {
  constructor(name, age, fliespeed){
    super(name, age);
    this.fliespeed = fliespeed;
  }
}

const rabbit = new Rabbit("Bunny", 2, 30);
const fish = new Fish("Nemo", 1, 10);
const hawk = new Hawk("Hawky", 3, 50);

console.log(`The ${rabbit.name} is ${rabbit.age} years old and can run at a speed of ${rabbit.runspeed} km/h.`);
console.log(`The ${fish.name} is ${fish.age} years old and can swim at a speed of ${fish.swimspeed} km/h.`);
console.log(`The ${hawk.name} is ${hawk.age} years old and can fly at a speed of ${hawk.fliespeed} km/h.`); */

/*class Rectanglee{
  constructor(width, height){
    this.width = width;
    this.height = height;
  }

  set width(newWidth){
    if(newWidth > 0){
      this._width = newWidth;
    }
    else{
      console.error("It must be a positive number !")
    }
  }

  set height(newHeight){
    if(newHeight > 0){
      this._height = newHeight;
    }
    else{
      console.error("It must be a positive number !")
    }
  }

  get width(){
    return this._width;
  }
  get height(){
    return this._height;
  }
}

const Rectangle = new Rectanglee(1111, 1);

 console.log(Rectangle)*/

/*import {PI, getCircumference, getArea, getDiameter} from './math-util.js';

console.log(PI);
console.log(getCircumference(5));
console.log(getArea(5));
console.log(getDiameter(5));*/

/*function func1(callback){
  setTimeout(() => {
    console.log("Function 1 executed");
    callback();
  }, 2000);
}

function func2(){
  console.log("Function 2 executed");
  console.log("Function 3 executed");
  console.log("Function 4 executed");
}

func1(func2);*/

/*try{
  consle.log("Hello World");
}
catch(error){
  console.error("An error occurred:", error.message);
}
finally{
  console.log("Thank you for using our program!");
}

console.log("You have reached the end !");*/

/*try{
  const dividend = Number(window.prompt("Enter a dividend : "));
  const divisor = Number(window.prompt("Enter a divisor : "));

  if(divisor === 0){
    throw new Error("Division by zero is not allowed.");
  }
  if(isNaN(dividend) || isNaN(divisor)){
    throw new Error("Both inputs must be numbers.");
  }
}
catch{
  console.error(Error);
}

const result = dividend / divisor;

console.log(result)*/


/*const Myheading = document.getElementById("MyH1");

Myheading.style.backgroundColor = "yellow";
Myheading.style.textAlign = "center";

console.log(Myheading)*/

/*const fruits = document.getElementsByClassName("fruits");

for(let fruit of fruits){
  fruit.style.backgroundColor = "yellow";
}
*/

/*function task1(callback){
  setTimeout(() => {
    console.log("Task 1 is complete");
    callback();
  }, 2000)
}

function task2(callback){
  setTimeout(() => {
    console.log("Task 2 is complete");
    callback();
  }, 1000)
}

function task3(callback){
  setTimeout(() => {
    console.log("Task 3 is complete");
    callback();
  }, 3000)
}

function task4(callback){
  setTimeout(() => {
    console.log("Task 4 is complete");
    callback();
  }, 1500)
}

task1(() => {
  task2(() =>{
    task3(() => {
      task4(()=> {
        console.log("All Tasks are completed")
      })
    })
  })
})*/

/*function walkdog(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=> {
      resolve("You walk the dog");
    }, 2000);
  })
}

function clean(){
  return new Promise((resolve, reject)=>{
    setTimeout(()=>{
      resolve("You cleaned");
    }, 2500);
  })
}

function takeouttrash(){
return new Promise((resolve, reject)=>{
  setTimeout(()=>{
    resolve("You took out the trash");
  }, 500)
})
}*/

/*walkdog().then(value => {console.log(value); return clean()})
.then(value =>{console.log(value); return takeouttrash()})
.then(value=> {console.log(value); console.log("You're done")});*/


// callback hell :
/*walkdog(()=>{
  clean(()=>{
    takeouttrash(()=>{
      console.log("done")
    })
  })
})*/


/*async function doChores(){
  const walkdogResult = await walkdog();
  console.log(walkdogResult);

  const cleanResult = await clean();
  console.log(cleanResult);

  const takeouttrashresult = await takeouttrash();
  console.log(takeouttrashresult);

  console.log("You're done");
}

doChores();*/


/*const names = ["SpongeBob", "Patrick", "Squidward", "Sandy"];

const person = {
    "name" : "SpongeBob",
    "age" : 30,
    "isEmployed" : true
}

const people = [{
    "name" : "SpongeBob",
    "age" : 30,
    "isEmployed" : true
},
{
    "name":"Patrick",
    "age" : 42,
    "isEmployed" : false
}]

const Jsonpeople = `[{"name":"SpongeBob","age":30,"isEmployed":true},{"name":"Patrick","age":42,"isEmployed":false}]`;


const parsed = JSON.parse(Jsonpeople)


console.log(Jsonpeople)
console.log(parsed)*/

/*fetch("names.json")
  .then(response => response.json())
  .then(values => values.forEach(value => console.log(value)))
  .catch(error => console.error(error));*/

  // JSON = Javascript Object Notation

/*FetchData()

async function FetchData() {
  try{
    const response = await fetch("https://pokeapi.co/api/v2/pokemon/pikachu")
    if(!response.ok){
      throw new Error("This is not a pokemon");
    }
    const data = await response.json();
    console.log(data)
  }
  catch(error){
    console.error(error);
  }
}*/


// create an element :
/*const newH1 = document.createElement("h1");


// add attributes/properties : 
newH1.textContent = "I like pizza";
newH1.id = "MyH1";
newH1.style.color = "tomato";
newH1.style.textAlign = "center";

// append the element
document.body.append(newH1);

document.getElementById("box1").append(newH1)

document.getElementById("box1").removeChild(newH1)*/

/*const newItem = document.createElement("li");

newItem.textContent = "coconut";
newItem.id = "coconut";
newItem.style.fontWeight = "bold"
newItem.style.backgroundColor = "lightgreen";

document.getElementById("box").append(newItem);

document.getElementById("box").removeChild(newItem)*/

/*const mybox = document.getElementById("mybox");
const button = document.getElementById("button");

mybox.addEventListener("click", function(event){
  event.target.style.backgroundColor = "tomato";
  event.target.textContent = "OUCH !"
})

mybox.addEventListener("mouseover", event =>{
  event.target.style.backgroundColor = "yellow";
  event.target.textContent = "Danger"
})

mybox.addEventListener("mouseout", event =>{
  event.target.style.backgroundColor="lightblue";
  event.target.textContent = "Click Me";
})

function box(){
  mybox.style.backgroundColor="tomato";
  mybox.textContent = "Ouch"
}*/


const mybox = document.getElementById("mybox")
const moveamount = 10;
const button = document.getElementById("button");

let x =0;
let y =0;

/*document.addEventListener("keydown", event=>{
  if(event.key.startsWith("Arrow")){
    switch(event.key){
      case "ArrowUp":
        y -= moveamount;
        break;
      case "ArrowDown":
        y += moveamount;
        break;
      case "ArrowLeft":
        x -= moveamount;
        break;
      case "ArrowRight":
        x += moveamount;
        break;

    }
    mybox.style.top =`${y}px`;
    mybox.style.left =`${x}px`;
  }
})*/


button.addEventListener("click", event=>{
  if(mybox.style.visibility === "hidden"){
    mybox.style.visibility = "visible";
    button.textContent = "Hide";
  }
  else{
    mybox.style.visibility = "hidden";
    button.textContent = "Show";
  }
})








/*document.addEventListener("keydown", event=> {
  document.body.style.backgroundColor = "blue";
})

document.addEventListener("keyup", event=> {
  document.body.style.backgroundColor = "white";
})*/


