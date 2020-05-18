import React, { Component } from 'react';

class Title extends Component {
	render() {
		return <div className="header">{this.props.titleText}</div>;
	}
}

export default Title;
