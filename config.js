var mysql = require('mysql');

const connection = mysql.createConnection({
    host     : 'localhost',
    user     : 'root',
    password : '',
    database : 'marquis-elegance'
});

// const connection = mysql.createConnection({
//         host     : 'localhost',
//         user     : 'marquis_elegance_admin',
//         password : 'marquis_elegance_admin',
//         database : 'marquis-elegance-db'
//     });



connection.connect(function(err) {
    if (err) throw err;
    console.log("Connected!");
});

module.exports = connection;