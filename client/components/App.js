import React from 'react';
import NavBar from './NavBar';
import axios from 'axios';
import PlayerList from './PlayerList';

export default class App extends React.Component {
	constructor(){
		super();

		this.state = {
			players: []
		}
	}

	componentDidMount(){
		this.getData();
	}

	getData(){
		axios.get('/nba/favorites/fetchPlayer')
			.then(data => {
				//console.log(data.data);
				this.setState({
					players: data.data
				})
				//console.log(this.state)
			})
			.catch(err => {
				console.log(err);
			})
	}

	render(){
		console.log(this.state.players);
		return (
			<div>
				<NavBar />
				<h1 id='title'>2017 NBA FREE AGENTS</h1>
				<PlayerList players={this.state.players}/>
			</div>
		);
	}
}