const biConta = require('../business/ContaImpl');
const express = require('express');
const router = express.Router();

router.get('/conta_soma', biConta.saldoTpOrigem);

module.exports = router;


