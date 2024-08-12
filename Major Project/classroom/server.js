const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/posts.js");
const cookieParser = require("cookie-parser");

app.use(cookieParser("secretcode"));

app.get("/getsignedcookies", (req, res) => {
	res.cookie("made-in", "India", { signed: true });
	res.send("signed cookie send");
});

app.get("/verify", (req, res) => {
	console.log(req.signedCookies);
	res.send("verified");
});

app.get("/getcookies", (req, res) => {
	res.cookie("greet", "hello");
	res.cookie("made In", "namaste");
	res.send("You send some cookies!");
});

app.get("/greet", (req, res) => {
	let { name = "anonyms" } = req.cookies;
	res.send(`Hi , ${name}`);
});

app.get("/", (req, res) => {
	console.dir(req.cookies);
	res.send("Hi, I am root");
});

app.use("/users", users);
app.use("/posts", posts);

app.listen(3000, () => {
	console.log("listening to port:" + 3000);
});
