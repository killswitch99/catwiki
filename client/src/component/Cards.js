import React, { useCallback } from 'react'
import { useNavigate } from 'react-router-dom'
import { Card, CardBody, CardTitle, Button, CardText } from 'reactstrap'

const Cards = ({ props }) => {
	const navigate = useNavigate()
	const handleOnClick = useCallback(
		() => navigate(`/${props.name}`, { replace: true }),
		[navigate]
	)
	return (
		<Card>
			<img alt={props.id} src={props.image} width="100%" height="300px" />
			<CardBody>
				<CardTitle key={props.id} tag="h5">
					{props.name}
				</CardTitle>
				<CardText>
					<strong>Origin : </strong>
					{props.origin}
				</CardText>
				<CardText>
					<strong>Temperament : </strong>
					{props.temperament}
				</CardText>

				<Button color="dark" onClick={handleOnClick}>
					More Details
				</Button>
			</CardBody>
		</Card>
	)
}

export default Cards
