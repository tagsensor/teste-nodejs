const biCcusto = require('../business/CcustoImpl');
const express = require('express');
const router = express.Router();

//rotas Centro de custo
router.get('/ccustoid', biCcusto.readFin_cc);
router.get('/ccusto_nome', biCcusto.buscaNomeCC);
router.get('/ccusto_list', biCcusto.listaCcusto);
router.get('/ccusto_list_tudo', biCcusto.listaTodosCcusto);
router.get('/ccusto_list_like', biCcusto.listaLike);
router.post('/ccusto', biCcusto.createFin_cc);

module.exports = router;