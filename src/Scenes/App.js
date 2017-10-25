import React, { Component } from 'react';
import firebase from 'firebase'
import Twit from './components/Twit'
import TwitForm from './components/TwitForm'
import { Container, Row, Col } from 'reactstrap';

class App extends Component {

	constructor(props) {
		super(props)

		this.state = {
			author: undefined,
			twit: undefined,
			twits: []
		}

		this.send = this.send.bind(this)
		this.handleUpdate = this.handleUpdate.bind(this)
	}

	componentDidMount() {
		this.firebaseRef = firebase.database().ref('/twits')
		this.firebaseRef.on('value', (snapshot) => {
			const map = snapshot.val()
			const chaves = Object.keys(map || [])
			const twits = chaves.map(key => {
				return { author: map[key].author, twit: map[key].twit }
			})
			this.setState({ twits: [this.state.twits, ...twits].reverse() })
		})
	}

	handleUpdate({ target }) {
		this.setState({ [target.name]: target.value })
	}

	send() {
		this.firebaseRef.database.ref('/twits').push({
			author: this.state.author,
			twit: this.state.twit
		})
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
