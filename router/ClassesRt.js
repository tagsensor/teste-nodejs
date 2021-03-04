const biClasse = require('../business/ClassesImpl');
const express = require('express');
const router = express.Router();

router.get('/classes', biClasse.listaClasses);
router.get('/classe/:id', biClasse.classeid);
router.get('/classe', biClasse.classe);
router.post('/classe', biClasse.insertClasse);
router.put('/classe', biClasse.updateClasse);
router.delete('/classe', biClasse.deleteClasse);

module.exports = router;
