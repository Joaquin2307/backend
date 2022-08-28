var pool = require("./bd");

async function getNovedades() {
    var query= "select * from novedadesorder by id desc";
    var rows = await pool.query(query);
    return rows;
}

module.exports ={getNovedades,deleteNovedadById,insertNovedad}