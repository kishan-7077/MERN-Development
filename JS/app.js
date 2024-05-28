console.log("Hello World");
console.log("New");
let a = 10;
let b = 5;
console.log(a + b);

console.log("Price of is : " + (a + b));

let output = `The total of ${a} and ${b} is : ${a + b}`;
console.log(`The total of ${a} and ${b} is : ${a + b}`);

let color = "red";

if (color == "red") {
  console.log(`Stop! color : ${color}`);
} else if (color == "yellow") {
  console.log("slow down");
} else {
  console.log("Go");
}

let str = "aman";
if (str.length > 3 && str.charAt(0) == "a") {
  console.log("good string");
} else {
  console.log("Bad string");
}

// alert("alert");
// console.warn("this is warn");
// let roll = prompt("Enter roll no : ");
// console.log(roll);

// let firstName = prompt("Enter first name : ");
// let lastName = prompt("Enter last name : ");

// alert(`Welcome.. ${firstName} ${lastName}`);

console.log("Assignment Qs starts ->");

console.log("Q1 -> ");
let num = 50;
if (num % 10 == 0) {
  console.log("good");
} else {
  console.log("bad");
}
console.log("Q2 -> ");
// let nane = prompt("Enter name : ");
// let age = prompt("Enter age :");
// alert(`${nane} is ${age} years old`);
console.log("Q3 -> ");
let quater = prompt("Enter quater");
switch (quater) {
  case "1":
    console.log("Jan,Feb,Mar");
    break;
  case "2":
    console.log("Apr,May,Jun");
    break;
  case "3":
    console.log("Jul,Aug,Sept");
    break;
  case "4":
    console.log("Oct,Nov,Dec");
    break;
}
console.log("Q4 - > ");
let one = "32";
let two = "47852";
if (one.charAt(one.length - 1) == two.charAt(two.length - 1)) {
  console.log("true");
} else {
  console.log("false");
}
