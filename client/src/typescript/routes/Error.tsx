import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'
import CommandLine from '../components/CommandLine.tsx'

function Error(): React.ReactElement {
	return (
		<>
			<Background />
			<main>
				<div className='flex-row'>
					<CommandLine />
				</div>
				<div className='flex-row'>
					<p className="info">Error 404. Not found.</p>
				</div>
			</main>
			<Sidebar />
			<div className='crt' />
		</>
	)
}

export default Error
