"use strict";
module.exports = (sequelize, DataTypes) => {
  const Sepatu = sequelize.define(
    "Sepatu",
    {
      id_sepatu: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
      },
      nama: DataTypes.STRING,
      tipe: DataTypes.STRING,
      ukuran: DataTypes.NUMBER,
      deskripsi: DataTypes.STRING,
      gender: DataTypes.STRING,
      harga: DataTypes.NUMBER,
      stok: DataTypes.NUMBER
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: "Sepatu"
    }
  );
  Sepatu.associate = function(models) {
    // associations can be defined here
    Sepatu.hasMany(models.TransaksiDetail, { foreignKey: "id_sepatu" });
    Sepatu.hasMany(models.Keranjang, { foreignKey: "id_sepatu" });
  };
  return Sepatu;
};
