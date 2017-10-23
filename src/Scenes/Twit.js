import React from 'react'
import {
	Card, CardImg, CardText, CardBody,
	CardTitle, CardSubtitle, Button
} from 'reactstrap';


export default ({ author, twit }) => (
	<div>
		<Card>
			<CardBody>
				<CardTitle>{author}</CardTitle>
				<CardText>{twit}</CardText>
			</CardBody>
		</Card>
	</div>
)