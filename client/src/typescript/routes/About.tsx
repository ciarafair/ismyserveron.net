import React from 'react'
import Background from '../components/Background'
import Sidebar from '../components/Sidebar'
import CommandLine from '../components/commandLine'

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
