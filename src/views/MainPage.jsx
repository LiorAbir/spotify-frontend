import React from 'react'
import { CardList } from '../cmps/CardList'

export function MainPage() {
	return (
		<section className="main-page">
			<div className="background"></div>
			<div className="main-page-container">
				<div className="main-page-header">
					<h2 className="main-title">Good afternoon</h2>
				</div>
				<CardList />
			</div>
		</section>
	)
}
