import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'
import CommandLine from '../components/CommandLine.tsx'
import applyTextBorder from '../AsciiBorders.ts'

function Home(): React.ReactElement {
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<div className="flex-row">
					<CommandLine />
				</div>
				<div className='flex-row'>
					<div className='ascii-box no-title' id='box1' >
						<p className='info'>
							Hello world! This website serves as a portfolio for my work.
						</p>
					</div>
				</div>
			</main>
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

document.addEventListener('DOMContentLoaded', function() {
	applyTextBorder('#box1.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
});

export default Home
