const mongoose = require("mongoose");
const initdata = require("./data.js");
const reviewD = require("./reviewdata.js");
const Listing = require("../models/listing.js");
// const Review = require("../models/review.js");

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
		initdata.data = initdata.data.map((obj) => ({
			...obj,
			owner: "66bb91624952400c7408b891",
		}));
		await Listing.insertMany(initdata.data);
		console.log("data was initialized");
	} catch (err) {
		console.error("Error initializing data:", err);
	}
};

initDB();

// const initReview = async () => {
// 	try {
// 		let post = await Listing.findById("66b5fc63e99b1bb97095ee3b");
// 		const insertedReviews = await Review.insertMany(reviewD.data);
// 		post.reviews = insertedReviews.map((review) => review._id);
// 		await post.save();
// 	} catch (err) {
// 		console.error("Error in inserting data:", err);
// 	}
// };

// initReview();
