import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'

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

export default Error
