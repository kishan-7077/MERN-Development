const express = require("express");
const router = express.Router();
const wrapAsync = require("../utils/wrapAsync.js");
const { listingSchema } = require("../schema.js");
const ExpressError = require("../utils/ExpressError.js");
const Listing = require("../models/listing.js");
const { isLoggedIn } = require("../middleware.js");

const validateListing = (req, res, next) => {
	let { error } = listingSchema.validate(req.body);
	if (error) {
		let errMsg = error.details.map((el) => el.message).join(",");
		throw new ExpressError(400, errMsg);
	} else {
		next();
	}
};

// Index Route
router.get("/", async (req, res) => {
	const allListings = await Listing.find();
	res.render("./listings/index.ejs", { allListings });
});

// New Route
router.get("/new", isLoggedIn, (req, res) => {
	res.render("./listings/new.ejs");
});

// Show Route
router.get("/:id", async (req, res) => {
	let { id } = req.params;
	const listing = await Listing.findById(id).populate("reviews");
	if (!listing) {
		req.flash("error", "Listing Doesn't Exist");
		res.redirect("/listings");
	}
	res.render("./listings/show.ejs", { listing });
});

// Create Route
router.post(
	"/",
	validateListing,
	isLoggedIn,
	wrapAsync(async (req, res, next) => {
		try {
			const newListing = new Listing(req.body.listing);
			await newListing.save();
			req.flash("success", "New Listing Created!");
			res.redirect("/listings");
		} catch (err) {
			next(err);
		}
	})
);

// Edit Route
router.get("/:id/edit", isLoggedIn, async (req, res) => {
	let { id } = req.params;
	const listing = await Listing.findById(id);
	if (!listing) {
		req.flash("error", "Listing Doesn't Exist");
		res.redirect("/listings");
	}
	res.render("./listings/edit.ejs", { listing });
});

// Update Route
router.put("/:id", isLoggedIn, async (req, res) => {
	let { id } = req.params;
	await Listing.findByIdAndUpdate(id, { ...req.body.listing });
	req.flash("success", "Listing Updated");
	res.redirect(`/listings/${id}`);
});

// Destroy Route
router.delete("/:id", isLoggedIn, async (req, res) => {
	let { id } = req.params;
	let deletedListing = await Listing.findByIdAndDelete(id);
	console.log(deletedListing);
	req.flash("success", "Listing Deleted");
	res.redirect("/listings");
});

module.exports = router;
