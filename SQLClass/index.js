const { faker, tr } = require("@faker-js/faker");
const mysql = require("mysql2");
const express = require("express");
const app = express();
const path = require("path");
const methodOverride = require("method-override");

app.use(methodOverride("_method"));
app.use(express.urlencoded({ extended: true }));

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.static(path.join(__dirname, "public")));

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  database: "delta_app",
  password: "Kishan@7077",
});

let getRandomUser = () => {
  return [
    faker.string.uuid(),
    faker.internet.userName(),
    faker.internet.email(),
    faker.internet.password(),
  ];
};

// let q = "SHOW TABLES";

// let q2 = "INSERT INTO user (id,username,email,password) VALUES ?";

// let data = [];
// for (let i = 1; i <= 100; i++) {
//   data.push(getRandomUser()); //100 fake users
// }

// try {
//   connection.query(q2, [data], (err, result) => {
//     if (err) throw err;
//     console.log(result);
//   });
// } catch (err) {
//   console.log(err);
// }

// connection.end();

// home route
app.get("/", (req, res) => {
  let q = "SELECT count(*) FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let count = result[0]["count(*)"];
      res.render("home.ejs", { count });
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// show route
app.get("/user", (req, res) => {
  let q = "SELECT * FROM user";
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let datas = result;
      // console.log(datas);
      res.render("users.ejs", { datas });
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// edit route
app.get("/user/:id/edit", (req, res) => {
  let { id } = req.params;
  let q = `SELECT * FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      res.render("edit.ejs", { user });
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// UPDATE route
app.patch("/user/:id", (req, res) => {
  let { id } = req.params;
  let { password: formPass, username: newUsername } = req.body;
  let q = `SELECT * FROM user WHERE id = '${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      let user = result[0];
      if (formPass != user.password) {
        res.send("WRONG password");
      } else {
        let q2 = `UPDATE user SET username ='${newUsername}' WHERE id='${id}'`;
        connection.query(q2, (err, result) => {
          if (err) throw err;
          res.redirect("/user");
        });
      }
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// Add new user
app.get("/user/new", (req, res) => {
  res.render("new.ejs");
});
app.post("/user", (req, res) => {
  let { username, email, password } = req.body;
  let id = faker.string.uuid();

  let q = `INSERT INTO user (id,username,email,password) VALUES ("${id}","${username}","${email}","${password}")`;

  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some error occured");
  }
});

// delete user
app.delete("/user/:id", (req, res) => {
  let { id } = req.params;
  console.log(id);
  let q = `DELETE FROM user WHERE id='${id}'`;
  try {
    connection.query(q, (err, result) => {
      if (err) throw err;
      console.log(result);
      res.redirect("/user");
    });
  } catch (err) {
    res.send("some err occured");
  }
});

app.listen("8080", () => {
  console.log("listening to 8080");
});
