const mysql = require('mysql2/promise');

function conectar(ctrl) {
    const conn = mysql.createConnection({
        host: ctrl.host,
        port: ctrl.port,
        user: ctrl.user,
        password: ctrl.pass,
        database: ctrl.db,
        charset : 'utf8'
    });
    return conn;
}

async function selectEstClasses(ctrl) {
    const conn = await conectar(ctrl);
    const sql = "SELECT * FROM est_classe;"
    const [rows] = await conn.query(sql,[ ]);
    conn.end();
    return rows;
}

async function selectEstClasseId(ctrl, id) {
    const conn = await conectar(ctrl);
    const sql = "SELECT * FROM est_classe WHERE id_classe=?;"
    const [rows] = await conn.query(sql, [id]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}
async function selectEstClasse(ctrl, classe) {
    const conn = await conectar(ctrl);
    const sql = "SELECT * FROM est_classe WHERE id_classe=?;"
    const [rows] = await conn.query(sql, [classe.id_classe]);
    conn.end();
    return rows && rows.length > 0 ? rows[0] : {};
}
async function insertEstClasse(ctrl, classe) {
    const conn = await conectar(ctrl);
    const sql = "INSERT INTO est_classe(codigo, descricao) VALUES (?,?);"
    const [rows] = await conn.query(sql, [
        classe.codigo,
        classe.descricao]);
    conn.end();
}
async function updateEstClasse(ctrl, classe) {
    const conn = await conectar(ctrl);
    const sql = "UPDATE est_classe SET codigo=?, descricao=? WHERE id_classe=?;"
    const [rows] = await conn.query(sql, [
        classe.codigo,
        classe.descricao,
        parseInt(classe.id_classe)]);
    conn.end();
}
async function deleteEstClasse(ctrl, classe) {
    const conn = await conectar(ctrl);
    const sql = "DELETE FROM est_classe WHERE id_classe=?;"
    const [rows] = await conn.query(sql, [parseInt(classe.id_classe)]);
    conn.end();
}
//teste com insersão de data
async function insertContAna(ctrl, ContAna) {
    const conn = await conectar(ctrl);
    const sql = "INSERT INTO cont_ana(id_cont_ana, versao, descricao, dt_lanc, estabelecimento, docs, tipo ) VALUES (?,?,?,?,?,?,?);"
    const [rows] = await conn.query(sql, [
        parseInt(ContAna.id_cont_ana),
        parseInt(ContAna.versao),
        ContAna.descricao,
        ContAna.dt_lanc.split("-").reverse().join("-"), //transforma DD-MM-YYYY para YYYY-MM-DD 
        ContAna.estabelecimento,
        ContAna.docs,
        parseInt(ContAna.tipo)]);
    conn.end();
}
module.exports = { selectEstClasses, selectEstClasseId, selectEstClasse, insertEstClasse, updateEstClasse, deleteEstClasse, insertContAna, }