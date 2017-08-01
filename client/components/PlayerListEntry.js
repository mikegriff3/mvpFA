import React from 'react';

export default class PlayerListEntry extends React.Component{
	constructor(props){
		super(props);
	}

	render(){
		console.log(this.props.player);
		return (
			<tr>
				<td>{this.props.player.name}</td>
				<td>{this.props.player.pos}</td>
				<td>{this.props.player.height}</td>
				<td>{this.props.player.weight}</td>
				<td>{this.props.player.experience}</td>
				<td>{this.props.player.college}</td>
				<td>
					<button>Add+</button>
				</td>
			</tr>
		);
	}
}