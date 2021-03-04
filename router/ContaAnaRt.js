const biContAna = require('../business/ContaAnaImpl');
const express = require('express');
const router = express.Router();

router.post('/contana', biContAna.createCont_ana);
router.put('/contana', biContAna.updateCont_ana);
router.delete('/contana', biContAna.deleteCont_ana);
router.get('/contanaid', biContAna.readCont_ana);
router.get('/contana_list', biContAna.listaAna);

module.exports = router;

