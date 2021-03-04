const db = require('../dao/ContaDao');
const conx = require('./Conexao');

async function saldoTpOrigem(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.saldoTpOrigem(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {saldoTpOrigem}