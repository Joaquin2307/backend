var pool = require("./bd");

async function getNovedades() {
    var query= "select * from novedadesorder by id desc";
    var rows = await pool.query(query);
    return rows;
}

async function deleteNovedadById(id) {
    var query ="delete from novedades where id=?";
    var rows = await pool.query(query, [id]);
    return rows;
}

async function getNovedadById(id) {
    var query ="select * from novedades where id=?";
    var rows =await pool.query(query, [id]);
    return rows[0];
}

async function modificarNovedadById(obj, id) {
    try {
        var query ="update novedades set ? where id=?"; 
        var rows =await pool.query(query, [obj, id]);
        return rows;
    }catch(error) {
        throw error;
    }
}
module.exports ={getNovedades,deleteNovedadById,insertNovedad}