const mysql = require("mysql");
const sql = require("../mysql/user");

function getAll(req, res) {

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
module.exports = {
    getAll
};
