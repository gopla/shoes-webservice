'use strict'
module.exports = (sequelize, DataTypes) => {
  const Keranjang = sequelize.define(
    'Keranjang',
    {
      id_keranjang: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      id_user: DataTypes.NUMBER,
      id_sepatu: DataTypes.NUMBER,
      jumlah: DataTypes.NUMBER,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'keranjang',
    }
  )
  Keranjang.associate = function (models) {
    // associations can be defined here
    Keranjang.belongsTo(models.Sepatu, { foreignKey: 'id_sepatu' })
    Keranjang.belongsTo(models.User, { foreignKey: 'id_user' })
  }
  return Keranjang
}
