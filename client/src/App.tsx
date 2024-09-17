import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import About from './typescript/routes/About'
import Error from './typescript/routes/Error'

/* Potential inspirations:
	Use of ASCII art and BIOS-style fonts
	https://int10h.org/oldschool-pc-fonts/#-

	Dynamic text borders:
	https://jsfiddle.net/fleb/hzj7y2u4/
*/

function App(): React.ReactElement {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

/*
window.addEventListener('click' , (e) => {
	const target = e.target.className;
	console.log(target);
})
*/

export default App
