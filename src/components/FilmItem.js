import React, { Component } from 'react';

class FilmItem extends Component {
	render() {
		return (
			<li>
				<a href={this.props.film.url}>{this.props.film.name}</a>
			</li>
		);
	}
}

export default FilmItem;
