const Sequelize = require('sequelize');

const db = new Sequelize('postgres://fiylpmnt:QJ0LBz1WngSWItFkVBGGM_s1oU-_zAmk@babar.elephantsql.com:5432/fiylpmnt', {
	dialect: 'postgres'
});

console.log('Connected to remote db');

module.exports = db;