const getAll = "select * from product";
const getById = "select * from product where id = ?";
const post = "INSERT product (code_number, name, price, description, type_id, status, date) VALUES (?,?,?,?,?, true, CURDATE())";
const patch = "update product set code_number=?, name=?, price=?, description=?, type_id=? where id=?";
const patchStatus = "update product set status=? where id=?";
module.exports = {
    getAll,
    getById,
    post,
    patch,
    patchStatus
}
