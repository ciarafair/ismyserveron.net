// @ts-expect-error import react
import * as React from 'react'
import DeveloperCommand from '../components/developerCommand'

const possibleStrings: Array<string> = [
	"Why are you asking me? I have no clue.",
	"It might be, you should probably go check that.",
	"I eated it.",
	"Have you tried turning it on and off again?",
	"start maybe.exe.",
	"Reply hazy, try again.",
	"Better not tell you now."
]

const chosenString: string = possibleStrings[Math.floor(Math.random()*possibleStrings.length)]

function setElementAttribute() {
	// @ts-expect-error annoying null error
	const root: Element = document.body.querySelector("#root")
	//console.log("Found root element: ", root)
	// @ts-expect-error annoying null error
	const selection: Element = root.querySelector(".command")
	//console.log("Found selection: ", selection)
	if (selection != null) {
		document.documentElement.style.setProperty('--animationSteps', String(chosenString.length))
		document.documentElement.style.setProperty('--animationTime', String(25 * chosenString.length))
		selection.className = "command active"
	}
}

const Home = () => {
	return (
		<>
			<h1 className="heading">Is my server online?</h1>
			<DeveloperCommand commandString={chosenString}/>
		</>
	)
}
window.addEventListener('DOMContentLoaded', () => {
	setElementAttribute()
});

export default Home
