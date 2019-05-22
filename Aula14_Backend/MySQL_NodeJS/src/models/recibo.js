//vai buscar os dados da biblioteca sequelize
const Sequelize = require('sequelize');

//vai buscar os dados do sequelize do arquivo database
const sequelize = require('../database/database.js');

const Trips = sequelize.define("recibos", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    name: {
        allowNull: false,
        type: Sequelize.STRING(100),
        validate:{
            len:[1, 100]
        }
    },
    value: {
        allowNull: false,
        type: Sequelize.FLOAT(12),
        validate:{
            len:[1, 1000000]
        }
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate:{
            len:[1, 255]
        }
    },
    date: {
        allowNull: false,
        type: Sequelize.DATE()
    }
});

module.exports = Trips;