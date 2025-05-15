import React from 'react'
import $ from 'jquery';

let indexNumber = -1
const handleKeyPress = (e: KeyboardEvent) => {
	const focusableElements = Array.from(
		document.querySelectorAll('.menu .link[tabindex]')
	).filter((element) => !(element as HTMLElement).classList.contains('inactive'));

	if (e.key === 'ArrowUp') {
		if (indexNumber < 0) {
			indexNumber = indexNumber + 1
			const selectedElement: JQuery<HTMLElement> = $(`[tabindex=${indexNumber}]`);
			selectedElement.trigger("focus")
		}
		if (indexNumber > 0) {
			indexNumber = indexNumber - 1
			const selectedElement: JQuery<HTMLElement> = $(`[tabindex=${indexNumber}]`);
			selectedElement.trigger("focus")
		}
	} else if (e.key === 'ArrowDown') {
		if (indexNumber < focusableElements.length - 2) {
			indexNumber = indexNumber + 1
			const selectedElement: JQuery<HTMLElement> = $(`[tabindex=${indexNumber}]`);
			selectedElement.trigger("focus")
		}
	}
};

function disableCurrentPage(): undefined {
	let id: string = ''

	if (window.location.pathname =='/') {
		id = '#pathHome'
	}

	else if (window.location.pathname =='/about') {
		id = '#pathAbout'
	}

	else if (window.location.pathname =='/error') {
		id = '#pathError'
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
		if (window.location.pathname == page) {return -1}
		number = number + 1
		return number - 1
	} else if (page == '/about') {
		if (window.location.pathname == page) {return -1}
		number = number + 1
		return number - 1
	} else if (page == '/error') {
		if (window.location.pathname == page) {return -1}
		number = number + 1
		return number - 1
	} else if (page == '/') {
		if (window.location.pathname == page) {return -1}
		number = number + 1
		return number - 1
	}
	return -1
}

function ResumeButton(): React.ReactElement {
	const link: string = '/assets/resume.pdf'
	return(
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				&#32;Résumé
			</p>
		</a>
	)
}

function ProjectsButton(): React.ReactElement {
	const link: string = '/error'
	return(
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				&#32;Projects
			</p>
		</a>
	)
}


function AboutMeButton(): React.ReactElement {
	const link: string = '/about'
	return(
		<a className='SidebarButton' href={link}>
			<p className='link' tabIndex={pageTabIndex(link)}>
				&#32;About
			</p>
		</a>
	)
}

function HomeButton(): React.ReactElement {
	const link: string = '/'
	return(
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
	document.addEventListener('DOMContentLoaded', function() {
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
						<div id='pathError'>
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
