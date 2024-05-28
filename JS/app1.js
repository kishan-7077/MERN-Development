for (let i = 1; i <= 15; i++) {
  if (i % 2 != 0) {
    console.log(i);
  }
}
console.log("Even");
for (let i = 1; i <= 10; i++) {
  if (i % 2 == 0) {
    console.log(i);
  }
}
console.log("Multiplication table");
for (let i = 1; i <= 10; i++) {
  console.log(`5 x ${i} = ${5 * i}`);
}

// let favMovie = "raw";
// let guess = prompt("guess movie");

// while (guess != favMovie && guess != "quit") {
//   guess = prompt("wrong guess try again");
// }

let fruits = ["mango", "apple", "banana", "orange"];
for (let i = 0; i < fruits.length; i++) {
  console.log(i, fruits[i]);
}
