import React from 'react'
import applyTextBorder from '../../typescript/scripts/AsciiBorders.ts'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'

function Test(): React.ReactElement {
	applyTextBorder('#test-box1.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<div className='flex-column'>
					<div className='flex-row'>
						<div className='ascii-box no-title' id='test-box1' >
							<p className='info'>
								Test
							</p>
						</div>
					</div>
				</div>
			</main>
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Test
