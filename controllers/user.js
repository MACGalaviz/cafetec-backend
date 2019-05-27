"strict"
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
    // New model
    let user = new model();
    // Params
    console.log(req.body)
    const body =req.body;
    // See params TODO Temporal
    console.log("body: "+body);
    user.control_number = body.control_number;
    user.password = body.password;
    console.log("user: "+user);
    /*// id param
    const id = req.params.id;
    /!*!// See id TODO Temporal
    console.log(id);*!/*/
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
        conecction.query(sql.getById,[user.control_number,user.password], function (err, result) {
       /* // Get user by id
        conecction.query(sql.getById,[id], function (err, result) {*/
            // String to JSON
            console.log(result);
            const json = JSON.stringify(result);
            // Send JSON
            res.send(json);
            console.log(json);
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
    //console.log(req.body.params.id);
    // id param

    // New model
    let user = new model();
    // Params
    const body = req.body;
    /*// See params TODO Temporal
    console.log(body);*/
    user.id = req.params.id;
    console.log(req);
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
