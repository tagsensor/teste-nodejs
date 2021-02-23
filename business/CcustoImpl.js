db = require('../dao/CcustoDao');

const dados_bd = {"host": "localhost", "port": 3306, "user": "root", "pass": "mysql", "db": 'sag'};

//integrator
//const dados_bd = {"host": "localhost", "port": 3306, "user": "sag01", "pass": "PYAZ89ew", "db": 'sag01'};


async function createFin_cc(req, res) {
    try {
        await db.createFin_cc(dados_bd, req.body);
        res.json({ message: 'C Custro cadastrado com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};


async function listaLike(req, res) {  //passou no teste em 22/02/2021
    try {
        const results = await db.listaLike(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function listaTodosCcusto(req, res) {  //passou no teste em 22/02/2021
    try {
        const results = await db.listaTodosCcusto(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function listaCcusto(req, res) {  //passou no teste em 22/02/2021
    try {
        const results = await db.listaCcusto(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function readFin_cc(req, res) { //passou no teste em 22/02/2021
    try {
        const results = await db.readFin_cc(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function buscaNomeCC(req, res) { //passou no teste em 22/02/2021
    try {
        const results = await db.buscaNomeCC(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {readFin_cc, buscaNomeCC, listaCcusto, listaTodosCcusto, listaLike, createFin_cc}