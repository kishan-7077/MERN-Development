const express = require("express");
const app = express();
const users = require("./routes/user.js");
const posts = require("./routes/posts.js");
const session = require("express-session");
const flash = require("connect-flash");
const path = require("path");
// const cookieParser = require("cookie-parser");

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

// app.use(cookieParser("secretcode"));

// app.get("/getsignedcookies", (req, res) => {
// 	res.cookie("made-in", "India", { signed: true });
// 	res.send("signed cookie send");
// });

// app.get("/verify", (req, res) => {
// 	console.log(req.signedCookies);
// 	res.send("verified");
// });

// app.get("/getcookies", (req, res) => {
// 	res.cookie("greet", "hello");
// 	res.cookie("made In", "namaste");
// 	res.send("You send some cookies!");
// });

// app.get("/greet", (req, res) => {
// 	let { name = "anonyms" } = req.cookies;
// 	res.send(`Hi , ${name}`);
// });

// app.get("/", (req, res) => {
// 	console.dir(req.cookies);
// 	res.send("Hi, I am root");
// });

// app.use("/users", users);
// app.use("/posts", posts);

app.use(
	session({
		secret: "mysupersecreatstring",
		resave: false,
		saveUninitialized: true,
		// cookie: { secure: true },
	})
);

app.use(flash());

app.use((req, res, next) => {
	res.locals.successMsg = req.flash("success");
	res.locals.errorMsg = req.flash("error");
	next();
});

app.get("/register", (req, res) => {
	let { name = "anonymous" } = req.query;
	req.session.name = name;

	if (name == "anonymous") {
		req.flash("error", "user not registered!");
	} else {
		req.flash("success", "user registered successfully!");
	}
	res.redirect("/hello");
});

app.get("/hello", (req, res) => {
	res.render("page.ejs", { name: req.session.name });
});

// app.get("/reqcount", (req, res) => {
// 	if (req.session.count) {
// 		req.session.count++;
// 	} else {
// 		req.session.count = 1;
// 	}

// 	res.send(`You sent a request ${req.session.count} times`);
// });

// app.get("/test", (req, res) => {
// 	res.send("test successfull");
// });

app.listen(3000, () => {
	console.log("listening to port:" + 3000);
});
