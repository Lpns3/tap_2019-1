//vai buscar os dados da biblioteca sequelize
const Sequelize = require('sequelize');

//vai buscar os dados do sequelize do arquivo database
const sequelize = require('../database/database.js');

const Trips = sequelize.define("trips", {
    id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
    },
    title: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate:{
            len:[5, 255]
        }
    },
    description: {
        allowNull: false,
        type: Sequelize.STRING(255),
        validate:{
            len:[5, 255]
        }
    },
    totalVacancy: {
        allowNull: false,
        type: Sequelize.INTEGER,
        validate:{
            len:[0, 50]
        }
    },
    date: {
        allowNull: false,
        type: Sequelize.DATE()
    }
});

module.exports = Trips;