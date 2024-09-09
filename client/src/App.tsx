import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'

function App(): React.ReactElement {
	return (
		<>
			<div className="app">
				<Routes>
					<Route path="/" element={<Home />} />
				</Routes>
			</div>
		</>
	)
}

export default App
