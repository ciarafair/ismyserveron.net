// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'
import applyTextBorder from '../src/typescript/AsciiBorders'

const rootElement: Element = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
		<BrowserRouter>
			<App />
		</BrowserRouter>
)


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
