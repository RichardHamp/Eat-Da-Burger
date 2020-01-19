//Requirements
const orm = require("../config/orm.js");

//Passing in query parameters as required by ORM
var burger = {

	selectAll: function (cb) {
		orm.selectAll("burgers", function (res) {
			cb(res);
		});
	},

	insertOne: function (burgerName, cb) {
		orm.insertOne("burgers", "burger_name", burgerName, function (res) {
			cb(res);
		});
	},

	updateOne: function (colVal, id, cb) {
		orm.updateOne(colVal, id, function (res) {
			cb(res);
		});
	},
};

module.exports = burger;