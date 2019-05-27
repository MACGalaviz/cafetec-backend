let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Modelo JSON
const product = Schema({
    id          : Number,
    code_number : String,
    name        : String,
    price       : Number,
    description : String,
    type_id     : Boolean,
    date        : Date,
    status      : Boolean
});

module.exports = mongoose.model("product",product);
