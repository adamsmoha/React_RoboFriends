import React from 'react'
import Card from './Card'

const CardList=({robots})=>{
	// looping 2ru robots with map
	return(
		<div>
			{
			robots.map((user,i)=>{
		return (
			<Card 
				key={i}
				id={robots[i].id} 
				name={robots[i].name} 
				email={robots[i].email}
			/>
		)
	})	
			}
		</div>
	)
}
export default CardList;