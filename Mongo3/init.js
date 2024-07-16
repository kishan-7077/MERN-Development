const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection successfull");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
  {
    from: "neha",
    to: "priya",
    msg: "how are you",
    created_at: new Date(),
  },
  {
    from: "raftaar",
    to: "hardik",
    msg: "where were you?",
    created_at: new Date(),
  },
  {
    from: "Kr$na",
    to: "Samay",
    msg: "what is up my G.",
    created_at: new Date(),
  },
  {
    from: "Divine",
    to: "Emiway",
    msg: "Chote acche se baat kar",
    created_at: new Date(),
  },
  {
    from: "MC Stan",
    to: "Emiway",
    msg: "Kya re bachkane.",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
