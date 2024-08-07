const express = require("express");
const app = express();
const ExpressError = require("./ExpressError");

// app.use((req, res, next) => {
//   console.log("Hi, i am middleware");
//   next();
// });

// app.use((req, res, next) => {
//   console.log("Hi, i 2nd am middleware");
//   next();
// });

// logger
// app.use((req, res, next) => {
//   req.time = new Date(Date.now()).toString();
//   console.log(req.method, req.hostname, req.path, req.time);
//   next();
// });

app.use("/random", (req, res, next) => {
  console.log("I am only for random");
  next();
});

const checkToken = (req, res, next) => {
  let { token } = req.query;
  if (token === "giveaccess") {
    next();
  }
  throw new ExpressError(401, "Access Denied!");
};

//404

app.get("/api", checkToken, (req, res) => {
  res.send("data");
});

app.get("/err", (req, res) => {
  abcd = abcd;
});

app.get("/admin", (req, res) => {
  throw new ExpressError(402, "Access to admin is Forbidden");
});

app.use((err, req, res, next) => {
  let { status, message } = err;
  res.status(status).send(message);
});

// app.use((err, req, res, next) => {
//   console.log("------Error 2------");
//   next(err);
// });

app.get("/", (req, res) => {
  res.send("Hi, i am root");
});

app.get("/random", (req, res) => {
  res.send("this is a random page");
});

app.use((req, res) => {
  res.send("Page not found!");
});

app.listen(8080, () => {
  console.log("server listning to port 8080");
});
