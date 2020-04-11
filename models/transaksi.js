"use strict";
module.exports = (sequelize, DataTypes) => {
  const Transaksi = sequelize.define(
    "Transaksi",
    {
      id_transaksi: {
        primaryKey: true,
        type: DataTypes.UUID,
      },
      id_user: DataTypes.NUMBER,
      tanggal: DataTypes.DATE,
      total: DataTypes.NUMBER,
      id_retail: DataTypes.NUMBER,
      status: DataTypes.BOOLEAN,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "transaksi",
    }
  );
  Transaksi.associate = function (models) {
    // associations can be defined here
    Transaksi.hasMany(models.TransaksiDetail, { foreignKey: "id_transaksi" });
    Transaksi.belongsTo(models.User, { foreignKey: "id_user" });
    Transaksi.belongsTo(models.Retail, { foreignKey: "id_retail" });
  };
  return Transaksi;
};
