const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.la
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
        },
    name: {
        type: DataTypes.STRING,
        allowNull: false,
    }
  },
  {
    createdAt: false,
    updatedAt: false,
  });//quitar los updates, no los uso
};
