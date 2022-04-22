const mysql = require('mysql');

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'admin',
    database: 'apirest'
}
);

connection.connect(error =>{
    if (error) {
        throw error;
    }
    console.log("database server connect!");
});

module.exports.connect = connection;

