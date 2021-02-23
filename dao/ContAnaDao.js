const mysql = require('mysql2/promise');

function conectar(ctrl) {
    const conn = mysql.createConnection({
        host: ctrl.host,
        port: ctrl.port,
        user: ctrl.user,
        password: ctrl.pass,
        database: ctrl.db
    });
    return conn;
}

async function createCont_ana(ctrl, Cont_ana) {
    const conn = await conectar(ctrl);
    const sql = "INSERT INTO cont_ana(descricao, docs, dt_lanc, estabelecimento, id_cont_ana, tipo, versao) VALUES (?,?,?,?,?,?,?)";
    const [rows] = await conn.query(sql, [
        Cont_ana.descricao,
        Cont_ana.docs,
        (Cont_ana.dt_lanc === null ||Cont_ana.dt_lanc.length === 0) ? null : Cont_ana.dt_lanc.split("-").reverse().join("-"),
        Cont_ana.estabelecimento,
        parseInt(Cont_ana.id_cont_ana),
        parseInt(Cont_ana.tipo),
        parseInt(Cont_ana.versao),
    ]);
    conn.end();
}

async function readCont_ana(ctrl, Cont_ana) {
    const conn = await conectar(ctrl);
    const sql = "SELECT descricao, docs, dt_lanc, estabelecimento, id_cont_ana, tipo, versao FROM cont_ana WHERE id_cont_ana = ?";
    const [rows] = await conn.query(sql, [Cont_ana.id_cont_ana, ]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}

async function listaAna(ctrl, Cont_ana) {
    const conn = await conectar(ctrl);
    const sql = "SELECT descricao, docs, dt_lanc, estabelecimento, id_cont_ana, tipo, versao FROM cont_ana order by dt_lanc desc";
    const [rows] = await conn.query(sql, []);
    conn.end();
    return rows;
}

module.exports = { createCont_ana, readCont_ana, listaAna, }