import React from 'react'
import {
	Card, CardText, CardBody, CardTitle
} from 'reactstrap';

import './twit.scss'
export default ({ author, twit }) => (
	<div className="col-md-4 twit_component">
		<Card>
			<CardBody>
				<CardTitle>{author}</CardTitle>
				<CardText>{twit}</CardText>
			</CardBody>
		</Card>
	</div>
)