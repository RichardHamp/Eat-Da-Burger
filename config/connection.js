//Requirements
const mysql = require("mysql");

//Connection with requirements for Heroku
// var connection;
if (process.env.JAWSDB_URL) {
  connection = mysql.createConnection(process.env.JAWSDB_URL);
  console.log("process.env.JAWSDB_URL = " + process.env.JAWSDB_URL);
} 
else {
 connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "burgers_db",
  // port: '3309'
});
};

// connection.connect();

//Throws error or gives connected thread id
connection.connect(function(err) {
  if (err) {
    console.error("error connecting: " + err.stack);
    return;
  }
  console.log("connected as id " + connection.threadId);
});

console.log({
  host            : process.env.MYSQL_HOST,
  user            : process.env.MYSQL_USER,
  password        : process.env.MYSQL_SECRET,
  database        : process.env.MYSQL_DB
})
  
module.exports = connection;