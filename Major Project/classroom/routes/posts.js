const express = require("express");
const router = express.Router();

// Posts
// Index -
router.get("/", (req, res) => {
	res.send("Get for posts");
});

// Show -
router.get("/:id", (req, res) => {
	res.send("Get for post id");
});

// Post -
router.post("/", (req, res) => {
	res.send("Post for posts");
});

// Delete -
router.delete("/:id", (req, res) => {
	res.send("Delete for posts");
});

module.exports = router;
