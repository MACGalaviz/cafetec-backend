const mysql = require("mysql");
const sql = require("../mysql/user");
const model = require("../models/user");

function getAll(req, res) {
    // Create connection
    const conecction = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cafetecdb"
    });
    conecction.connect(function(err) {
        // Connection Failed
        if (err) res.status(200).send({"conecction": "Fallo en la conexión con la base de datos."});
        // Get users
        conecction.query(sql.getAll, function (err, result) {
            // String to JSON
            const json = JSON.stringify(result);
            // Send JSON
            res.send(json);
        });
        // End connection
        conecction.end();
    });
}

// Function to get user by id
function getById(req, res) {
    // id param
    const id = req.params.id;
    /*// See id TODO Temporal
    console.log(id);*/
    // Create connection
    const conecction = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cafetecdb"
    });
    conecction.connect(function(err) {
        // Connection Failed
        if (err) res.status(200).send({"conecction": "Fallo en la conexión con la base de datos."});
        // Get user by id
        conecction.query(sql.getById,[id], function (err, result) {
            // String to JSON
            const json = JSON.stringify(result);
            // Send JSON
            res.send(json);
        });
        // End connection
        conecction.end();
    });
}

// Function to post user
function post(req, res) {
    // New model
    let user = new model();
    // Params
    const body = req.body;
    // See params TODO Temporal
    console.log(body);
    user.control_number = body.control_number;
    user.password = body.password;
    user.role_id = body.role_id;
    // Create connection
    const conecction = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cafetecdb"
    });
    conecction.connect(function(err) {
        // Connection Failed
        if (err) res.status(200).send({"conecction": "Fallo en la conexión con la base de datos."});
        // Post user
        conecction.query(sql.post,[user.control_number,user.password,user.role_id], function (err, result) {
            // if error
            if(err){res.status(200).send(err);}
            // if not
            else{res.status(200).send(result);}
        });
        // End connection
        conecction.end();
    });
}

// Function to update user
function patch(req, res) {
    // id param
    const id = req.params.id;
    // New model
    let user = new model();
    // Params
    const body = req.body;
    /*// See params TODO Temporal
    console.log(body);*/
    user.id = id;
    user.control_number = body.control_number;
    user.password = body.password;
    user.status = body.status;
    // Create connection
    const conecction = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cafetecdb"
    });
    if (user.status === undefined)
    {
        conecction.connect(function(err) {
            // Connection Failed
            if (err) res.status(200).send({"conecction": "Fallo en la conexión con la base de datos."});
            // Post user
            conecction.query(sql.patch,[user.control_number,user.password,user.id], function (err, result) {
                // if error
                if(err){res.status(200).send(err);}
                // if not
                else{res.status(200).send(result);}
            });
            // End connection
            conecction.end();
        });
    }
    else {
        conecction.connect(function(err) {
            // Connection Failed
            if (err) res.status(200).send({"conecction": "Fallo en la conexión con la base de datos."});
            // Post user
            conecction.query(sql.patchStatus,[user.status,user.id], function (err, result) {
                // if error
                if(err){res.status(200).send(err);}
                // if not
                else{res.status(200).send(result);}
            });
            // End connection
            conecction.end();
        });
    }

}


module.exports = {
    getAll,
    getById,
    post,
    patch
};
