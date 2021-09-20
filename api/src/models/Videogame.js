const { DataTypes } = require('sequelize');
// Exportamos una funcion que define el modelo
// Luego le injectamos la conexion a sequelize.la
module.exports = (sequelize) => {
  // defino el modelo
  sequelize.define('videogame', {
    id: {
       type: DataTypes.UUID,
       primaryKey: true,
       allowNull: false,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.STRING,
    },
    released: {
      type: DataTypes.STRING,
    },
    rating: {
      type: DataTypes.DECIMAL(10,2),
    },
    platforms: {
      type: DataTypes.STRING, //Borrar y realizar el mismo proceso que genres
    },
    image: {
      type: DataTypes.STRING,
      allowNull: false
    },
  },
  {
    createdAt: false,
    updatedAt: false,
  });//quitar los updates, no los uso);
};
