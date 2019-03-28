const mysql = require("mysql");
const sql = require("../mysql/product");
const model = require("../models/product");

function getAll(req, res) {
    //console.log(req);
    let conecction = mysql.createConnection({// Create conecction
        host: "localhost",
        user: "root",
        password: "",
        database: "cafetecdb"
    });
    conecction.connect(function(err) {
        if (err) res.status(200).send({"conecction": "Fallo en la conexión con la base de datos."});//Si la conexión falló
        conecction.query(sql.getAll, function (err, result) {// get users
            let json = JSON.stringify(result);//Convertir cadena a JSON
            res.send(json);//Enviar JSON
        });
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
        // Get product by id
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
    let product = new model();
    // Params
    const body = req.body;
    // See params TODO Temporal
    console.log(body);
    product.code_number = body.code_number;
    product.name = body.name;
    product.price = body.price;
    product.description = body.description;
    product.type_id = body.type_id;

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
        conecction.query(sql.post,[product.code_number,product.name,product.price, product.description,product.type_id], function (err, result) {
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
    let product = new model();
    // Params
    const body = req.body;
    /*// See params TODO Temporal
    console.log(body);*/
    product.id = id;
    product.code_number = body.code_number;
    product.name = body.name;
    product.price = body.price;
    product.description = body.description;
    product.type_id = body.type_id;
    product.status = body.status;
    // Create connection
    const conecction = mysql.createConnection({
        host: "localhost",
        user: "root",
        password: "",
        database: "cafetecdb"
    });
    if (product.status === undefined)
    {
        conecction.connect(function(err) {
            // Connection Failed
            if (err) res.status(200).send({"conecction": "Fallo en la conexión con la base de datos."});
            // Post user
            conecction.query(sql.patch,[product.code_number,product.name,product.price, product.description,product.type_id,product.id], function (err, result) {
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
            conecction.query(sql.patchStatus,[product.status,product.id], function (err, result) {
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
