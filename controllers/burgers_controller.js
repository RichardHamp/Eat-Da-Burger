//Requirements
const express = require("express");
const burger = require("../models/burger.js");
//Express Routing
const router = express.Router();

//Get Request
router.get("/", function(req, res) {
	burger.selectAll(function(data) {
		var bData = {
			burgers: data
		};
		res.render("index", bData);
	});
});

//Post Request--Creates a Burger & Ensures a Non-Empty String
router.post("/", function(req, res) {
	if(req.body.burger_name !== "") {
		burger.insertOne(req.body.burger_name.trim(), function() {
			res.redirect("/");
		});
	}
});

//Put Request--Updates Table
// router.put("/:id", function(req, res) {
// 	console.log(req.params.id);
// 	burger.updateOne(req.params.id, function() {
// 		res.redirect("/");
// 	});
// })
router.post("/:id", function (req, res) {
    // holds burgers being devoured 
    var condition = "id = " + req.params.id;
    burger.updateOne({
        // Use updateOne from burger.js
        devoured: req.body.devoured
    }, condition, function () {
        //redirects it to main page                         
        res.redirect("/");
    });
});



module.exports = router;