import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import About from './typescript/routes/About'
import Error from './typescript/routes/Error'
import applyTextBorder from './typescript/scripts/AsciiBorders.ts'

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

document.addEventListener('readystatechange', function() {
	if (document.readyState === 'complete') {
		if (window.location.pathname =='/') {
			applyTextBorder('#home-box1.ascii-box', '#D4D4D4', '╔═╗║ ║║ ║')
			applyTextBorder('#home-box2.ascii-box', '#D4D4D4', '╠═╣║ ║║ ║')
			applyTextBorder('#home-box3.ascii-box', '#D4D4D4', '╟─╢║ ║╚═╝')
		}
		if (window.location.pathname =='/about') {
			applyTextBorder('#about-box1.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
		}
		if (window.location.pathname =='/error') {
			applyTextBorder('#error-box1.ascii-box', '#D4D4D4', '╔═╗║ ║╚═╝')
		}
			applyTextBorder('#menu1.ascii-box', '#D4D4D4', '╒═╕│ │╘═╛')
	}
});
