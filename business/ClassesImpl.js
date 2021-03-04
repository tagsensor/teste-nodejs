const db = require('../dao/ClassesDao');
const conx = require('./Conexao');

async function listaClasses (req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.selectEstClasses(ctrl);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function classeid(req, res) {
    const id = parseInt(req.params.id);
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.selectEstClasseId(ctrl, id);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function classe(req, res) { //o id vem no body
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        const results = await db.selectEstClasse(ctrl, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};
async function insertClasse(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        await db.insertEstClasse(ctrl, req.body);
        res.json({ message: 'classe cadastrada com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};
async function updateClasse(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        await db.updateEstClasse(ctrl, req.body);
        res.json({ message: 'classe ALTERADA com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function deleteClasse(req, res) {
    try {
        const authorization = req.header('authorization');
        const ctrl = conx.conexao_bd(authorization);
        await db.deleteEstClasse(ctrl, req.body);
        res.json({ message: 'classe EXCLUÍDA com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {listaClasses, classeid, classe, insertClasse, updateClasse, deleteClasse};