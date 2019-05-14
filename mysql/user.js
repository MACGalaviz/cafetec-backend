const getAll = "select * from user";
const getById = "select * from user where control_number = ? and password = ?";
//const getById = "select * from user where id = ?";
const post = "INSERT user (control_number,password,cash,role_id,status,date) VALUES (?,?,0.0,?,TRUE,CURDATE());";
const patch = "update user set control_number=?,password=? where id=?";
const patchStatus = "update user set status=? where id=?";
module.exports = {
    getAll,
    getById,
    post,
    patch,
    patchStatus
}
