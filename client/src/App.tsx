import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './typescript/routes/Home'
import About from './typescript/routes/About'
import Error from './typescript/routes/Error'

function App(): React.ReactElement {

	return (
		<>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/about" element={<About />} />
				<Route path="*" element={<Error />} />
			</Routes>
		</>
	)
}

/*
window.addEventListener('click' , (e) => {
	const target = e.target.className;
	console.log(target);
})
*/

export default App
