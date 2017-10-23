import React from 'react'
import { Button, Jumbotron, Form, FormGroup, Label, Input, FormText } from 'reactstrap';


export default (props) => (
	<Jumbotron>
		<Form>
			<FormGroup>
				<Label for="author">Autor</Label>
				<Input type="text" name="author" value={props.author} onChange={props.handleChange} placeholder="Autor" />
			</FormGroup>
			<FormGroup>
				<Label for="exampleText">Mensagem</Label>
				<Input type="textarea" name="twit" value={props.twit} onChange={props.handleChange} />
			</FormGroup>
		</Form>
		<Button color="primary" onClick={() => props.send()}>Enviar!</Button>
	</Jumbotron>
)
