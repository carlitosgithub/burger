
var orm = require("../config/orm.js");


var burger = {
	// Select everything from the burgers table
	selectAll: function (table, cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},
	insertOne: function (colName, valOfCol, cb) {
		orm.insertOne("burgers", colName, valOfCol, function (res) {
			cb(res);
		});
	},
	updateOne: function (valOfCol, condition, cb) {
		orm.updateOne("burgers", valOfCol, condition, function (res) {
			cb(res);
		});
	},
	deleteOne: function (condition, cb) {
		orm.deleteOne("burgers", condition, function (res) {
			cb(res);
		});
	}
};

module.exports = burger;
