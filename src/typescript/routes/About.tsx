import React from 'react'
import applyTextBorder from '../../typescript/scripts/AsciiBorders.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'

function About(): React.ReactElement {
	applyTextBorder('#about-box1.ascii-box', '#D4D4D4', '┌─┐│ │└─┘')
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
