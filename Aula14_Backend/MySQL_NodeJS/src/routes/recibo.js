const express = require('express');
const controller = require('../controller/reciboController.js');

//vai chamar aqui as propriedados e metodos de rotas
const router = express.Router();

//passo que vai ser feito via get
//fala o verbo que vai configurar minha rota
//passo o id quando precisar
//passo o metodo a ser executado

router.get('/recibo/:id', controller.SearchOne);
router.get('/recibo', controller.SearchAll);
router.post('/recibo', controller.Insert);
router.put('/recibo/:id', controller.Update);
router.delete('/recibo/:id', controller.Delete);

//exportando tudo isso
module.exports = router;