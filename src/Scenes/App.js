import React, { Component } from 'react';
import firebase from 'firebase'
import logo from './logo.svg';
import Twit from './Twit'
import TwitForm from './components/TwitForm'
import { Container, Row, Col } from 'reactstrap';
import './App.css';

class App extends Component {

	constructor(props) {
		super(props)
		this.state = {
			author: undefined,
			twit: undefined,
			twits: [
				{
					author: 'apresenta',
					twit: 'vai cavalo'
				}
			]
		}

		this.send = this.send.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
	}

	componentDidMount() {
		this.firebaseRef = firebase.database().ref('/')
		this.firebaseRef.on('value', (snapshot) => {
			const twits = snapshot.val()

		})
	}

	handleUpdate({ target }) {
		this.setState({ [target.name]: target.value })
	}

	send() {
		console.log(this.state)
	}

	render() {
		return (
			<Container className="App">
				<Row>
					<Col md="12">
						<TwitForm
							author={this.state.author}
							twit={this.state.twit}
							handleChange={this.handleUpdate}
							send={this.send}
						/>
					</Col>
				</Row>
				<Row>
					<Col md="12">
					</Col>
					{
						this.state.twits.map(Twit)
					}
				</Row>
			</Container>
		);
	}
}

export default App;
