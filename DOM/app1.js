let btn = document.querySelector("button");

btn.addEventListener("click", function () {
  let head = document.querySelector("h1");
  let color = generateColor();
  head.innerText = color;

  let div = document.querySelector("div");
  div.style.backgroundColor = color;

  this.style.backgroundColor = color;
});

function generateColor() {
  let red = Math.floor(Math.random() * 255);
  let green = Math.floor(Math.random() * 255);
  let blue = Math.floor(Math.random() * 255);

  let color = `rgb(${red}, ${blue}, ${green})`;
  return color;
}

let para = document.querySelector("#para");

para.addEventListener("click", () => {
  console.log("para clicked");
});

let box = document.querySelector("#box");
box.addEventListener("mouseenter", () => {
  console.log("mouse enters");
});

let btn2 = document.querySelector("#btn2");
let para2 = document.querySelector("#para2");
let h2 = document.querySelector("h2");
let h3 = document.querySelector("h3");

function changeColor() {
  console.dir(this.innerText);
  this.style.backgroundColor = "blue";
}
function revertColor() {
  this.style.backgroundColor = "white";
}

btn2.addEventListener("click", changeColor);
btn2.addEventListener("dblclick", revertColor);
para3.addEventListener("click", changeColor);
para3.addEventListener("dblclick", revertColor);

h2.addEventListener("click", changeColor);
h2.addEventListener("dblclick", revertColor);

h3.addEventListener("click", changeColor);
h3.addEventListener("dblclick", revertColor);

let inp = document.querySelector("input");
inp.addEventListener("keydown", (event) => {
  console.log("code = ", event.code);
  console.log("key = ", event.key);
  console.log("key was presed");
});
inp.addEventListener("keyup", () => {
  console.log("key was released");
});

let form = document.querySelector("form");

form.addEventListener("submit", function (event) {
  event.preventDefault();

  //   // let userName = document.querySelector("#user");
  //   // let pass = document.querySelector("#pass");

  //   let userName = this.elements[0];
  //   let pass = this.elements[1];

  //   console.dir(userName.value);
  //   console.dir(pass.value);

  //   alert(`Hi! ${userName.value}, your password is set to "${pass.value}"`);
});

let userName = document.querySelector("#user");
let pass = document.querySelector("#pass");

userName.addEventListener("input", function () {
  console.log("input changed");
  console.log("user =", this.value);
});
pass.addEventListener("input", function () {
  console.log("input changed");
  console.log("pass =", this.value);
});

let text = document.querySelector("#inpText");
let p = document.querySelector("#outText");
text.addEventListener("input", function () {
  p.innerText = text.value;
  console.log(text.value);
});

function savetoDb(data, success, faliure) {
  let internetSpeed = Math.floor(Math.random() * 10);

  if (internetSpeed > 4) {
    success(data);
  } else {
    faliure();
  }
}

savetoDb(
  "kishan",
  (data) => {
    console.log("your data1 was saved : ", data);
    savetoDb(
      "kalpesh",
      (data) => {
        console.log("your data2 was saved : ", data);
        savetoDb(
          "chetna",
          (data) => {
            console.log("your data3 was saved : ", data);
          },
          () => {
            console.log("weak connection data not saved");
          }
        );
      },
      () => {
        console.log("weak connection data not saved");
      }
    );
  },
  () => {
    console.log("weak connection data not saved");
  }
);
