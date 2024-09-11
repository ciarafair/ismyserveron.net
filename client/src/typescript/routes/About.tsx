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
					<div className='ascii-box' id='box3' >
						<p className='info'>
							Hi! My name is <a id='name'>Ciaran Fairbairn</a>. I&#39;m Canadian Australian, <br/>I do programming and UI/UX design in my free time.
						</p>
					</div>
				</div>
			</main>
			<div className='crt' />
		</>
	)
}

document.addEventListener('DOMContentLoaded', function() {
	applyTextBorder('#box3.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
});

export default About
