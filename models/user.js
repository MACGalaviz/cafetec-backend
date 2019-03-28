let mongoose = require("mongoose");
let Schema = mongoose.Schema;

//Modelo JSON para empresas
let user = Schema({
    id              : Number,
    control_number  : String,
    password        : String,
    role_id         : Boolean,
    date            : Date,
    status          : Boolean
});

module.exports = mongoose.model("user",user);
