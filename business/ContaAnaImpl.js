const db = require('../dao/ContAnaDao');
const conx = require('./Conexao');

async function maxCont_ana(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.maxCont_ana(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function createCont_ana(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        //inicio regra de negocio
        //valida e ou atribui valores ao que vai ser salvo pelo req.body
        const pk = await db.maxCont_ana(ctrl) + 1;
        req.body.id_cont_ana = pk;
        await db.createCont_ana(ctrl, req.body);
        res.json({ message: 'Cont Ana cadastrada com suçesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function updateCont_ana(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        await db.updateCont_ana(ctrl, req.body);
        res.json({ message: 'Cont Ana Alterado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function deleteCont_ana(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        await db.deleteCont_ana(ctrl, req.body);
        res.json({ message: 'Cont Ana Excluída com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function readCont_ana(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.readCont_ana(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function listaAna(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.listaAna(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {createCont_ana, readCont_ana, listaAna, updateCont_ana, deleteCont_ana, maxCont_ana}