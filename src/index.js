import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './Scenes/App';
import 'bootstrap/dist/css/bootstrap.css';
import firebase from 'firebase';

const config = {
	apiKey: "AIzaSyC6swdLMGgpYwXqBTFnPCMI8Nv0T-jry3I",
	databaseURL: " https://apresentacao-4d0ff.firebaseio.com",
	projectId: "apresentacao-4d0ff",
};
firebase.initializeApp(config)
// firebase.auth().signInAnonymously()

ReactDOM.render(<App />, document.getElementById('root'));
