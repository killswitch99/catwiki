import axios from 'axios'
import React, { useCallback, useEffect, useState } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import {
	Card,
	CardBody,
	CardTitle,
	Button,
	CardText,
	CardImg,
	Spinner,
} from 'reactstrap'
const CatsDetailsScreen = () => {
	const { name } = useParams()
	const [cat, setcat] = useState([''])
	const [loading, setIsLoading] = useState(true)
	const url = `/api/breeds/${name}`

	const getDetails = async () => {
		const { data } = await axios.get(url)
		setcat(data)
		setIsLoading(false)
	}
	useEffect(() => {
		getDetails()
	}, [])
	const navigate = useNavigate()
	const handleOnClick = useCallback(
		() => navigate('/', { replace: true }),
		[navigate]
	)
	return (
		<>
			{loading ? (
				<Spinner>Loading</Spinner>
			) : (
				<div>
					<Button color="dark" onClick={handleOnClick}>
						Go Back
					</Button>

					<Card>
						<CardImg
							alt={cat[0].id}
							src={cat[0].image}
							top
							width="100%"
							style={{ width: '30%', height: '50%', margin: '20px' }}
						/>
						<CardBody>
							<CardTitle tag="h5">
								<strong>{name}</strong>
							</CardTitle>
							<CardText style={{ width: '100%' }}>
								<strong>Description </strong> : {cat[0].description}
							</CardText>
							<CardText>
								<strong>Temperament</strong> : {cat[0].temperament}
							</CardText>
							<CardText>
								<strong>Origin</strong> : {cat[0].origin}
							</CardText>
							<CardText>
								<strong>Life Span </strong>: {cat[0].life_span} years
							</CardText>
							<CardText>
								<strong>Adaptability</strong> : {cat[0].adaptability} out of 5
							</CardText>
							<CardText>
								<strong>Affection Level</strong> : {cat[0].affection_level} out
								of 5
							</CardText>
							<CardText>
								<strong>Child_friendly</strong> : {cat[0].child_friendly} out of
								5
							</CardText>
							<CardText>
								<strong>Grooming</strong> : {cat[0].grooming} out of 5
							</CardText>
							<CardText>
								<strong>Health Issues </strong>: {cat[0].health_issues} out of 5
							</CardText>
							<CardText>
								<strong>Intelligence </strong>: {cat[0].intelligence} out of 5
							</CardText>
							<CardText>
								<strong>Social Needs</strong> : {cat[0].social_needs} out of 5
							</CardText>
							<CardText>
								<strong>Stranger Friendly</strong> : {cat[0].stranger_friendly}{' '}
								out of 5 /5
							</CardText>
						</CardBody>
					</Card>
				</div>
			)}
		</>
	)
}

export default CatsDetailsScreen
