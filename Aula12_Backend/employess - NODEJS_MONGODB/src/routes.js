const express = require('express');
const routes = express.Router();

const employeeController = require("./controller/productController");

//toda vez q o usuario acessar a rota (rota raiz), tem a funcao que recebe o req e res
//req simboliza a requisicao que esta sendo feita ao servidor 
//req contém os dados dessa requisicao, parametros, corpo, cabecalho, autenticacao, usuario, ip, etc.)
//res - resposta que vai ser dada a requisicao (resposta do servidor)
//primeira rota
//quando buscar, pode ser get
//select
routes.get('/employees', employeeController.index);
//details
routes.get('/employees/:id', employeeController.details);
//quando criar algo, usa post
//insert
routes.post('/employees', employeeController.insert);
//update
routes.put('/employees/:id', employeeController.update);
//delete
routes.delete('/employees/:id', employeeController.delete);

module.exports = routes;