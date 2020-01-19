const connection = require("./connection.js");

var orm = {

	selectAll: function(table, cb) {
		var queryString = "SELECT * from ??";
		connection.query(queryString, [table], function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	insertOne: function(table, column, burger, cb) {
		var queryString = "INSERT INTO ?? (??) VALUES (?)";
		connection.query(queryString, [table, column, burger], function(err, res) {
			if (err) {
				throw err;
			}
			cb(res);
		});
	},

	// updateOne: function(table, updateColumn, updateRowVal, searchColumn, searchRowVal, cb) {
	// 	var queryString = "UPDATE ?? SET ?? = ? WHERE ?? = ?";
	// 	connection.query(queryString, [table, updateColumn, updateRowVal, searchColumn, searchRowVal], function(err, res) {
	// 		if (err) {
	// 			throw err;
	// 		}
	// 		cb(res);
	// 	});
	// }
	updateOne: function(colVal, id, callback) {
		var queryString = "UPDATE burgers SET devoured='1' WHERE " + id + ";";
			connection.query(queryString, [id], function(err, result) {
		  
				if (err) throw err;
		  
			callback(result);
			});
		},
		deleteOne: function(id, callback) {
			var queryString = "DELETE FROM burgers WHERE " + id + ";";
			connection.query(queryString, [id], function(err, res) {
				if (err) throw err;
				callback(res);
			});
		},
};

module.exports = orm;