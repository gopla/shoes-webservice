'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('retail', {
			id_retail: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nama: {
				type: Sequelize.STRING(255),
			},
			lokasi: {
				type: Sequelize.STRING(255),
			},
			telp: {
				type: Sequelize.STRING(255),
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('retail')
	},
}
