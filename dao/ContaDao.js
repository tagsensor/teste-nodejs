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

async function createFin_conta(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "INSERT INTO fin_conta(ativo, flx_caixa, id_origem, id_segur, id_tp_cta, nome, saldo_atu, saldo_prv, versao) VALUES (?,?,?,?,?,?,?,?,?)";
    const [rows] = await conn.query(sql, [
        Fin_conta.ativo,
        Fin_conta.flx_caixa,
        parseInt(Fin_conta.id_origem),
        parseInt(Fin_conta.id_segur),
        parseInt(Fin_conta.id_tp_cta),
        Fin_conta.nome,
        Fin_conta.saldo_atu,
        Fin_conta.saldo_prv,
        parseInt(Fin_conta.versao),
    ]);
    conn.end();
}

async function readFin_conta(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, flx_caixa, id_conta, id_origem, id_segur, id_tp_cta, nome, saldo_atu, saldo_prv, versao FROM fin_conta WHERE id_conta = ?";
    const [rows] = await conn.query(sql, [Fin_conta.id_conta, ]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}

async function updateFin_conta(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "UPDATE fin_conta SET ativo=?, flx_caixa=?, id_conta=?, id_origem=?, id_segur=?, id_tp_cta=?, nome=?, saldo_atu=?, saldo_prv=?, versao=? WHERE id_conta = ? AND versao = ?";
    const [rows] = await conn.query(sql, [
        Fin_conta.ativo,
        Fin_conta.flx_caixa,
        parseInt(Fin_conta.id_conta),
        parseInt(Fin_conta.id_origem),
        parseInt(Fin_conta.id_segur),
        parseInt(Fin_conta.id_tp_cta),
        Fin_conta.nome,
        Fin_conta.saldo_atu,
        Fin_conta.saldo_prv,
        parseInt(Fin_conta.versao + 1),
        parseInt(Fin_conta.id_conta),
        parseInt(Fin_conta.versao),
    ]);
    conn.end();
}

async function deleteFin_conta(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "DELETE FROM fin_conta WHERE id_conta = ? AND versao = ?";
    const [rows] = await conn.query(sql, [
        parseInt(Fin_conta.id_conta),
        parseInt(Fin_conta.versao),
    ]);
    conn.end();
}

async function buscaNome(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, flx_caixa, id_conta, id_origem, id_segur, id_tp_cta, nome, saldo_atu, saldo_prv, versao FROM fin_conta WHERE nome = ?";
    const [rows] = await conn.query(sql, [Fin_conta.nome, ]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}

async function listaConta(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, flx_caixa, id_conta, id_origem, id_segur, id_tp_cta, nome, saldo_atu, saldo_prv, versao FROM fin_conta";
    const [rows] = await conn.query(sql, []);
    conn.end();
    return rows;
}

async function listaContaAtiva(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, flx_caixa, id_conta, id_origem, id_segur, id_tp_cta, nome, saldo_atu, saldo_prv, versao FROM fin_conta WHERE ativo = ?";
    const [rows] = await conn.query(sql, [Fin_conta.ativo, ]);
    conn.end();
    return rows;
}

async function buscaOrigTipo(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "SELECT ativo, flx_caixa, id_conta, id_origem, id_segur, id_tp_cta, nome, saldo_atu, saldo_prv, versao FROM fin_conta WHERE id_origem = ? AND id_tp_cta = ?";
    const [rows] = await conn.query(sql, [Fin_conta.id_origem, Fin_conta.id_tp_cta, ]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}

async function saldoTpOrigem(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "SELECT Sum(saldo_atu) AS sum_valor  FROM fin_conta WHERE id_origem = ? AND id_tp_cta = ?";
    const [rows] = await conn.query(sql, [Fin_conta.id_origem, Fin_conta.id_tp_cta, ]);
    conn.end();
    let sm;
    if (rows[0].sum_valor === null) {
        sm = 0;
    } else {
        sm = parseFloat(rows[0].sum_valor);
    }
    return sm;
}

async function totTipoCta(ctrl, Fin_conta) {
    const conn = await conectar(ctrl);
    const sql = "SELECT Sum(saldo_atu) AS sum_valor  FROM fin_conta WHERE id_tp_cta = ?";
    const [rows] = await conn.query(sql, [Fin_conta.id_tp_cta, ]);
    conn.end();
    let sm;
    if (rows[0].sum_valor === null) {
        sm = 0;
    } else {
        sm = parseFloat(rows[0].sum_valor);
    }
    return sm;
}

module.exports = { createFin_conta, readFin_conta, updateFin_conta, deleteFin_conta, buscaNome, listaConta, listaContaAtiva, buscaOrigTipo, saldoTpOrigem, totTipoCta, }