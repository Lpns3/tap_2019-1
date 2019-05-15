/*
PRIMEIRA API RESTFULL
//vamos pegar a biblio http
const http = require('http');

//definimos o nome do host e sua porta
const host = "127.0.0.1";
const port = 8080;

//criamos o servidor, tendo uma requisicao e resposta
const server = http.createServer((req, res) => {
    //definimos a resposta 200 (sucesso)
    res.statusCode = 200;
    //define o header da resposta
    res.setHeader("Content-Type", "text/plain");
    //imprime um valor
    res.end("Hello World");
});

//escuta o servidor e executa algo em caso de sucesso
server.listen(port, host, () => {
    console.log('Server is ON!');
});

*/
//nesse caso podemos usar o express para facilitar nossa operacao inicial
//temos que instalar o express
//npm i express --save

//vamos pegar a biblio http
const http = require('http');

//vamos pegar a biblio express
const express = require('express');

//importa o modulo http
const status = require('http-status');

//chama as rotas
const routes = require('./routes/tourism.js');

//fazer a conexao com o bd
const sequelize = require('./database/database.js');

//chamo a funcao express
const app = express();

//definimos o nome do host e sua porta
//const host = "127.0.0.1";
//const port = 8080;

//precisamos registrar para o express qual porta a api vai estar em execucao
//app.set("port", port);

//quero garantir que seja retornado um formato do tipo json na api
app.use(express.json());

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
  });

//adicionar quais sao as rotas
app.use('/app', routes);

//retornar um erro caso uma url seja requisitada
//todo middleware é declarado usando use
//a funcao recebe 3 parametros, dados da req, dados da res e uma funcao para controlar a aplicacao
//podemos ir encadeando com o next
app.use((req, res, next) => {
    //toda vez que cair aqui, vai retornar um status 404 e encerrar a req
    res.status(status.NOT_FOUND).send("Page Not Found!");
});

//tratameto de erro global da aplicacao
//erros 500 - desconhecidos
app.use((error, req, res, next) => {
    //toda vez que cair aqui, vai retornar um status 404 e encerrar a req
    res.status(status.INTERNAL_SERVER_ERROR).json({error});
});


//criamos o servidor, sendo que agora quem vai gerenciar isso tudo é o express
//const server = http.createServer(app);

//iniciar a conexao com o banco de dados
//feito isso, ai sobe o servidor
//se nao conectar com o bd, para a aplicacao
//sincroniza com o banco de dadso
//recebe um objeto como parametro
//o objeto vai pegar o bd que existe no mysql e vai criar uma tabela de acordo com os dados do model
//ele nao cria o banco de dados, o banco de dados deve ser criado manualmente
//force:true - toda vez que entrar na API, ele apaga as tabelas e cria novamente
//na primeira vez faz com true, depois muda para nao apagar
sequelize.sync({ force : false}).then(() => {
    const port = 3005;
    app.set ("port", port);
    const server = http.createServer(app);
    server.listen(port);
});

//escuta o servidor e executa algo em caso de sucesso
//o Express é um framework que permite construir aplicacaoes a partir de middlewares
//vai ficar entre o momento que recebe a requisicao e retorna uma resposta
/*server.listen(port, host, () => {
    console.log('Server is ON!');
});*/


//por fim, posso instalar um gerenciador de erros http
//npm i http-status --save