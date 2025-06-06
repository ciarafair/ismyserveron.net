/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'
import Copyright from '../components/Copyright.tsx'

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
			<main>
				<div className='row adjustable'>
					<Sidebar />
					<section className='column'>
						<div id='one' className='error box default center'>
							<p className='error title'>404.txt</p>
							<p className='general-text'>Page not found.</p>
						</div>
					</section>
				</div>
			</main >
			<Copyright />
			<div className='crt' />
		</>
	)
}

export default Error
