const mysql = require("mysql");
const sql = require("../mysql/orden");
const model = require("../models/orden");

// Function to post 
function post(req, res) {
    /*console.log("Esto llega: "+req);
    console.log(JSON.parse(req));*/
    // New model
    let orden = new model();
    // Params
    const body = req.body;
    // See params TODO Temporal
    console.log(body);

    orden.user_id = body.user_id;
    orden.pedido = JSON.stringify(body.pedido);
    orden.costo = body.costo;
    let date = new Date();
    let ordenCode = date.getTime()+orden.user_id+date.getDate();
    console.log(ordenCode);
    orden.orden_code = ordenCode;
    console.log(orden);
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
        conecction.query(sql.post,[orden.orden_code,orden.user_id,orden.pedido, orden.costo], function (err, result) {
            // if error
            if(err){res.status(200).send(err);}
            // if not
            else{res.status(200).send(result);}
        });
        // End connection
        conecction.end();
    });
}

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

function getById(req, res) {
    const id = req.params.id;
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
        conecction.query(sql.getById,[id], function (err, result) {
            // String to JSON
            const json = JSON.stringify(result[0]);
            // Send JSON
            res.send(json);
        });
        // End connection
        conecction.end();
    });
}

// Function to update user
function patch(req, res) {
    //console.log(req.body.params.id);
    // id param

    console.log(req.params.id);
    console.log(req.body.status_orden_id);
    // New model
    let user = new model();
    // Params
    const body = req.body;
    /*// See params TODO Temporal
    console.log(body);*/
    user.id = req.params.id;
    console.log(req);
    user.status_orden_id = body.status_orden_id;
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
            conecction.query(sql.patch,[user.status_orden_id,user.id], function (err, result) {
                // if error
                if(err){res.status(200).send(err);}
                // if not
                else{res.status(200).send(result);}
            });
            // End connection
            conecction.end();
        });

}


module.exports = {
    post,
    getAll,
    getById,
    patch
};
