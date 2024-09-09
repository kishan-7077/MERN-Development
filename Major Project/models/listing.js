const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const Review = require("./review.js");

const listingSchema = new Schema({
	title: {
		type: String,
		required: true,
	},
	description: String,
	image: {
		// url: {
		// 	type: String,
		// 	default:
		// 		"https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
		// 	set: (v) =>
		// 		v === ""
		// 			? "https://images.unsplash.com/32/Mc8kW4x9Q3aRR3RkP5Im_IMG_4417.jpg?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
		// 			: v,
		// },
		url: String,
		filename: String,
	},
	price: Number,
	location: String,
	country: String,
	reviews: [
		{
			type: Schema.Types.ObjectId,
			ref: "Review",
		},
	],
	owner: {
		type: Schema.Types.ObjectId,
		ref: "User",
	},
	geometry: {
		type: {
			type: String, // Don't do `{ location: { type: String } }`
			enum: ["Point"], // 'location.type' must be 'Point'
			required: true,
		},
		coordinates: {
			type: [Number],
			required: true,
		},
	},
});

listingSchema.post("findOneAndDelete", async (listing) => {
	if (listing) {
		await Review.deleteMany({ _id: { $in: listing.reviews } });
	}
});

const Listing = mongoose.model("Listing", listingSchema);

module.exports = Listing;
