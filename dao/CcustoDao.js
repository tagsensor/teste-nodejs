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

async function listaCcusto(ctrl, Fin_cc) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, cd_cc, custo, gastos, id_cc, id_ccsub, nome, tipo, versao FROM fin_cc WHERE tipo = ? AND ativo = ? order by nome asc";
    const [rows] = await conn.query(sql, [Fin_cc.tipo, Fin_cc.ativo, ]);
    conn.end();
    return rows;
}

async function listaTodosCcusto(ctrl, Fin_cc) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, cd_cc, custo, gastos, id_cc, id_ccsub, nome, tipo, versao FROM fin_cc order by nome asc";
    const [rows] = await conn.query(sql, []);
    conn.end();
    return rows;
}

async function createFin_cc(ctrl, Fin_cc) {
    const conn = await conectar(ctrl);
    const sql = "INSERT INTO fin_cc(ativo, cd_cc, custo, gastos, id_ccsub, nome, tipo, versao) VALUES (?,?,?,?,?,?,?,?)";
    const [rows] = await conn.query(sql, [
        Fin_cc.ativo,
        Fin_cc.cd_cc,
        Fin_cc.custo,
        parseInt(Fin_cc.gastos),
        parseInt(Fin_cc.id_ccsub),
        Fin_cc.nome,
        Fin_cc.tipo,
        parseInt(Fin_cc.versao),
    ]);
    conn.end();
}

async function readFin_cc(ctrl, Fin_cc) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, cd_cc, custo, gastos, id_cc, id_ccsub, nome, tipo, versao FROM fin_cc WHERE id_cc = ?";
    const [rows] = await conn.query(sql, [Fin_cc.id_cc, ]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}

async function buscaNomeCC(ctrl, Fin_cc) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, cd_cc, custo, gastos, id_cc, id_ccsub, nome, tipo, versao FROM fin_cc WHERE nome = ?";
    const [rows] = await conn.query(sql, [Fin_cc.nome, ]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}

async function listaLike(ctrl, Fin_cc) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, cd_cc, custo, gastos, id_cc, id_ccsub, nome, tipo, versao FROM fin_cc WHERE nome LIKE ? AND tipo = ? AND ativo = ?";
    const [rows] = await conn.query(sql, [Fin_cc.nome, Fin_cc.tipo, Fin_cc.ativo, ]);
    conn.end();
    return rows;
}

module.exports = { listaCcusto, listaTodosCcusto, createFin_cc, readFin_cc, buscaNomeCC, listaLike, }