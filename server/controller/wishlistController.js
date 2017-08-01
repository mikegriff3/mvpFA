const db = require('../db');
const axios = require('axios');
const apiKey = require('../../apiKey');

module.exports = {
	fetchWish: (req, res) => {
		db.WishList.findAll({})
			.then(data => {
				res.status(200).send(data);
				console.log('Successfully fetched data');
			})
			.catch(err => {
				res.status(500).send(err);
				console.log('Error fetching data ', err);
			})
	}
}