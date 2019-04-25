const Sequelize = require('sequelize');

//busco os dados de configuracao do bd
const sequelize = require('../database/database.js');

const Person = require('../models/person.js');

//o define cria a tabela no bd
//o nome da tabela é invoice
//defino os atributos
const Invoice = sequelize.define("invoice", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate: {
            len: [5, 100]
        }
    },
    value: {
        allowNull: false,
        type: Sequelize.FLOAT,
        validate: {
            len: [0, 1000000]
        }
    },
    date: {
        allowNull: false,
        type: Sequelize.DATE()
    }
});

//http://docs.sequelizejs.com/manual/associations.html#foreign-keys

Person.hasMany(Invoice, {
    foreignKey: {
      name: 'personId',
      allowNull: false
    }
  })

module.exports = Invoice;