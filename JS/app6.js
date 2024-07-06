async function greet() {
  //   throw "poor connection";
  return "hello world!"; // returns a promise
}

greet()
  .then((result) => {
    console.log("resolved");
    console.log(result);
  })
  .catch((err) => {
    console.log("rejected error :", err);
  });

// let demo = async () => {
//   return 5;
// };

function getNum() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let num = Math.floor(Math.random() * 10) + 1;
      console.log(num);
      resolve();
    }, 1000);
  });
}

async function demo() {
  await getNum();
  await getNum();
  await getNum();
}
