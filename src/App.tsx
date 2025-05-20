import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import Error from './typescript/routes/Error'

function App(): React.ReactElement {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

export default App
