const express = require("express");
const app = express();

let port = 3000; // 8080

app.listen(port, () => {
  console.log("app listening on port ", port);
});

// app.use((req, res) => {
//   console.log("request received");
//   res.send({
//     fruit: "apple",
//     color: "red",
//   });
// });

app.get("/", (req, res) => {
  res.send("hi i am root");
});

// app.get("/apple", (req, res) => {
//   res.send("you contacted apple path");
// });

// app.get("/orange", (req, res) => {
//   res.send("you contacted orange path");
// });

// app.get("*", (req, res) => {
//   res.send("this path does not exist");
// });

// app.post("/", (req, res) => {
//   res.send("hello i am root");
// });

app.get("/:username/:id", (req, res) => {
  let { username, id } = req.params;
  res.send(`Welcome to the page of @${username}`);
});

app.get("/search", (req, res) => {
  let { q } = req.query;

  res.send(`search results for query : ${q}`);
});
