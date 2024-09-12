import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'
import CommandLine from '../components/CommandLine.tsx'
import applyTextBorder from '../AsciiBorders.ts'

function About(): React.ReactElement {
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<CommandLine />
				<div className='flex-row'>
					<div className='ascii-box no-title' id='box3' >
						<p className='info'>
							Hi! My name is <a id='name'>Ciaran Fairbairn</a>.<br/>I&#39;m Canadian Australian, and do programming & UI/UX design in my free time.
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
	applyTextBorder('#box3.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
});

export default About
