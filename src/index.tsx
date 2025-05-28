// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

/* Potential inspirations:
	Use of ASCII art and BIOS-style fonts
	https://int10h.org/oldschool-pc-fonts/#-

	Dynamic text borders:
	https://jsfiddle.net/fleb/hzj7y2u4/
*/

const rootElement: Element = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
