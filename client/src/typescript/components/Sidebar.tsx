import React from 'react'
import applyTextBorder from '../AsciiBorders.ts'

const handleKeyPress = (e: KeyboardEvent) => {
	const focusableElements = document.querySelectorAll('#menu1 [tabindex]'); // Select elements with tabindex
	const currentFocusedElement = document.activeElement as HTMLElement;
	let index = Array.from(focusableElements).indexOf(currentFocusedElement);

	if (e.key === 'ArrowDown') {
		// Move focus to the next element
		index = (index + 1) % focusableElements.length;
		(focusableElements[index] as HTMLElement).focus();
	} else if (e.key === 'ArrowUp') {
		// Move focus to the previous element
		index = (index - 1 + focusableElements.length) % focusableElements.length;
		(focusableElements[index] as HTMLElement).focus();
	} else if (e.key === 'ArrowRight') {
		// Move focus to the previous element
		index = (index - 1 + focusableElements.length) % focusableElements.length;
		(focusableElements[index] as HTMLElement).focus();
	} else if (e.key === 'ArrowLeft') {
		// Move focus to the next element
		index = (index + 1) % focusableElements.length;
		(focusableElements[index] as HTMLElement).focus();
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

	const element: Element = document.body.querySelector(id)
	if (element != null) {
		element.classList.add('inactive')
		console.log(`Disabling element with an ID of #${element.id}`)
	}
}

function ResumeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/assets/resume.pdf'>
			<p className='link' tabIndex={0}>
				&#32;Résumé
			</p>
		</a>
	)
}

function AboutMeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/about'>
			<p className='link' tabIndex={1}>
				&#32;About
			</p>
		</a>
	)
}

function HomeButton(): React.ReactElement {
	return(
		<a className='SidebarButton' href='/'>
			<p className='link' tabIndex={2}>
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

document.addEventListener('DOMContentLoaded', function() {
	applyTextBorder('#menu1.ascii-box', '#D4D4D4', '╒═╕│ │╘═╛')
	disableCurrentPage()
});

export default Sidebar
