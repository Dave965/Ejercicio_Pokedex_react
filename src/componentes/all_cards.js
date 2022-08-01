import React from 'react'
import Card from './card.js'
function all_cards(data) {
	return (

		<div className="container d-flex justify-content-center">
			<Card poke={data.poke}/>
		</div>
	)
}

export default all_cards