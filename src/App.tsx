import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import About from './typescript/routes/About.tsx'
import Error from './typescript/routes/Error.tsx'

function App(): React.ReactElement {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="/error" element={<Error />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
