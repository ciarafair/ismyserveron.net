import React from 'react'
import applyTextBorder from '../AsciiBorders.ts'

//TODO: Remove buttons for pages that are currently in use.

function AboutMeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/about'>
			<p className='link'>
				&#32;About
			</p>
		</a>
	)
}

function ResumeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/assets/resume.pdf'>
			<p className='link'>
				&#32;Résumé
			</p>
		</a>
	)
}

function HomeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/'>
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
});

export default Sidebar
