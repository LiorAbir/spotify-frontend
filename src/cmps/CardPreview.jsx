import React from 'react'

export const CardPreview = ({ item }) => {
	return (
		<div className="card-preview">
			<div className="card-img">
				<img src={item.imgUrl} alt="" />
				<div className="custom-play-btn flex flex-center">
					<svg
						role="img"
						height="24"
						width="24"
						aria-hidden="true"
						viewBox="0 0 24 24"
						data-encore-id="icon"
						class="Svg-sc-ytk21e-0 ldgdZj"
					>
						<path d="m7.05 3.606 13.49 7.788a.7.7 0 0 1 0 1.212L7.05 20.394A.7.7 0 0 1 6 19.788V4.212a.7.7 0 0 1 1.05-.606z"></path>
					</svg>
				</div>
			</div>
			<div className="card-info">
				<div className="card-name">
					<h3 className="font-bold">{item.name}</h3>
					<div className="card-details"></div>
				</div>
			</div>
		</div>
	)
}
