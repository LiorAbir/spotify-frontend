import { useState } from 'react'
import { HashRouter as Router, Route, Routes } from 'react-router-dom'
// import { router } from './router'
import { youtubeService } from './services/youtube.service'
//CMPS
import { MainPage } from './views/MainPage'
import { TopBar } from './cmps/TopBar'
import { MainNav } from './cmps/MainNav'
import { PlayingBar } from './cmps/PlayingBar'

function App() {
	return (
		<Router>
			<div className="app">
				<div className="main-app grid main-layout">
					<TopBar />
					<MainNav />
					<PlayingBar />
					<main className="main-content">
						<Routes>
							<Route path="/" element={<MainPage />}></Route>
						</Routes>
					</main>
				</div>
			</div>
		</Router>
	)
}

export default App
