const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.la
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('platform', {
    id: {
      type: DataTypes.UUID,
      defaultValue: DataTypes.UUIDV4,
      allowNull: false, 
      primaryKey: true,
    },
    names: {
      type: DataTypes.STRING,
      allowNull: false,
  }
  },
  {
    createdAt: false,
    updatedAt: false,
  });
};
