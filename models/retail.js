'use strict'
module.exports = (sequelize, DataTypes) => {
  const Retail = sequelize.define(
    'Retail',
    {
      id_retail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: DataTypes.STRING,
      lokasi: DataTypes.STRING,
      telp: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'retail',
    }
  )
  Retail.associate = function (models) {
    // associations can be defined here
    Retail.hasMany(models.Transaksi, { foreignKey: 'id_retail' })
  }
  return Retail
}
