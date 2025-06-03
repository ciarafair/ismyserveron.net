/* eslint-disable @typescript-eslint/no-explicit-any */

import React, { useEffect } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'

function Home(this: any): React.ReactElement {
	const applyBorders = () => {
		applyTextBorder('#hero1', '#D4D4D4', '╔═╗║ ║║ ║')
		applyTextBorder('#hero2', '#D4D4D4', '╟─╢║ ║║ ║')
		applyTextBorder('#hero3', '#D4D4D4', '╟─╢║ ║╚═╝')
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
			<main>
				<div className='row adjustable'>
					<Sidebar />
					<section className='column'>
						<div id='hero1' className='box top center'>
							<p id='setup'>
								AMIBIOS NEW SETUP UTILITY - VERSION 3.31a
							</p>
						</div>
						<div id='hero2' className='box middle center'>
							<p id='intro'>
								Hello world! My name is Ciaran Fairbairn
							</p>
						</div>
						<div id='hero3' className='box bottom center'>
							<div className='row' id='controls'>
								<p className='info' id='controls'>
									↑↓←→: Focus Item
								</p>
								<p className='info' id='controls'>
									Enter: Select
								</p>
								<p className='info' id='controls'>
									+/-: Change Values
								</p>
								<p className='info' id='controls'>
									F1: Help
								</p>
								<p className='info' id='controls'>
									F6: Defaults
								</p>
							</div>
						</div>
					</section>
				</div>
			</main >

			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Home
