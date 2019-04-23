//busca a biblioteca mysql
var mysql = require('mysql');

//EXEMPLO - CONECTAR NO BANCO MYSQL
/*
//criei uma variavel de conexao
//armazenei nela os dados de conexao
//o servidor, o usuario e senha do mysql
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

//chamei a conexao com o banco mysql
connection.connect(function(err){
    if(err) throw err;
    console.log("Its ON!");
});
//para rodar o código, escreve no terminal
//node main.js
*/

//EXEMPLO - criar o banco de dados no mysql
/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root"
});

//chamei a conexao com o banco mysql
//coloquei o comando para criar o banco de dados
connection.connect(function(err){
    connection.query("CREATE DATABASE peoples"), 
    console.log("Database its ON!");
});
//para rodar o código, escreve no terminal
//node main.js
*/

//EXEMPLO - CRIAR UMA TABELA NO BANCO DE DADOS
/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "peoples"
});

//chamei a conexao com o banco mysql
//coloquei o comando para criar a tabela no banco de dados
connection.connect(function(err){
    var sql = "CREATE TABLE person (id INT AUTO_INCREMENT NOT NULL PRIMARY KEY, name VARCHAR(100) NOT NULL, function VARCHAR (100) NOT NULL)";
    connection.query(sql, console.log("TABLE its ON!"));
});
*/

//EXEMPLO - INSERT
/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "peoples"
});



//chamei a conexao com o banco mysql
//coloquei o comando para INSERIR DADOS no banco de dados
connection.connect(function(err){
    var sql = "INSERT INTO person (name, function) VALUES ('felipao da massa', 'teacher')";
    connection.query(sql, console.log("RECORD its ON!"));
});
*/

//EXEMPLO - INSERT MANY
/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "peoples"
});



//chamei a conexao com o banco mysql
//coloquei o comando para INSERIR VÁRIOS DADOS no banco de dados
connection.connect(function(err){
    var sql = "INSERT INTO person (name, function) VALUES ?";
    var values = [
        ['Felipe', 'teacher'],
        ['Becker', 'developer'],
        ['Nunes', 'nothing']
    ];
    connection.query(sql, [values], console.log("RECORDS its ON!"));
});
*/


//EXEMPLO - SELECT
/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "peoples"
});



//chamei a conexao com o banco mysql
//coloquei o comando para INSERIR VÁRIOS DADOS no banco de dados
connection.connect(function(err){
    var sql = "SELECT * FROM person limit 3";
    
    connection.query(sql, function(err, result){
        //console.log(result);
        result.forEach(function(res){
            console.log("Name: " + res.name);
            console.log("Function: " + res.function);
        });
    });
});
*/

//EXEMPLO - UPDATE
/*
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "peoples"
});



//chamei a conexao com o banco mysql
//coloquei o comando para INSERIR VÁRIOS DADOS no banco de dados
connection.connect(function(err){
    var sql = "UPDATE person SET name = 'Maria' WHERE id = 1";
    
    connection.query(sql, function(err, result){
       console.log("RECORDS UPDATED!");
    });
});
*/

/*
//EXEMPLO - DELETE
var connection = mysql.createConnection({
    host: "localhost",
    user: "root",
    password: "root",
    database: "peoples"
});



//chamei a conexao com o banco mysql
//coloquei o comando para INSERIR VÁRIOS DADOS no banco de dados
connection.connect(function(err){
    var sql = "DELETE FROM person WHERE id = 2";
    
    connection.query(sql, function(err, result){
       console.log("RECORD DELETED!");
    });
});

*/