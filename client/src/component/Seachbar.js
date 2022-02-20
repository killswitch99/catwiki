import React, { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button, Form, FormGroup, Input } from 'reactstrap'
import { CatsContext } from './CatsContext'

const Searchbar = () => {
	const { searchQ, setSearchQ } = useContext(CatsContext)
	const handleOnSubmit = (e) => {
		e.preventDefault()
	}
	return (
		<Form inline>
			<FormGroup
				onSubmit={handleOnSubmit}
				style={{ display: 'flex', padding: '5px' }}
			>
				<Input
					type="text"
					required
					className="cat-name-input"
					placeholder="Name or Origin"
					style={{ margin: '5px' }}
					value={searchQ}
					onChange={(e) => {
						setSearchQ(e.target.value)
					}}
				/>
				<Button color="primary" className="btn" style={{ margin: '5px' }}>
					search
				</Button>
			</FormGroup>
		</Form>
	)
}

export default Searchbar
