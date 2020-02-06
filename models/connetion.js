const Sequelize = require('sequelize');
const pgconfig =  require('../config/config').PG_CONFIG;

// Option 1: Passing parameters separately
const sequelize = new Sequelize(pgconfig.database, pgconfig.user, pgconfig.password, {
    host: pgconfig.host,
    dialect: pgconfig.dialect,/* one of 'mysql' | 'mariadb' | 'postgres' | 'mssql' */
    pool: {
        max: 5,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
});

sequelize
    .authenticate()
    .then(() => {
        console.log('Connection has been established successfully.');
    })
    .catch(err => {
        console.error('Unable to connect to the database:', err);
    });
//sequelize.sync({alter: true})

module.exports = sequelize;
