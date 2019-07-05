import React, { Component } from 'react';



class Users extends Component {
	constructor(props) {
		super(props)
		this.state = {
			users: [],
		}
	}

	componentDidMount (){
		console.log('working');
		const users =  fetch(`https://kaplogik.com/wp-json/wp/v2/users`)
		.then((response) => response.json)
		.then((responseJson) => {
			console.log(users, 'users');
		})
		.catch((error) => {
			console.log(error);
		})
	
		return users;
	}
	render() {

		return (
			<div>
				<p>test</p>
			</div>
		)
	}
}

export default Users; 