
var express = require("express");
var burger = require("../models/burger.js");
var router = express.Router();

router.get("/", function (req, res) {
	burger.selectAll("burgers", function (data) {
		var burgerDataObj = {
			burgers: data
		};
		console.log(burgerDataObj);
		res.render("index", burgerDataObj);
	});
});

router.post("/api/burgers", function (req, res) {
	burger.insertOne("burger_name", [req.body.burger], function (err, result) {
		if (err) {
			console.log(err)
		}
		console.log("hitting post route")
		res.redirect("/");
	});
});

router.put("/api/burgers/:id", function (req, res) {
	var condition = "id = " + req.params.id;
	console.log("condition", condition);
	console.log(req.params.id);
	burger.updateOne({ devoured: req.body.devoured }, condition, function (result) {
		if (result.changedRows == 0) {
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

router.delete("/api/burgers/:id", function (req, res) {
	var condition = "id = " + req.params.id;
	console.log(condition);

	

	burger.deleteOne(condition, function (result) {
		if (result.changeRows === 0) {
			// If no rows were changed, then the ID must not exist, so 404
			return res.status(404).end();
		} else {
			res.status(200).end();
		}
	});
});

module.exports = router;