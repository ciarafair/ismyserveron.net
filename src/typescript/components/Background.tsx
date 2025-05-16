import React from 'react'
import squareDesign from '/assets/squareDesign.svg'
import circleDesign from '/assets/circleDesign.svg'

function Background(): React.ReactElement {
	return (
		<>
			<div className='grid' />
			<div className="overlay" />
			<img className="top-right" src={squareDesign} alt='Square design' />
			<img className="bottom-left" src={circleDesign} alt='Circle design' />
		</>
	)
}

export default Background
