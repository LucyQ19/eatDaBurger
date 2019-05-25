var mysql = require("mysql");

if (process.env.JAWSDB_URL) {
    connection = mysql.createConnection(process.env.JAWSDB_URL);
} else {
    connection = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "9102QycuL",
        database: "burgers_db"
    });
};

connection.connect(function(err) {
    if (err) {

        console.log(`There has been an error in connecting: ${err.stack}`);
        
    } else 

        console.log(`You are connected as id: ${connection.threadId}`);

});

module.exports = connection;