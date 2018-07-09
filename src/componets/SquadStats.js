import React, { Component } from 'react';
import { connect } from 'react-redux';

class SquadStats extends Component {
	strength() {
		let strength = 0;
		this.props.heroes.forEach(hero => strength += hero.strength);
		return strength;
	}

	intelligence() {
		let intelligence = 0;
		this.props.heroes.forEach(hero => intelligence += hero.intelligence);
		console.log(intelligence);
		return intelligence;
	}

	render() {
		return(
			<div className="app">
				<h2>SuperSquad</h2>
				<ul className="list-group">
					<li className="list-group-item">
						Overall Strength: {this.strength()}
					</li>
					<li className="list-group-item">
						Overall Intelligence: {this.intelligence()}
					</li>
				</ul>
			</div>
		)
	}
}

function mapStateToProps(state) {
	return {
		heroes: state.heroes
	}
}

export default connect(mapStateToProps, null)(SquadStats);