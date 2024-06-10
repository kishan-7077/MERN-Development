let div = document.querySelector("#test");
let ul = document.querySelector("#test ul");
let lis = document.querySelectorAll("#test li");

div.addEventListener("click", function () {
  console.log("div was clicked");
});

ul.addEventListener("click", function (e) {
  e.stopPropagation();
  console.log("ul was clicked");
});

for (let li of lis) {
  li.addEventListener("click", function (e) {
    e.stopPropagation();
    console.log("li was clicked");
  });
}

let inp = document.querySelector("#inptasks");
let btn = document.querySelector("#addbtn");
let ul1 = document.querySelector("#taskList");

btn.addEventListener("click", function () {
  let item = document.createElement("li");
  item.innerText = inp.value;

  let delbtn = document.createElement("button");
  delbtn.innerText = "Remove";
  delbtn.classList.add("btn", "btn-outline-danger", "btn-sm", "delbtn");

  ul1.appendChild(item);
  item.appendChild(delbtn);
  inp.value = "";
});

ul1.addEventListener("click", function (e) {
  if (e.target.nodeName == "BUTTON") {
    let listItem = e.target.parentElement;
    listItem.remove();
  }
});

// let delbtns = document.querySelectorAll(".delbtn");
// for (let delbtn of delbtns) {
//   delbtn.addEventListener("click", function () {
//     let par = this.parentElement;
//     console.log(par);
//     par.remove();
//   });
// }
