import React from 'react'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'

function About(): React.ReactElement {
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<div className='flex-column'>
					<div className='flex-row'>
						<div className='ascii-box no-title' id='about-box1' >
							<p className='info'>
								Hi! My name is <a id='name'>Ciaran Fairbairn</a>. I&#39;m Canadian Australian, and do programming & UI/UX design in my free time.
							</p>
						</div>
					</div>
					</div>
			</main>
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default About
