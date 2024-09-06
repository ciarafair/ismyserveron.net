import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

// @ts-expect-error annoying null error
const rootElement: HTMLElement = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
	<React.StrictMode>
		<BrowserRouter>
			<App />
		</BrowserRouter>
	</React.StrictMode>
)
