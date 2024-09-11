import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'
import CommandLine from '../components/CommandLine.tsx'

function About(): React.ReactElement {
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<CommandLine />
				<div className='flex-row'>
					<p className='info'>
						Hi! My name is <a id='name'>Ciaran Fairbairn</a>. I&#39;m Canadian Australian, I do programming and UI/UX design in my free time.
					</p>
				</div>
			</main>
			<div className='crt' />
		</>
	)
}

export default About
