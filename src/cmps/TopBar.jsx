import React from 'react'

//SVG
import { RightArrow } from '../svgs/RightArrow'
import { LeftArrow } from '../svgs/LeftArrow'
import { DownArrow } from '../svgs/DownArrow'
import { User } from '../svgs/User'

export function TopBar() {
	return (
		<div className="top-bar">
			<header className="top-bar-menu flex">
				<div className="navigate-btns flex">
					<button className="btn back-btn" title="Go back">
						<LeftArrow />
					</button>
					<button className="btn forward-btn" title="Go forward">
						<RightArrow />
					</button>
				</div>

				<button className="user-manu-container flex flex-center">
					<div className="user-svg-container flex flex-center">
						<User />
					</div>
					<span className="username">Lior</span>
					<DownArrow />
				</button>
			</header>
		</div>
	)
}
