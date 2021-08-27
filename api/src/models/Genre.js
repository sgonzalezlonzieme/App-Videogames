const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.la
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('genre', {
    name: {
      type: DataTypes.STRING,
      primaryKey: true,
      autoIncrement: true,
    },
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
      },
  });
};
