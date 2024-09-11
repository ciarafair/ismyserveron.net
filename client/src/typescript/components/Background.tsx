import React from 'react'
import squareDesign from '/assets/squareDesign.svg'
import circleDesign from '/assets/circleDesign.svg'

//TODO: Use background similar to this: https://jsfiddle.net/fleb/hzj7y2u4/

function Background(): React.ReactElement {
	return (
		<>
			<div className='grid'/>
			<div className="overlay" />
			<img className="top-right" src={squareDesign} alt='Square design' />
			<img className="bottom-left" src={circleDesign} alt='Circle design' />
		</>
	)
}

export default Background
