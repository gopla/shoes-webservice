'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('sepatu', {
			id_sepatu: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nama: {
				type: Sequelize.STRING(255),
			},
			tipe: {
				type: Sequelize.STRING(255),
			},
			ukuran: {
				type: Sequelize.INTEGER,
			},
			deskripsi: {
				type: Sequelize.STRING(255),
			},
			gender: {
				type: Sequelize.STRING(255),
			},
			harga: {
				type: Sequelize.INTEGER,
			},
			stok: {
				type: Sequelize.INTEGER,
			},
			gambar: {
				type: Sequelize.STRING(255),
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('sepatu')
	},
}
