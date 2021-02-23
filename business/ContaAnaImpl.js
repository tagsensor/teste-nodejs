const db = require('../dao/ContAnaDao');

const dados_bd = {"host": "localhost", "port": 3306, "user": "root", "pass": "mysql", "db": 'sag'};

/*
async function insertContAna(req, res) {
    try {
        const cont_ana = {"id_cont_ana": 4, "versao": 0, "descricao": "teste", "dt_lanc": "14-03-2021", "estabelecimento": 'estabelecimento', "dodc": "", "tipo": 1};
       
        await db.insertContAna(dados_bd, cont_ana);
        res.json({ message: 'Cont Ana cadastrada com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};
*/
async function createCont_ana(req, res) {
    try {
        await db.createCont_ana(dados_bd, req.body);
        res.json({ message: 'Cont Ana cadastrada com sucesso' });
    } catch (error) {
        res.status(500).json({ erro: error });
    }
};

module.exports = {createCont_ana}