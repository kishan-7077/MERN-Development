const Listing = require("./models/listing");

module.exports.isLoggedIn = (req, res, next) => {
	if (!req.isAuthenticated()) {
		req.session.redirectUrl = req.originalUrl;
		req.flash("error", "you must be logged in to use this");
		return res.redirect("/login");
	}
	next();
};

module.exports.saveRedirectUrl = (req, res, next) => {
	if (req.session.redirectUrl) {
		res.locals.redirectUrl = req.session.redirectUrl;
	}
	next();
};

module.exports.isOwner = async (req, res, next) => {
	let { id } = req.params;
	let listing = await Listing.findById(id);
	const currUser = req.user;
	if (!listing.owner.equals(currUser.id)) {
		req.flash("error", "You dont have permission to edit");
		return res.redirect(`/listings/${id}`);
	}

	next();
};
