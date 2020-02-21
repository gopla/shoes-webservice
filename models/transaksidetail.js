"use strict";
module.exports = (sequelize, DataTypes) => {
  const TransaksiDetail = sequelize.define(
    "TransaksiDetail",
    {
      id_transaksi_detail: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      id_transaksi: DataTypes.STRING,
      id_sepatu: DataTypes.NUMBER,
      jumlah: DataTypes.NUMBER,
      harga: DataTypes.NUMBER,
      subtotal: DataTypes.NUMBER
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "Transaksi_Detail"
    }
  );
  TransaksiDetail.associate = function(models) {
    // associations can be defined here
    TransaksiDetail.belongsTo(models.Sepatu, { foreignKey: "id_sepatu" });
    TransaksiDetail.belongsTo(models.Transaksi, { foreignKey: "id_transaksi" });
  };
  return TransaksiDetail;
};
