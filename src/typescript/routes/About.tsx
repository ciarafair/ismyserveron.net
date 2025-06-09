/* eslint-disable @typescript-eslint/no-explicit-any */

//? About me page inspired by https://bjornmelin.io/about/ and https://bogdanmaric.dev/ which has a particularly good projects section

//? https://www.demon142.net/ has an interesting section about frameworks and tools etc

//? Skills section similar to https://daniel-michael.com/ would be cool

import React, { useEffect, useState } from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'
import Background from '../components/Background.tsx'
import { Sidebar } from '../components/Focusables.tsx'
import { emitter } from '../scripts/eventBus.ts'
import Copyright from '../components/Copyright.tsx'
import Education from '../components/Education.tsx'
import Skills from '../components/Skills.tsx'
import General from '../components/General.tsx'

function About(this: any): React.ReactElement {

	const [content, setContent] = useState(General);
	const handleClick = (content: React.ReactElement<any>) => {
		setContent(content);
		setTimeout(() => handleHide(), 0);
	};

	function AboutButtonOne(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(General())}>
				<p className='navButtonText'>
					General
				</p>
			</div>
		)
	}

	function AboutButtonTwo(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(Education())}>
				<p className='navButtonText'>
					Education
				</p>
			</div>
		)
	}

	function AboutButtonThree(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(Skills())}>
				<p className='navButtonText'>
					Skills
				</p>
			</div>
		)
	}

	/*function AboutButtonFour(): React.ReactElement {
		return (
			<div className='link list2 point' onClick={() => handleClick(test2content)}>
				<p className='navButtonText'>
					Test 2
				</p>
			</div>
		)
	}*/

	const handleScroll = (direction: string) => {
		const container = document.querySelector('.scroll') as HTMLElement;
		if (!container) return;

		const lineHeight = parseFloat(getComputedStyle(container).lineHeight) * 3;
		container.scrollBy({ top: direction === 'down' ? lineHeight : -lineHeight, behavior: 'smooth' });

		// Re-check scroll state after scroll settles
		setTimeout(() => handleHide(), 300); // Wait for smooth scroll to complete
	};


	const handleHide = () => {
		const container = document.querySelector('.scroll') as HTMLElement;
		const indicators = document.querySelectorAll('.indicator');

		if (!container) return;

		const atTop = container.scrollTop === 0;
		const atBottom = container.scrollTop + container.clientHeight >= container.scrollHeight;

		if (container.scrollHeight <= container.clientHeight) {
			// No scrolling needed
			indicators.forEach(el => el.classList.add('inactive'));
			//console.log('Scroll disabled');
		} else {
			//console.log('Scroll enabled');
			document.querySelector('.top.indicator')?.classList.toggle('inactive', atTop);
			document.querySelector('.bottom.indicator')?.classList.toggle('inactive', atBottom);
		}
	};


	const applyBorders = () => {
		applyTextBorder('#about1', '#D4D4D4', '╔═╗║ ║║ ║')
		applyTextBorder('#about2', '#D4D4D4', '╔═╤║ │╚═╧')
		applyTextBorder('#about3', '#D4D4D4', '══╗  ║══╝')
	}

	useEffect(() => {
		applyBorders();

		emitter.emit('routeLoaded', 'About.tsx');

		setTimeout(() => {
			const container = document.querySelector('.scroll') as HTMLElement;
			if (container) {
				setTimeout(() => handleHide(), 0)
			}
		}, 50);
	}, [content]);


	return (
		<>
			<Background />
			<main>
				<div className='row adjustable'>
					<Sidebar />
					<section className='column'>
						<div className='row boxes'>
							<div className='column quarter'>
								<div id='about2' className='box left default'>
									<div className='column' id='collection'>
										<AboutButtonOne />
										<AboutButtonTwo />
										<AboutButtonThree />
									</div>
								</div>
							</div>
							<div className='column threequarters'>
								<div id='about3' className='box right default'>
									<div className='column'>
										<a className='top indicator'>
											<p className='link list3 indicatorText highlight' onClick={() => handleScroll('up')}>
												▲
											</p>
										</a>
										{content}
										<a className='bottom indicator '>
											<p className='link list3 indicatorText highlight' onClick={() => handleScroll('down')}>
												▼
											</p>
										</a>
									</div>
								</div>
							</div>
						</div>
					</section>
				</div >
			</main >
			<Copyright />
			<div className='crt' />
		</>
	)
}

export default About
