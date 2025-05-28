/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'

function About(this: any): React.ReactElement {
	const applyBorders = () => {
		applyTextBorder('#one', '#D4D4D4', '╔═╗║ ║║ ║')
		applyTextBorder('#two', '#D4D4D4', '║ ║║ ║║ ║')
		applyTextBorder('#three', '#D4D4D4', '║ ║║ ║╚═╝')
	}

	useEffect(() => {
		document.addEventListener('load', this, true); {
			emitter.emit('routeLoaded', 'About.tsx')
			applyBorders()
		}
	}, []);

	return (
		<>
			<Background />
			<div id='page' className='row adjustable'>
				<nav className='column adjustable' id='collection'>
					<Sidebar />
				</nav>

				<main className='column'>
					<div id='one' className='empty box top'>
					</div>
					<div id='two' className='box middle center'>
						<p id='intro'>
							About section
						</p>
					</div>
					<div id='three' className='empty box bottom'>
					</div>
				</main >
			</div >
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default About
