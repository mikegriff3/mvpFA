import React from 'react';
import PlayerListEntry from './PlayerListEntry'

export default class PlayerList extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.players);
		return (
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Position</th>
						<th>Height</th>
						<th>Weight</th>
						<th>Experience</th>
						<th>College</th>
					</tr>
				{this.props.players.map((player, i) =>
					<PlayerListEntry player={player} key={i}/>
				)}
				</thead>
			</table>
		);
	}
}