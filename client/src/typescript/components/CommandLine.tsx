import React from 'react'

function chooseString(): string {
	const pathname = window.location.pathname
	let chosenString = 'error! 404'

	console.log('Setting command string')
	console.log('Setting command string')

	if (pathname == '/') {
		chosenString = './hello_world.sh'
		console.log('Found path! Using home page.')
		return chosenString
	}
	else if (pathname == '/about') {
		chosenString = 'whoami'
		console.log('Found path! Using about page.')
		return chosenString
	} else if (pathname == '/error') {
		chosenString = 'cat ./errors.txt'
		console.log('Found path! Using error page.')
		return chosenString
	}
	else {
		return chosenString
	}
}

const chosenString = chooseString()

function setElementAttribute(): void {
	const body: Element = document.body
	const selection: Element = body.querySelector('.command')
	if (selection != null) {
		console.log("Found element for command: ", selection)
		document.documentElement.style.setProperty(
			'--animationSteps',
			String(chosenString.length)
		)
		document.documentElement.style.setProperty(
			'--animationTime',
			String(25 * chosenString.length)
		)
		selection.className = 'command active'
	}
}

function CommandLine(): React.ReactElement {
	return (
		<>
			<div className="flex-row" id='commandLine'>
					<p className="prompt">
						dev&#64;website&#58;&#47;homepage&#36;&#160;
					</p>
					<p className="command">{chosenString}</p>
					<p className="caret">&#9474;</p>
				</div>
		</>
	)
}

window.addEventListener('DOMContentLoaded', function () {
	setElementAttribute()
})

export default CommandLine
