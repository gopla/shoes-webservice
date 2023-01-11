'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('keranjang', {
			id_keranjang: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			id_user: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			id_sepatu: {
				type: Sequelize.INTEGER,
				allowNull: true,
			},
			jumlah: {
				type: Sequelize.INTEGER,
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('keranjang')
	},
}
