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

// landing page
app.get("/", (req, res) => {
  res.render("landing.ejs");
});

// signup route
app.get("/signup", (req, res) => {
  res.render("signup.ejs");
});
app.post("/signup/home", (req, res) => {
  let { fname, lname, email, password, gender } = req.body;
  let id = faker.string.uuid();
  let q = `INSERT INTO user VALUES ("${id}","${fname}","${lname}","${gender}","${email}","${password}")`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      let user = req.body;
      res.render("home.ejs", { user });
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// login route
app.get("/login", (req, res) => {
  res.render("login.ejs");
});
app.post("/login/home", (req, res) => {
  let { email, password } = req.body;
  if (email === undefined || password === undefined) {
    res.render("error.ejs");
  } else {
    let q = "SELECT * FROM user WHERE email = ? AND password = ?";
    connection.query(q, [email, password], (err, result) => {
      if (err) {
        res.send("some error occurred");
        return;
      }
      if (result.length === 0) {
        res.send("wrong credentials");
      } else {
        let user = result[0];
        res.render("home.ejs", { user });
      }
    });
  }
});

app.listen(port, (req, res) => {
  console.log(`listening to port : ${port}`);
});
