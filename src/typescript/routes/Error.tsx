/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import applyTextBorder from '../../typescript/scripts/AsciiBorders.ts'
import Background from '../components/Background.tsx'
import { Sidebar, ExternalLinks } from '../components/Focusables.tsx'

function Error(this: any): React.ReactElement {

	const applyBorders = () => {
		applyTextBorder('#one.box', '#D4D4D4', '┌─┐│ │└─┘')
	}

	document.addEventListener('readystatechange', this, true); {
		console.log("Error.tsx has loaded.")
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
					<div id='one' className='error box default'>
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
