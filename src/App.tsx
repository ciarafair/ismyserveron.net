/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import Error from './typescript/routes/Error'
import Logs from './typescript/routes/Logs'
import About from './typescript/routes/About'

function App(this: any): React.ReactElement {

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
