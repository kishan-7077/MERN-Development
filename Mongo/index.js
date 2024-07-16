const mongoose = require("mongoose");

main()
  .then(() => {
    console.log("connection successful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/test");
}

const userSchema = new mongoose.Schema({
  name: String,
  email: String,
  age: Number,
});

const User = mongoose.model("User", userSchema);
const Employee = mongoose.model("Employee", userSchema);

// const user1 = new User({
//   name: "Adam",
//   email: "adam@yahoo.com",
//   age: 48,
// });
// const user2 = new User({
//   name: "kishan",
//   email: "kishan@gmail.com",
//   age: 20,
// });

// user1
//   .save()
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findOne({ age: { $gte: 48 } })
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => {
//     console.log(err);
//   });

// User.findById("669150ba803c87e79333d249")
//   .then((res) => {
//     console.log(res);
//   })
//   .catch((err) => console.log(err));

// User.updateMany({ name: "Adam" }, { age: 99 })
//   .then((res) => console.log(res))
//   .catch((err) => console.log(err));

User.deleteMany({ name: "Adam" })
  .then((res) => console.log(res))
  .catch((err) => console.log(err));
