/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import Background from '../components/Background.tsx'
import applyTextBorder from '../scripts/asciiBorder.ts'
import { Sidebar } from '../components/Focusables.tsx'
import Copyright from '../components/Copyright.tsx'

function Testing(this: any): React.ReactElement {
	const applyBorders = () => {
		applyTextBorder('#test1', '#D4D4D4', '╔═╗║ ║╚═╝')
		applyTextBorder('#test2', '#D4D4D4', '╔═╗║ ║║ ║')
		applyTextBorder('#test3', '#D4D4D4', '╟─╢║ ║║ ║')
		applyTextBorder('#test4', '#D4D4D4', '╟─╢║ ║╚═╝')
		applyTextBorder('#test5', '#D4D4D4', '╔═╗║ ║╚═╝')
		applyTextBorder('#test6', '#D4D4D4', '╔═╗║ ║╚═╝')
		applyTextBorder('#test7', '#D4D4D4', '╔═╗║ ║╚═╝')
		applyTextBorder('#test8', '#D4D4D4', '╔═╗║ ║╚═╝')
		applyTextBorder('#test9', '#D4D4D4', '╔═╗║ ║╚═╝')
	}

	useEffect(() => {
		document.addEventListener('load', this, true); {
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
						<div className='row'>
							<div id='test1' className='box default testbox' />
							<div className='column'>
								<div id='test2' className='box top testbox' />
								<div id='test3' className='box middle testbox' />
								<div id='test4' className='box bottom testbox' />
							</div>
							<div className='column'>
								<div className='row'>
									<div id='test5' className='box default testbox' />
									<div id='test6' className='box default testbox' />
									<div id='test7' className='box default testbox' />
								</div>
								<div className='row'>
									<div id='test8' className='box default testbox' />
									<div id='test9' className='box default testbox' />
								</div>
							</div>
						</div>
					</section>
				</div>
			</main >
			<Copyright />
		</>
	)
}

export default Testing
