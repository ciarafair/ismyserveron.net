import React from 'react'
import applyTextBorder from '../../typescript/scripts/AsciiBorders.ts'
import Background from '../components/Background.tsx'
import Sidebar from '../components/Sidebar.tsx'

function Home(): React.ReactElement {
	applyTextBorder('#home-box1.ascii-box', '#D4D4D4', '┌─┐│ ││ │')
	applyTextBorder('#home-box2.ascii-box', '#D4D4D4', '├─┤│ │└─┘')
	applyTextBorder('#home-box3.ascii-box', '#D4D4D4', '├─┤│ │└─┘')
	return (
		<>
			<Background />
			<Sidebar />
			<main>
				<div className='flex-column'>
					<div className='flex-row'>
						<div className='ascii-box no-title' id='home-box1' >
							<p className='info' id='setup-utility'>
								AMIBIOS NEW SETUP UTILITY - VERSION 3.31a
							</p>
						</div>
					</div>
					<div className='flex-row'>
						<div className='ascii-box' id='home-box2' >
							<p className='info'>
								Hello world! This website serves as a portfolio for my work.
							</p>
						</div>
					</div>
					<div className='flex-row'>
						<div className='ascii-box' id='home-box3' >
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
				</div>
			</main>
			<p className='copyright'>© Ciaran Fairbairn</p>
			<div className='crt' />
		</>
	)
}

export default Home
