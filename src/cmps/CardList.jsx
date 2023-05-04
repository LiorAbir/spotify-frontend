import React from 'react'
import { CardPreview } from './CardPreview'

export const CardList = () => {
	const cardList = {
		name: 'Top mix',
		playlists: [
			{
				name: 'Hanan ben Ari mix',
				imgUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/343YYaA5MSjiZZ5cGyTr4u/he/default',
			},
			{
				name: 'Hanan ben Ari mix',
				imgUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/343YYaA5MSjiZZ5cGyTr4u/he/default',
			},
			{
				name: 'Hanan ben Ari mix',
				imgUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/343YYaA5MSjiZZ5cGyTr4u/he/default',
			},
			{
				name: 'Hanan ben Ari mix',
				imgUrl: 'https://seed-mix-image.spotifycdn.com/v6/img/artist/343YYaA5MSjiZZ5cGyTr4u/he/default',
			},
		],
	}

	return (
		<div className="card-list">
			<div className="card-list-header">
				<h2 className="list-title">{cardList.name}</h2>
				<button className="sub-title">Show all</button>
			</div>
			<div className="list-container grid">
				{cardList.playlists.map((item) => {
					return <CardPreview item={item} key={item.name + '12'} />
				})}
			</div>
		</div>
	)
}
