//vai buscar os dados da biblioteca sequelize
const Sequelize = require('sequelize');

//aqui vou dizer se vou usar para desenvolvimento ou producao
//vou ler a partir das variaveis de ambiente
//se estiver disponivel uso o NODE_ENV, senao considero que estou em ambiente de desenvolvimento
const environment = process.env.NODE_ENV || 'development'
const config = require('../../config/config.js')[environment];

//instancio o Sequelize
//pego as informacoes que estao disponiveis, caso nao estejam estou em desenvolvimento
//estou importando as informacoes pertinentes
const sequelize = new Sequelize(
    config.database.name,
    config.database.user,
    config.database.password,
    {
        host: config.database.host,
        dialect: config.database.dialect
    }
);

module.exports = sequelize;