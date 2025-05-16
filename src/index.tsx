// eslint-disable-next-line @typescript-eslint/ban-ts-comment
// @ts-expect-error
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.tsx'

const rootElement: Element = document.getElementById('root')

ReactDOM.createRoot(rootElement).render(
	<BrowserRouter>
		<App />
	</BrowserRouter>
)
