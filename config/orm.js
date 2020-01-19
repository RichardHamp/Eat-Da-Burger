//Requirements
const connection = require("./connection.js");

//Creates Object Relational Mapper (orm) with all three required methods within to receive data from model
var orm = {

	selectAll: function (table, cb) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [table], function (err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	insertOne: function (table, column, burger, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [table, column, burger], function (err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	updateOne: function (colVal, id, callback) {
		var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
		connection.query(queryString, [id], function (err, result) {

			if (err) throw err;

			callback(result);
		});
	},

};

module.exports = orm;