import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'
import applyTextBorder from '../AsciiBorders.ts'

function Error(): React.ReactElement {
	return (
		<>
			<Background />
			<main>
				<div className='flex-row'>
					<div className='ascii-box no-title' id='error-box1' >
						<p className='title' id='error-box1'>
							404.txt
						</p>
						<p className="info">Page not found.</p>
					</div>
				</div>
			</main>
			<Sidebar />
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

document.addEventListener('DOMContentLoaded', function() {
	applyTextBorder('#error-box1.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
});

export default Error
