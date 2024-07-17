const mongoose = require("mongoose");
const initdata = require("./data.js");
const Listing = require("../models/listing.js");

main()
  .then(() => {
    console.log("connected to DB");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/wanderLust");
}

const initDB = async () => {
  try {
    await Listing.deleteMany({});
    await Listing.insertMany(initdata.data);
    console.log("data was initialized");
  } catch (err) {
    console.error("Error initializing data:", err);
  }
};

initDB();
