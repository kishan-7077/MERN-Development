const express = require("express");
const router = express.Router({ mergeParams: true });
const wrapAsync = require("../utils/wrapAsync.js");
const ExpressError = require("../utils/ExpressError.js");
const { reviewSchema } = require("../schema.js");

const reviewController = require("../controllers/reviews.js");

const validateReview = (req, res, next) => {
	let { error } = reviewSchema.validate(req.body);
	if (error) {
		let errMsg = error.details.map((el) => el.message).join(",");
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};

// Reviews
//Post Reviews Route
router.post("/", validateReview, reviewController.createReview);

// Delete Reviews Route
router.delete("/:reviewId", wrapAsync(reviewController.destroyReview));

module.exports = router;
