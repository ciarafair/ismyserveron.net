/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import applyTextBorder from '../scripts/AsciiBorders.ts'
import Background from '../components/Background.tsx'
import { ExternalLinks, Sidebar } from '../components/Focusables.tsx'

function About(this: any): React.ReactElement {

	const applyBorders = () => {
		applyTextBorder('#one', '#D4D4D4', '╔═╗║ ║║ ║')
		applyTextBorder('#two', '#D4D4D4', '║ ║║ ║║ ║')
		applyTextBorder('#three', '#D4D4D4', '║ ║║ ║╚═╝')
	}

	document.addEventListener('load', this, true); {
		console.log("Home.tsx has loaded.")
		applyBorders()
	}

	return (
		<>
			<Background />
			<div id='page' className='row adjustable'>
				<nav className='column adjustable'>
					<Sidebar />
					<ExternalLinks />
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
