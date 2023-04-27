import { useState } from 'react'
import { NavLink } from 'react-router-dom'

//SVG
import { FullLogo } from '../svgs/FullLogo'
import { Home } from '../svgs/Home'
import { Search } from '../svgs/Search'
import { Library } from '../svgs/Library'
import { Plus } from '../svgs/Plus'
import { Heart } from '../svgs/Heart'

export function MainNav() {
	const [navWidth, setNavWidth] = useState(200)

	return (
		<nav className="main-nav flex" style={{ width: `${navWidth}px` }}>
			<div className="main-nav-container flex">
				<div className="logo">
					<NavLink to="/">
						<FullLogo />
					</NavLink>
				</div>
				<ul className="nav-main-list clean-list">
					<li>
						<NavLink to="/" className="flex">
							<Home />
							<span>home</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="flex">
							<Search />
							<span>search</span>
						</NavLink>
					</li>
					<li>
						<NavLink to="/" className="flex">
							<Library />
							<span>your library</span>
						</NavLink>
					</li>
				</ul>

				<div className="second-nav-container flex">
					<div className="create-playlist">
						<NavLink to="/" className="flex">
							<div className="plus container flex flex-center">
								<Plus />
							</div>
							<span>Create Playlist</span>
						</NavLink>
					</div>
					<div className="liked-songs">
						<NavLink to="/" className="flex">
							<div className="heart container flex flex-center">
								<Heart />
							</div>
							<span>Liked Songs</span>
						</NavLink>
					</div>

					<div className="space-conainer">
						<hr />
					</div>

					<div className="playlist-list">
						<ul className="clean-list">
							<li className="playlist-item">
								<NavLink to="/">My Playlist #1</NavLink>
							</li>
							<li className="playlist-item">
								<NavLink to="/">My Playlist #2</NavLink>
							</li>
						</ul>
					</div>
				</div>

				{/*  */}
			</div>

			<div className="layout-resizer">
				{/* <label>
            resize main navigation
            {isDrag}
            {dragDist}
            <input
                type="range"
                min="120"
                max="384"
                step="10"
                value={navWidth}
                onChange={changeNavWidth}
            />
        </label> */}
			</div>
		</nav>
	)
}
