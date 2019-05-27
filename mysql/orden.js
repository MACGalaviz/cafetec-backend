const getById = "select * from ordenes where id = ?";
const getAll = "select * from ordenes where status = 'Espera' or status = 'Aceptada'";
const post = "INSERT orden (orden_code,user_id,pedido,costo,status_orden_id,date) VALUES (?,?,?,?,1,CURDATE());";
const patch = "update orden set status_orden_id=? where id=?";
module.exports = {
    getById,
    getAll,
    post,
    patch,
}
