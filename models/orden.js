let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Modelo JSON
const orden = Schema({
    id: Number,
    orden_code: String,
    user_id: Number,
    pedido: String,
    costo: Number,
    status_orden_id: Number,
    date: Date
});

module.exports = mongoose.model("orden",orden);
