'use strict'
module.exports = {
	up: (queryInterface, Sequelize) => {
		return queryInterface.createTable('user', {
			id_user: {
				type: Sequelize.INTEGER,
				primaryKey: true,
				autoIncrement: true,
			},
			nama: {
				type: Sequelize.STRING(255),
			},
			email: {
				type: Sequelize.STRING(255),
			},
			password: {
				type: Sequelize.STRING(255),
			},
			alamat: {
				type: Sequelize.STRING(255),
			},
			telp: {
				type: Sequelize.STRING(255),
			},
			role: {
				type: Sequelize.STRING(255),
			},
			foto: {
				type: Sequelize.STRING(255),
			},
		})
	},

	down: (queryInterface, Sequelize) => {
		return queryInterface.dropTable('user')
	},
}
