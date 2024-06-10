function hello() {
  console.log("hii");
}

function printName() {
  console.log("me");
}

printName();

function rollDice() {
  let num = Math.floor(Math.random() * 6) + 1;
  console.log(num);
}

function add(a1, a2) {
  return a1 + a2;
}

let a1 = 10,
  a2 = 20;
let sum = add(a1, a2);
console.log(sum);

console.log("--------------");

function sumOfN(n) {
  let ans = 0;
  for (let i = 1; i <= n; i++) {
    ans += i;
  }
  return ans;
}

let n = 5;
console.log(sumOfN(n));

console.log("---------------");

function concat(str) {
  let result = "";

  for (let i = 0; i < str.length; i++) {
    result += str[i];
  }

  return result;
}

let str = ["hi", "hello", "bye"];

console.log(concat(str));

console.log("----------------");

function multipleGreet(func, count) {
  for (let i = 1; i <= count; i++) {
    func();
  }
}

let greet = function () {
  console.log("hello");
};

multipleGreet(greet, 10);

console.log("------------------");

function oodEvenTest(request) {
  if (request == "odd") {
    return function (n) {
      console.log(!n % 2 == 0);
    };
  } else if (request == "even") {
    return function (n) {
      console.log(n % 2 == 0);
    };
  } else {
    console.log("wrong request!");
  }
}

let request = "odd";

console.log("---------------");

let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let numb = 3;
function printLargest(arr, n) {
  let ans = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > n) {
      ans.push(arr[i]);
    }
  }

  return ans;
}

console.log("---------------");

let st = "abcdabcdefgggh";

function extractUnique(str) {
  let n = str.length;
  let ans = "";
  for (let i = 0; i < n; i++) {
    let currChar = str[i];
    if (ans.indexOf(currChar) == -1) {
      ans += currChar;
    }
  }
  return ans;
}

extractUnique(st);

let country = ["Australia", "Germany", "United States of America"];

function longestCountry(country) {
  let max = 0;
  for (let i = 0; i < country.length; i++) {
    if (country[i].length >= max) {
      max = i;
    }
  }

  return country[max];
}

function countVovel(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (
      str.charAt(i) == "a" ||
      str.charAt(i) == "e" ||
      str.charAt(i) == "i" ||
      str.charAt(i) == "o" ||
      str.charAt(i) == "u"
    ) {
      count++;
    }
  }

  return count;
}

function generateRandom(start, end) {
  let diff = end - start;
  return Math.floor(Math.random() * diff) + start;
}

console.log("1");
console.log("1");
try {
  console.log(a);
} catch (error) {
  console.log("caught error : a is not defined");
}
console.log("2");
console.log("2");
console.log("2");

console.log("----------------");

const s = (a, b) => {
  console.log(a + b);
};

const cube = (n) => {
  return n * n * n;
};

const pow = (a, b) => a ** b;

// console.log("hi there!");

// setTimeout(() => {
//   console.log("Apna College");
// }, 2000);

// console.log("Welcome to ");

const mul = (n) => n * n;

// let id = setInterval(() => {
//   console.log("Hello");
// }, 2000);

// setTimeout(() => {
//   clearInterval(id);
//   console.log("clear interval ran");
// }, 10000);

let nums = [1, 2, 3, 4, 5];
function arrayAverage(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
  }
  return sum / arr.length;
}

const isEven = (n) => n % 2 == 0;
let evenNums = nums.filter((el) => el % 2 == 0);

let [win, runnerup, ...others] = nums;
console.log(win, runnerup);
