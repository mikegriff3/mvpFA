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

const WishList = db.define('wishlist', {
	name: {type: Sequelize.STRING, allowNull: false},
	height: {type: Sequelize.INTEGER, allowNull: false},
	weight: {type: Sequelize.INTEGER, allowNull: false},
	pos: {type: Sequelize.STRING, allowNull: false},
	experience: {type: Sequelize.INTEGER, allowNull: false},
	college: {type: Sequelize.STRING, allowNull: false}
});

Favorites.sync();
WishList.sync({force: true})
	.then(() => {
		console.log('Wishlist table created');
		return WishList.bulkCreate([
			{name: 'Michael Griffin', height: 74, weight: 165, pos: 'PG', experience: 0, college: 'Arizona State'},
			{name: 'Kobe Bryant', height: 78, weight: 210, pos: 'SG', experience: 20, college: 'Lower Merion HS'}
		])
	})

module.exports = {
	Favorites,
	WishList
}