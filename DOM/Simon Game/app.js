let gameSeq = [];
let userSeq = [];

var highest = 0;

let btns = ["red", "teal", "orange", "blue"];

let started = false;
let level = 0;
let h3 = document.querySelector("h3");
let h4 = document.querySelector("h4");
let body = document.querySelector("body");

h4.innerText = `Highest Score : ${highest}`;

document.addEventListener("keypress", function () {
  if (started == false) {
    console.log("game started");
    started = true;
    levelUp();
  }
});

function btnFlash(btn) {
  btn.classList.add("flash");
  setTimeout(() => {
    btn.classList.remove("flash");
  }, 500);
}

function userFlash(btn) {
  btn.classList.add("userflash");
  setTimeout(() => {
    btn.classList.remove("userflash");
  }, 200);
}

function levelUp() {
  userSeq = [];
  level++;
  h3.innerText = `Level ${level}`;

  // random btn choose
  let randIdx = Math.floor(Math.random() * 3);
  let randColor = btns[randIdx];
  let randbtn = document.querySelector(`.${randColor}`);
  //   console.log(randIdx);
  //   console.log(randColor);
  //   console.log(randbtn);
  gameSeq.push(randColor);
  console.log(gameSeq);
  btnFlash(randbtn);
}

function checkAns(idx) {
  //   console.log("curr level : ", level);
  //   let idx = level - 1;

  if (userSeq[idx] == gameSeq[idx]) {
    if (userSeq.length == gameSeq.length) {
      setTimeout(levelUp(), 1000);
    }
  } else {
    h3.innerHTML = `Game Over : Your score was <b>${level}</b> <br>Press any key to start`;
    highest = Math.max(highest, level);
    h4.innerText = `Highest Score : ${highest}`;
    console.log(highest);
    wrongFlash();
    reset();
  }
}

function wrongFlash() {
  body.classList.add("wrongflash");
  setTimeout(() => {
    body.classList.remove("wrongflash");
  }, 200);
}

function btnPress() {
  let btn = this;
  userFlash(btn);

  let userColor = btn.getAttribute("id");
  userSeq.push(userColor);

  checkAns(userSeq.length - 1);
}

let allBtns = document.querySelectorAll(".boxes");
for (let btn of allBtns) {
  btn.addEventListener("click", btnPress);
}

function reset() {
  started = false;
  gameSeq = [];
  userSeq = [];
  level = 0;
}
