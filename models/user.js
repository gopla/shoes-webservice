'use strict'
module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define(
    'User',
    {
      id_user: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      nama: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      alamat: DataTypes.STRING,
      telp: DataTypes.STRING,
      role: DataTypes.STRING,
      foto: DataTypes.STRING,
    },
    {
      timestamps: false,
      freezeTableName: true,
      tableName: 'user',
    }
  )
  User.associate = function (models) {
    // associations can be defined here
    User.hasMany(models.Transaksi, { foreignKey: 'id_user' })
  }
  return User
}
