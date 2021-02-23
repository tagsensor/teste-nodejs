db = require('../dao/ClassesDao');

const dados_bd = {"host": "localhost", "port": 3306, "user": "root", "pass": "mysql", "db": 'sag'};

//integrator
//const dados_bd = {"host": "localhost", "port": 3306, "user": "sag01", "pass": "PYAZ89ew", "db": 'sag01'};


async function listaClasses (req, res) {
    try {
        //const results = dados_bd //aqui funciona
        const results = await db.selectEstClasses(dados_bd);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function classeid(req, res) {
    const id = parseInt(req.params.id);
    try {
        const results = await db.selectEstClasseId(dados_bd, id);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function classe(req, res) { //o id vem no body
    try {
        const results = await db.selectEstClasse(dados_bd, req.body);
        res.json(results)
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};
async function insertClasse(req, res) {
    try {
        await db.insertEstClasse(dados_bd, req.body);
        res.json({ message: 'classe cadastrada com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};
async function updateClasse(req, res) {
    try {
        await db.updateEstClasse(dados_bd, req.body);
        res.json({ message: 'classe ALTERADA com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

async function deleteClasse(req, res) {
    try {
        await db.deleteEstClasse(dados_bd, req.body);
        res.json({ message: 'classe EXCLUÍDA com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {listaClasses, classeid, classe, insertClasse, updateClasse, deleteClasse,}