const Sequelize = require('sequelize');
const db = require('./config');

const Favorites = db.define('leader', {
	name: {type: Sequelize.STRING, allowNull: false},
	height: {type: Sequelize.INTEGER, allowNull: false},
	weight: {type: Sequelize.INTEGER, allowNull: false},
	pos: {type: Sequelize.STRING, allowNull: false},
	experience: {type: Sequelize.INTEGER, allowNull: false},
	college: {type: Sequelize.STRING, allowNull: false}
});

Favorites.sync();

module.exports = {
	Favorites
}