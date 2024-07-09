const express = require("express");
const app = express();
const port = 8080;
const path = require("path");
const mysql = require("mysql2");
const { faker } = require("@faker-js/faker");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "Kishan@7077",
  database: "social_media_app",
});

app.use(express.static(path.join(__dirname, "public")));
app.use(express.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// login route
app.get("/user/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/home", (req, res) => {
  let { fname, lname, email, password, gender } = req.body;
  let id = faker.string.uuid();
  let q = `INSERT INTO user VALUES ("${id}","${fname}","${lname}","${gender}","${email}","${password}")`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.render("home.ejs", { id, fname });
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// home route
// app.get("/home", (req, res) => {
//   res.send("home route");
// });

app.listen(port, (req, res) => {
  console.log(`listening to port : ${port}`);
});
