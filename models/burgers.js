const sequelize = require('sequelize');

module.exports = function(sequelize, DataTypes){

    const Burger = sequelize.define("Burger", {
        burger_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                len: [6],
                contains: 'burger'
            }
        }, 
        consumed: {
            type: DataTypes.BOOLEAN,
            defaultValue: false,
            allowNull: false
        }
    });
    Burger.sync();
    return Burger;
}


