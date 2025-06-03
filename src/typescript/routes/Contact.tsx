/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'

function Contact(this: any): React.ReactElement {
	const applyBorders = () => {
		applyTextBorder('#one', '#D4D4D4', '╔═╗║ ║╚═╝')
	}

	useEffect(() => {
		document.addEventListener('load', this, true); {
			emitter.emit('routeLoaded', 'Home.tsx')
			applyBorders()
		}
	}, []);

	return (
		<>
			<Background />
			<main className='row adjustable'>
				<Sidebar />
				<section className='column'>
					<div id='one' className='box default'>
					</div>
				</section>
			</main >
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Contact
