const db = require('../dao/CcustoDao');
const conx = require('./Conexao');

async function createFin_cc(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        await db.createFin_cc(ctrl, req.body);
        res.json({ message: 'C Custro cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};


async function listaLike(req, res) {  //passou no teste em 22/02/2021
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.listaLike(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function listaTodosCcusto(req, res) {  //passou no teste em 22/02/2021
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.listaTodosCcusto(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function listaCcusto(req, res) {  //passou no teste em 22/02/2021
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.listaCcusto(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function readFin_cc(req, res) { //passou no teste em 22/02/2021
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.readFin_cc(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function buscaNomeCC(req, res) { //passou no teste em 22/02/2021
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.buscaNomeCC(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {readFin_cc, buscaNomeCC, listaCcusto, listaTodosCcusto, listaLike, createFin_cc}