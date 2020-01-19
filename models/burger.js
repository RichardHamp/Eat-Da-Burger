const orm = require("../config/orm.js");

var burger = {
	
	selectAll: function(cb) {
		orm.selectAll("burgers", function(res) {
			cb(res);
		});
	},

	insertOne: function(burgerName, cb) {
		orm.insertOne("burgers", "burger_name", burgerName, function(res) {
			cb(res);
		});
	},

	// updateOne: function(burgerId, cb) {
	// 	orm.updateOne("burgers", "devoured", 1, "id", burgerId, function(res) {
	// 		cb(res);
	// 	});
	// }
	   //update function
	   updateOne: function(colVal, id, cb) {
        orm.updateOne(colVal, id, function(res) {
            cb(res);
        });
    },

};

module.exports = burger;