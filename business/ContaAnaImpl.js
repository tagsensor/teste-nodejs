const db = require('../dao/ContAnaDao');

const dados_bd = {"host": "localhost", "port": 3306, "user": "root", "pass": "mysql", "db": 'sag'};

async function createCont_ana(req, res) {
    try {
        await db.createCont_ana(dados_bd, req.body);
        res.json({ message: 'Cont Ana cadastrada com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function readCont_ana(req, res) {
    try {
        const results = await db.readCont_ana(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function listaAna(req, res) {
    try {
        const results = await db.listaAna(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {createCont_ana, readCont_ana, listaAna}