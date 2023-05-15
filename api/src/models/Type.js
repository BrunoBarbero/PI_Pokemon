const { DataTypes } = require('sequelize');

module.exports = (sequelize) => {
    // defino el modelo
    sequelize.define('Type', {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV1
      },
      name: {
        type: DataTypes.STRING,
        allowNull: false,
        unique: true
      },
    },
    { timestamps: false }
    );
};
