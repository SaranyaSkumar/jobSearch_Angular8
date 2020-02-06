const DataTypes = require('sequelize');
const sequelize = require('../connetion');
const { ModelHandler } = require('sequelize-handlers');

const User = sequelize.define('user', {
    // attributes
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        field: 'id'
    },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'name'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'email'
    },
    mobile: {
        type: DataTypes.STRING,
        allowNull: false,
        field: 'mobile'
    }
}, {
    tableName: 'user',
    timestamps: true
});
const usersHandler=new ModelHandler(User);
User.sync({alter: true})

module.exports = User;