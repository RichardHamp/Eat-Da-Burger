const express = require("express");
const router = express.Router();
const burger = require("../models/burger.js");

router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var bData = {
			burgers: data
		};
		res.render("index", bData);
	});
});

router.post("/", function(req, res) {
	if(req.body.burger_name !== "") {
		burger.insertOne(req.body.burger_name.trim(), function() {
			res.redirect("/");
		});
	}
});

router.put("/:id", function(req, res) {
	console.log(req.params.id);
	burger.updateOne(req.params.id, function() {
		res.redirect("/");
	});
})

module.exports = router;