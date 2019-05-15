const express = require('express');
const controller = require('../controller/tourismController.js');

//vai chamar aqui as propriedados e metodos de rotas
const router = express.Router();

//passo que vai ser feito via get
//fala o verbo que vai configurar minha rota
//passo o id quando precisar
//passo o metodo a ser executado

router.get('/tourism/:id', controller.SearchOne);
router.get('/tourism', controller.SearchAll);
router.post('/tourism', controller.Insert);
router.put('/tourism/:id', controller.Update);
router.delete('/tourism/:id', controller.Delete);

//exportando tudo isso
module.exports = router;