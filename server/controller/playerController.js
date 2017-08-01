const db = require('../db');
const axios = require('axios');
const apiKey = require('../../apiKey');

module.exports = {
	fetchPlayer: (req, res) => {
		db.Favorites.findAll({})
			.then(data => {
				res.status(200).send(data);
				console.log('Successfully fetched data');
			})
			.catch(err => {
				res.status(500).send(err);
				console.log('Error fetching data ', err);
			})
	},
	createPlayer: (req, res) => {
		axios.get(`http://api.sportradar.us/nba-t3/league/free_agents.json?api_key=${apiKey}`)
			.then(data => {
				console.log(data.data.free_agents);
				const faList = data.data.free_agents;
				faList.forEach(data => {
					console.log(data);
					db.Favorites.findOrCreate({
						where: {
							name: data.full_name,
							height: data.height,
							weight: data.weight,
							pos: data.primary_position,
							experience: data.experience,
							college: data.college
						}
					})
					.spread((newPlayer, created) => {
						if (created){
							res.status(200).send(newPlayer);
							console.log('Successfully created player');
						}else {
							res.status(500).send('Player already exist in db');
							console.log('Player already exist in db');
						}
					})
					.catch(error => {
						res.status(400).send(error)
					})

				})
			})
			.catch(err => {
				res.status(500).send(err);
				console.log(err);
			})
		
	}
}