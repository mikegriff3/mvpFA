import React from 'react';

export default class NavBar extends React.Component{
	constructor(){
		super();
	}

	render(){
		return(
			<nav className="navbar navbar-default">
			  <div className="container-fluid">
			    <div className="navbar-header">
			      <a className="navbar-brand" href="#">NBA FREE AGENTS</a>
			    </div>
			    <ul className="nav navbar-nav">
			      <li className="active"><a href="#">Players</a></li>
			      <li><a href="#">Wishlist</a></li>
			    </ul>
			  </div>
			</nav>
		);
	}
}