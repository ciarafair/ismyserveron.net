export function disableCurrentPage(): undefined {
	let id: string = ''

	if (window.location.pathname == '/') {
		id = '#pathHome'
	}

	else if (window.location.pathname == '/about') {
		id = '#pathAbout'
	}

	else if (window.location.pathname == '/logs') {
		id = '#pathLogs'
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
