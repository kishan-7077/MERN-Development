const post = {
  username: "@kishan",
  content: "This is #firstPost",
  likes: 150,
  reposts: 5,
  tags: ["@kpgu", "@IT"],
};

const student = {
  name: "kishan",
  age: 23,
  marks: 92,
  city: "silvassa",
};

const classInfo = {
  kishan: {
    grade: "A+",
    city: "Delhi",
  },
  vidit: {
    grade: "B+",
    city: "Silvassa",
  },
  yash: {
    grade: "C+",
    city: "Vadodara",
  },
};

const classInfoArray = [
  {
    name: "kishan",
    grade: "A+",
    city: "Delhi",
  },
  {
    name: "vidit",
    grade: "B+",
    city: "Silvassa",
  },
  {
    name: "yash",
    grade: "C+",
    city: "Vadodara",
  },
];

// let num = Math.random();
// num = num * 10;
// num = Math.floor(num);
// num = num + 1;

let num = prompt("Enter the max range : ");

let guess = prompt(`Guess the random number b/w 1 to ${num}`);

num = Math.floor(Math.random() * num) + 1;

while (true) {
  if (num == guess) {
    alert("you  guessed right!");
    break;
  } else if (guess < num) {
    guess = prompt("guess is small try again");
  } else if (guess > num) {
    guess = prompt("guess is large try again");
  }
}
