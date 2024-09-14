import React from 'react'
import applyTextBorder from '../AsciiBorders.ts'

//TODO: Remove buttons for pages that are currently in use.


function disableCurrentPage(): undefined {
	let id: string = ''

	if (window.location.pathname =='/') {
		id = '#pathHome'
	}

	else if (window.location.pathname =='/about') {
		id = '#pathAbout'
	}

	console.log(`Selecting ID of ${id}`)
	const element: Element = document.body.querySelector(id)
	if (element != null) {
		element.classList.add('inactive')
		console.log(`Disabling element ${element}`)
	}
}

function AboutMeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' id='pathAbout' href='/about'>
			<p className='link'>
				&#32;About
			</p>
		</a>
	)
}

function ResumeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' id='pathResume' href='/assets/resume.pdf'>
			<p className='link'>
				&#32;Résumé
			</p>
		</a>
	)
}

function HomeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' id='pathHome' href='/'>
			<p className='link'>
				Home
			</p>
		</a>
	)
}

function Sidebar(): React.ReactElement {
	return (
		<>
			<nav>
				<div className='menu'>
					<div className='ascii-box no-title' id='menu1' >
						<p className='title' id='menu1'>
							Menu
						</p>
						<ResumeButton />
						<AboutMeButton />
						<HomeButton />
					</div>
				</div>
			</nav>
		</>
	)
}

document.addEventListener('DOMContentLoaded', function() {
	applyTextBorder('#menu1.ascii-box', '#D4D4D4', '╒═╕│ │╘═╛')
	disableCurrentPage()
});

export default Sidebar
