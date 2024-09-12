import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'
import CommandLine from '../components/CommandLine.tsx'
import applyTextBorder from '../AsciiBorders.ts'

function Error(): React.ReactElement {
	return (
		<>
			<Background />
			<main>
				<div className='flex-row'>
					<CommandLine />
				</div>
				<div className='flex-row'>
					<div className='ascii-box' id='box2' >
						<p className='title' id='box2'>
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
	applyTextBorder('#box2.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
});

export default Error
