'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('transaksi_detail', {
			id_transaksi_detail: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_transaksi: {
				type: Sequelize.STRING(255),
				allowNull: true,
			},
			id_sepatu: {
				type: Sequelize.INTEGER,
			},
			jumlah: {
				type: Sequelize.INTEGER,
			},
			harga: {
				type: Sequelize.INTEGER,
			},
			subtotal: {
				type: Sequelize.INTEGER,
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('transaksi_detail')
	},
}
