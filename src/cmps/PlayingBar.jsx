import React from 'react'
import { EmptyHeart } from '../svgs/EmptyHeart'

export function PlayingBar() {
	const onSetVolume = (e) => {
		console.log(e)
	}
	return (
		<div className="playing-bar">
			<footer className="playing-bar-container flex">
				<div className="track-details flex">
					<div>
						<img
							src="https://i.scdn.co/image/ab67616d00004851109b301a6526929293efbac2"
							alt=""
						/>
					</div>
					<div className="track-info">
						<h4 className="track-name">והיא שעמדה - Live</h4>
						<h6 className="tack-artist">
							Akiva, Yonatan Razael, Nathan Goshen
						</h6>
					</div>
					<button>
						<EmptyHeart />
					</button>
				</div>

				<div className="player-control">
					<div className="player-btns"></div>
					<div className="playback-bar">
						<div className="time-left"></div>
						<div className="player-progress-bar">
							<input type="range" className="progress-bar" />
						</div>
						<div className="track-duration"></div>
					</div>
				</div>

				<div className="audio-settings">
					<div className="player-progress-bar">
						<input
							type="range"
							min={0}
							max={100}
							className="progress-bar"
							onMouseUp={(e) => onSetVolume(e)}
						/>
					</div>
				</div>
			</footer>
		</div>
	)
}
