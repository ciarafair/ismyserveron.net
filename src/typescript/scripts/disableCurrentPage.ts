export default function disableCurrentPage(): undefined {
	let id: string = ''

	if (window.location.pathname == '/about') {
		id = '#pathAbout'
	}

	else if (window.location.pathname == '/contact') {
		id = '#pathContact'
	}

	else if (window.location.pathname == '/testing') {
		id = '#pathTesting'
	}

	else if (window.location.pathname == '/') {
		id = '#pathHome'
	}

	const element: Element = document.body.querySelector(id)
	if (element != null) {
		element.classList.add('inactive')
		console.log(`Disabling element with an ID of #${element.id}`)
	}
}
