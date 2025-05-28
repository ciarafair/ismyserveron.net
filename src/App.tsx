/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import Error from './typescript/routes/Error'
import Logs from './typescript/routes/Logs'
import About from './typescript/routes/About'

function App(this: any): React.ReactElement {
	useEffect(() => {
		document.addEventListener('load', this, true); {
			//console.log('App.tsx has loaded.')
		}
	}, []);

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/logs" element={<Logs />} />
				<Route path="/projects" element={<Error />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
