import React from 'react'
import Cards from '../component/Cards'
import Header from '../component/Header'
import { useContext } from 'react'
import { CatsContext } from '../component/CatsContext'
import { Col, Container, Row, Spinner } from 'reactstrap'

const HomeScreen = () => {
	const { breeds, loading, searchQ } = useContext(CatsContext)
	return (
		<div className="container">
			<Header />
			{loading && <Spinner>Loading...</Spinner>}
			<Container>
				<Row>
					{!loading &&
						breeds
							.filter((breed) => {
								if (searchQ == '') {
									return breed
								} else if (
									breed.name
										.toLowerCase()
										.replace(/ /g, '')
										.includes(searchQ.toLowerCase()) ||
									breed.origin
										.toLowerCase()
										.replace(/ /g, '')
										.includes(searchQ.toLowerCase())
								) {
									return breed
								}
							})
							.map((breed) => (
								<Col key={breed.id} xs="4">
									<Cards props={breed} />
								</Col>
							))}
				</Row>
			</Container>
		</div>
	)
}

export default HomeScreen
