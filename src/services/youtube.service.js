import axios from 'axios'

const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY

export const youtubeService = {
	getTrackForDisplay,
}

getTrackForDisplay()

///Get song by search
async function getTrackForDisplay(filter = 'ישי ריבו') {
	try {
		const { data } = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YOUTUBE_KEY}&q=${filter}`
		)

		let tracks = data.items.map(({ snippet, id }) => {
			let { title, publishTime, description, thumbnails } = snippet
			const { videoId } = id
			const time = getTrackDuration(videoId)

			return {
				title,
				id: videoId,
				description,
				img: thumbnails.high.url,
				publishAt: publishTime,
				time,
			}
		})

		return tracks
	} catch (err) {
		console.log(err)
	}
}

//Get playlists

//get artists

async function getTrackDuration(songId) {
	try {
		const { data } = await axios.get(
			`https://www.googleapis.com/youtube/v3/videos?id=${songId}&key=${YOUTUBE_KEY}&part=snippet,contentDetails,statistics,status`
		)
		let str = data.items[0].contentDetails.duration
		const timeStrDigits = str.match(/([0-9]+)/g)
		const duration = timeStrDigits.map((timeStrDigit, idx) => {
			if (idx !== 0 && timeStrDigit.length === 1) return `0${timeStrDigit}`
			else return timeStrDigit
		})
		return duration.join(':')
	} catch (error) {
		console.log('request faild', error)
	}
}
