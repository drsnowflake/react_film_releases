import React, { Component } from 'react';
import FilmItem from './FilmItem';

class FilmList extends Component {
	render() {
		const filmItems = this.props.films.map((film) => {
			return <FilmItem film={film} key={film.id} />;
		});
		return <ul>{filmItems}</ul>;
	}
}

export default FilmList;
