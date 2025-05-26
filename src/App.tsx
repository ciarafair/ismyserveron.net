/* eslint-disable @typescript-eslint/no-explicit-any */
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import Error from './typescript/routes/Error'

function App(this: any): React.ReactElement {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<Error />} />
				<Route path="/blog" element={<Error />} />
				<Route path="/projects" element={<Error />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
