import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
// import { router } from './router'

//CMPS
import { MainPage } from './views/MainPage'

function App() {
	return (
		<Router>
			<div className="app">
				<div className="main-app grig main-layout">
					<Routes>
						<Route path="/" element={<MainPage />}></Route>
					</Routes>
				</div>
			</div>
		</Router>
	)
}

export default App
