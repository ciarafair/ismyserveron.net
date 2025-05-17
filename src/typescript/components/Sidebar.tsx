import React from 'react'
import applyTextBorder from '../../typescript/scripts/AsciiBorders.ts'
import $ from 'jquery';

let indexNumber = -1

const handleKeyPress = (e: KeyboardEvent) => {

	const elementList: NodeListOf<Element> = document.querySelectorAll('.link[tabindex]:not([tabindex="-1"])');
	const focusableElements: Array<Element> = Array.prototype.slice.call(elementList).map(function (element) {
		return element.value;
	});
	/*for (const node of elementList) {console.log(node);}*/

	if (e.key === 'ArrowUp') {

		if ((indexNumber) > 0) {
			indexNumber = indexNumber - 1
			const selectedElement: JQuery<HTMLElement> = $(`[tabindex=${indexNumber}]`);
			selectedElement.trigger("focus")
			/*console.log(`Focusable Length: ${focusableElements.length}\n Index Number: ${indexNumber + 1}`)*/
		}
	}

	else if (e.key === 'ArrowDown') {
		if (indexNumber < (focusableElements.length) && indexNumber != (focusableElements.length - 1)) {
			indexNumber = indexNumber + 1
			const selectedElement: JQuery<HTMLElement> = $(`[tabindex=${indexNumber}]`);
			selectedElement.trigger("focus")
			/*console.log(`Focusable Length: ${focusableElements.length}\n Index Number: ${indexNumber + 1}`)*/
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
		console.log(`Disabling element with an ID of #${element.id}`)
	}
}

let number = 0
function pageTabIndex(page: string): number {
	if (page == '/assets/resume.pdf') {
		if (window.location.pathname == page) { return -1 }
		number = number + 1
		return number - 1
	} else if (page == '/about') {
		if (window.location.pathname == page) { return -1 }
		number = number + 1
		return number - 1
	} else if (page == '/projects') {
		if (window.location.pathname == page) { return -1 }
		number = number + 1
		return number - 1
	} else if (page == '/') {
		if (window.location.pathname == page) { return -1 }
		number = number + 1
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

/* function TestButton(): React.ReactElement {
	const link: string = '/test'
	return (
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				&#32;Test
			</p>
		</a>
	)
}
*/

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

function Sidebar(): React.ReactElement {
	React.useEffect(() => {
		document.addEventListener('keydown', handleKeyPress);
		return () => {
			document.removeEventListener('keydown', handleKeyPress);
		};
	}, []);
	document.addEventListener('DOMContentLoaded', function () {
		applyTextBorder('#menu1.ascii-box', '#D4D4D4', '┌─┐│ │└─┘')
		disableCurrentPage()
	});

	return (
		<>
			<nav>
				<div className='menu'>
					<div className='ascii-box no-title' id='menu1' >
						<p className='title' id='menu1'>
							Menu
						</p>
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
			</nav>
		</>
	)
}

export default Sidebar
