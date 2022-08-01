import React from 'react'

function card(data) {
	return (
		<div className="card mx-2 card-block text-white bg-white bg-opacity-25 border-5" style={{minWidth: '300px', border: data.poke.color}}>
			<img src={data.poke.sprites} className="card-img-top" alt="..."/>
	          <div className="card-body">
	            <h5 className="card-title ">Nombre: {data.poke.name}</h5> 
	           </div>
	          <ul className="list-group list-group-flush">
	          <li className="list-group-item bg-transparent text-white">ID en la pokedex: {data.poke.id}</li>
	          <li className="list-group-item bg-transparent text-white">Tipo: {data.poke.types}</li>
	          </ul>
		</div>
	)
}

export default card