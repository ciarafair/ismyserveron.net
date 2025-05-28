/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar, ExternalLinks } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'

function Error(this: any): React.ReactElement {
	const applyBorders = () => {
		applyTextBorder('#one.box', '#D4D4D4', '┌─┐│ │└─┘')
	}

	useEffect(() => {
		document.addEventListener('load', this, true); {
			emitter.emit('routeLoaded', 'Error.tsx')
			applyBorders()
		}
	}, []);

	return (
		<>
			<Background />
			<div id='page' className='row adjustable'>
				<nav className='column adjustable'>
					<Sidebar />
					<ExternalLinks />
				</nav>

				<main className='column'>
					<div id='one' className='error box default center'>
						<p className='error title'>404.txt</p>
						<p>Page not found.</p>
					</div>
				</main >
			</div >
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Error
