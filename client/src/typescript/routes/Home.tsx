// @ts-expect-error import react
import * as React from 'react'
import Subheading from '../components/Subheading'

const possibleStrings: Array<string> = [
	'Why are you asking me? I have no clue.',
	'Maybe, you should go check that.',
	'Sorry, I eated it.',
	'Have you turned it on and off again?',
	'./maybe.exe',
	'If it is you better go catch it!',
	"echo 'Yo momma!'",
	'sudo apt-get install idk',
]

const chosenString: string =
	possibleStrings[Math.floor(Math.random() * possibleStrings.length)]

function setElementAttribute() {
	// @ts-expect-error annoying null error
	const root: Element = document.body.querySelector('#root')
	//console.log("Found root element: ", root)
	// @ts-expect-error annoying null error
	const selection: Element = root.querySelector('.command')
	//console.log("Found selection: ", selection)
	if (selection != null) {
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

const Home = () => {
	return (
		<>
			<h1 className="heading">Is my server online?</h1>
			<Subheading commandString={chosenString} />
		</>
	)
}

window.addEventListener('DOMContentLoaded', function () {
	setElementAttribute()
})

export default Home
