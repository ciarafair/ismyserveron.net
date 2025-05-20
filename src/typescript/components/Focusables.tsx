import React from 'react'
import applyTextBorder from '../scripts/AsciiBorders.ts'
import { CSSProperties } from "react";
import $ from 'jquery';

let indexNumber = -1

const handleKeyPress = (e: KeyboardEvent) => {

	const elementList: NodeListOf<Element> = document.querySelectorAll('.link[tabindex]:not([tabindex="-1"])');
	const focusableElements: Array<Element> = Array.prototype.slice.call(elementList).map(function (element) {
		return element.value;
	});
	//for (const node of elementList) { console.log(node); }

	if (e.key === 'ArrowUp') {

		if ((indexNumber) > 0) {
			indexNumber = indexNumber - 1
			const selectedElement: JQuery<HTMLElement> = $(`[tabindex=${indexNumber}]`);
			selectedElement.trigger("focus")
			//console.log(`Focusable Length: ${focusableElements.length}\n Index Number: ${indexNumber + 1}`)*/
		}
	}

	else if (e.key === 'ArrowDown') {
		if (indexNumber < (focusableElements.length) && indexNumber != (focusableElements.length - 1)) {
			indexNumber = indexNumber + 1
			const selectedElement: JQuery<HTMLElement> = $(`[tabindex=${indexNumber}]`);
			selectedElement.trigger("focus")
			//console.log(`Focusable Length: ${focusableElements.length}\n Index Number: ${indexNumber + 1}`)*/
		}
	}
};

function disableCurrentPage(): undefined {
	let id: string = ''

	if (window.location.pathname == '/') {
		id = '#pathHome'
	}

	else if (window.location.pathname == '/about') {
		id = '#pathAbout'
	}

	else if (window.location.pathname == '/projects') {
		id = '#pathProjects'
	}

	else if (window.location.pathname == '/test') {
		id = '#pathTest'
	}

	const element: Element = document.body.querySelector(id)
	if (element != null) {
		element.classList.add('inactive')
		//console.log(`Disabling element with an ID of #${element.id}`)
	}
}

let number = 0
function pageTabIndex(page: string): number {
	if (page == '/assets/resume.pdf') {
		number = number + 1
		//console.log(`Setting resume option's index to ${number} `)
		return number - 1
	} else if (page == '/about') {
		if (window.location.pathname == page) { return -1 }
		number = number + 1
		//console.log(`Setting about option's index to ${number} `)
		return number - 1
	} else if (page == '/projects') {
		if (window.location.pathname == page) { return -1 }
		number = number + 1
		//console.log(`Setting projects option's index to ${number} `)
		return number - 1
	} else if (page == '/') {
		if (window.location.pathname == page) { return -1 }
		number = number + 1
		//console.log(`Setting home option's index to ${number} `)
		return number - 1
	} else if (page == 'https://www.linkedin.com/in/ciaran-fairbairn/') {
		number = number + 1
		//console.log(`Setting LinkedIn option's index to ${number} `)
		return number - 1
	} else if (page == 'https://github.com/ciarafair') {
		number = number + 1
		//console.log(`Setting Github option's index to ${number} `)
		return number - 1
	} else return number - 1
}

function ResumeButton(): React.ReactElement {
	const link: string = '/assets/resume.pdf'
	return (
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				&#32;Résumé
			</p>
		</a>
	)
}

function ProjectsButton(): React.ReactElement {
	const link: string = '/projects'
	return (
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				&#32;Projects
			</p>
		</a>
	)
}

function AboutMeButton(): React.ReactElement {
	const link: string = '/about'
	return (
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				&#32;About
			</p>
		</a>
	)
}

function HomeButton(): React.ReactElement {
	const link: string = '/'
	return (
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				Home
			</p>
		</a>
	)
}

function GithubButton(): React.ReactElement {

	const styleProperties1: CSSProperties = {
		width: '1.25rem',
		height: '1.25rem',
		position: 'relative'
	}

	const styleProperties2: CSSProperties = {
		width: '100%',
		height: '100%',
		position: 'relative',
		transformOrigin: '0 0'
	}

	function styleProperties3(): CSSProperties {
		let styleSettings: CSSProperties = {}
		if (window.matchMedia('(max-width: 768)')) {
			styleSettings = {
				width: '1000%',
				height: '1200%',
				scale: '0.09',
				transformOrigin: '0 0'
			}
		}
		else {
			styleSettings = {
				width: '600%',
				height: '575%',
				scale: '0.09',
				transformOrigin: '0 0'
			}

		}
		return styleSettings
	}

	const link: string = 'https://github.com/ciarafair'
	return (
		<a className='SidebarButton' href={link} >
			<p className='link' tabIndex={pageTabIndex(link)} style={styleProperties1} >
				<div style={styleProperties2}>
					<img src='assets/icons/git.svg' className='github pixel' alt='Github Logo' style={styleProperties3()} />
				</div>
			</p>
		</a >
	)
}

function LinkedInButton(): React.ReactElement {

	const styleProperties1: CSSProperties = {
		width: '1.25rem',
		height: '1.25rem',
		position: 'relative'
	}

	const styleProperties2: CSSProperties = {
		width: '100%',
		height: '100%',
		position: 'absolute',
		transformOrigin: '0 0'
	}

	function styleProperties3(): CSSProperties {
		let styleSettings: CSSProperties = {}
		if (window.matchMedia('(max-width: 768)')) {
			styleSettings = {
				width: '1000%',
				height: '1200%',
				scale: '0.09',
				transformOrigin: '0 0'
			}
		}
		else {
			styleSettings = {
				width: '600%',
				height: '575%',
				scale: '0.09',
				transformOrigin: '0 0'
			}
		}
		return styleSettings
	}

	const link: string = 'https://www.linkedin.com/in/ciaran-fairbairn/'
	return (
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)} style={styleProperties1} >
				<div style={styleProperties2}>
					<img src='assets/icons/linkedin.svg' className='linkedin pixel' alt='LinkedIn Logo' style={styleProperties3()} />
				</div>
			</p>
		</a>
	)
}

export function Sidebar(): React.ReactElement {
	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);

	document.addEventListener('DOMContentLoaded', function () {
		applyTextBorder('#menu', '#D4D4D4', '┌─┐│ │└─┘')
		disableCurrentPage()
	});

	return (
		<>
			<div className='menu'>
				<div id='menu' className='box default'  >
					<p className='title'>Menu</p>
					<div id='internal' className='column adjustable'>
						<div id='pathResume'>
							<ResumeButton />
						</div>
						<div id='pathProjects'>
							<ProjectsButton />
						</div>
						<div id='pathAbout'>
							<AboutMeButton />
						</div>
						<div id='pathHome'>
							<HomeButton />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}

export function ExternalLinks(): React.ReactElement {
	document.addEventListener('DOMContentLoaded', function () {
		applyTextBorder('#external', '#D4D4D4', '┌─┐│ │└─┘')
	});

	return (
		<>
			<div className='menu'>
				<div id='external' className='box default'>
					<p className='title hideable'>Links</p>
					<div className='row adjustable'>
						<div id='icon'>
							<GithubButton />
						</div>
						<div id='icon'>
							<LinkedInButton />
						</div>
					</div>
				</div>
			</div>
		</>
	)
}
