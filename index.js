const mysql = require('mysql');
const app = require("./app");
const port = process.env.PORT||3977;
const connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: ""
});

connection.connect(function(err) {
    if (err) {throw err;}
    else{
        console.log("Connected!");
        app.listen(port,function(){
            console.log("servidor del api rest escuchando en HTTP://localhost:"+port)
        });
    }
});

module.exports = connection;
