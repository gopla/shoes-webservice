'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('transaksi', {
			id_transaksi: {
				primaryKey: true,
				type: Sequelize.CHAR(36).BINARY,
			},
			id_user: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			tanggal: {
				type: Sequelize.DATE,
			},
			total: {
				type: Sequelize.INTEGER,
			},
			id_retail: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			status: {
				type: Sequelize.TINYINT(1),
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('transaksi')
	},
}
