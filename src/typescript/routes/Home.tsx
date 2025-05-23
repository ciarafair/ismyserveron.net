import React from 'react'
import applyTextBorder from '../../typescript/scripts/AsciiBorders.ts'
import Background from '../components/Background.tsx'
import { ExternalLinks, Sidebar } from '../components/Focusables.tsx'

function Home(): React.ReactElement {

	applyTextBorder('#one', '#D4D4D4', '╔═╗║ ║║ ║')
	applyTextBorder('#two', '#D4D4D4', '╟─╢║ ║║ ║')
	applyTextBorder('#three', '#D4D4D4', '╟─╢║ ║╚═╝')

	return (
		<>
			<Background />
			<div id='page' className='row adjustable'>
				<nav className='column adjustable'>
					<Sidebar />
					<ExternalLinks />
				</nav>

				<main className='column'>
					<div id='one' className='box top'>
						<p id='setup'>
							AMIBIOS NEW SETUP UTILITY - VERSION 3.31a
						</p>
					</div>
					<div id='two' className='box middle'>
						<p id='intro'>
							Hello world! This website serves as a portfolio for my work.
						</p>
					</div>
					<div id='three' className='box bottom'>
						<div className='row'>
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
				</main >
			</div >
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Home
