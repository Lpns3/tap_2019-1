//PARTE 01

//crio uma funcao express
const express = require('express');

//chamo essa funcao para ser executada
const app = express();

//toda vez q o usuario acessar a rota (rota raiz), tem a funcao que recebe o req e res
//req simboliza a requisicao que esta sendo feita ao servidor 
//req contém os dados dessa requisicao, parametros, corpo, cabecalho, autenticacao, usuario, ip, etc.)
//res - resposta que vai ser dada a requisicao (resposta do servidor)
app.get('/', (req, res) => {
    //res.send("Hello AMF");
    var test = req.headers;
    res.send(test);
});

//ouço a porta 8080 e posso acessar no navegador http://localhost:8080/
//toda vez que alterar, tem que executar de novo node server.js
//para evitar de atualizar no terminal, pode ser feito automatico com o nodemon
//npm install -D nodemon
// -D sao dependencias que vamos usar somente no ambiente de desenvolvimento
// nao vao ser instaladas quando a aplicacao for posta online
// modifico o package.json
// npm run dev
app.listen(8080);

//para verificar se o mongodb foi instalado
//npm mongodb -v

//baixar a ferramenta Robo 3T
//https://robomongo.org/download

// instalar uma nova dependencia
// npm install mongoose
// é um ORM de bancos nao relacionais com MongoDB 
// encapsula a logica da programacao do banco de dados atraves do codigo
// (nao usa query ou a linguagem da base de dados (INSERT, DELETE, etc.))
// usa linguagem em JS com o ORM (Object Relational Mapping) 
// transforma a tabela do banco de dados em objetos JS