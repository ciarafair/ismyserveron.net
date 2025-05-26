import React from 'react'
import applyTextBorder from '../../typescript/scripts/AsciiBorders.ts'
import Background from '../components/Background.tsx'
import { Sidebar, ExternalLinks } from '../components/Focusables.tsx'

function Error(): React.ReactElement {
	console.log("Error.tsx has loaded")
	applyTextBorder('#one.box', '#D4D4D4', '┌─┐│ │└─┘')
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
