const formatResult = (item) => {
	return (
		<>
			<span style={{ display: 'block', textAlign: 'left' }}>id: {item.id}</span>
			<span style={{ display: 'block', textAlign: 'left' }}>
				name: {item.name}
			</span>
		</>
	)
}
