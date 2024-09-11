import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'
import CommandLine from '../components/CommandLine.tsx'

function Home(): React.ReactElement {
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<div className="flex-row">
					<CommandLine />
				</div>
				<div className="flex-row">
					<p className='info'>
						Hello world! This website serves as a portfolio for my work.
					</p>
				</div>
			</main>
			<div className='crt' />
		</>
	)
}


export default Home
