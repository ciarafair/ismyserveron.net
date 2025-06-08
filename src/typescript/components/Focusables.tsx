/* eslint-disable @typescript-eslint/no-explicit-any */

import React from 'react'
import applyTextBorder from '../scripts/asciiBorder.ts'

export function Sidebar(this: any): React.ReactElement {

	const applyBorders = () => {
		applyTextBorder('#menu', '#D4D4D4', '┌─┐│ │└─┘')
	}

	document.addEventListener('load', this, true); {
		//console.log("Focusables.tsx has loaded.")
		applyBorders()
	}

	return (
		<>
			<nav className='column adjustable'>
				<div id='menu' className='box default'>
					<p className='title hideable'>Links</p>
					<div id='internal' className='column adjustable'>
						<a id='pathAbout' className='link list1 point' href={'/about'}>
							<p className='navButtonText'>
								&#32;About
							</p>
						</a>
						<a id='pathContact' className='link list1 point' href={'/contact'}>
							<p className='navButtonText'>
								&#32;Contact
							</p>
						</a>
						<a id='pathHome' className='link list1 point' href={'/'}>
							<p className='navButtonText'>
								&#32;Home
							</p>
						</a>
						<br className='nav-spacer' />
						<a id='pathResume' className='link list1 point' href={'/assets/resume.pdf'}>
							<p className='navButtonText'>
								&#32;Résumé
							</p>
						</a>
						<a id='pathGithub' className='link list1 point external-link' href={'https://github.com/ciarafair'}>
							<p className='navButtonText'>
								&#32;Github
							</p>
						</a>
						<a id='pathLinkedIn' className='link list1 point external-link' href={'https://www.linkedin.com/in/ciaran-fairbairn/'}>
							<p className='navButtonText'>
								&#32;LinkedIn
							</p>
						</a>
					</div>
				</div>
			</nav >
		</>
	)
}
