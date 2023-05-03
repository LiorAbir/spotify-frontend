import axios from 'axios'

const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY

export const youtubeService = {
	getTrackForDisplay,
}

getTrackForDisplay()

async function getTrackForDisplay(filter = 'ישי ריבו') {
	try {
		const { data } = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YOUTUBE_KEY}&q=${filter}`
		)

		let tracks = date.items.map(({ snippet, id }) => {
			let { title, publishTime, description, thumbnails } = snippet
			const { videoId } = id
			const time = getTrackDuration(videoId)
		})

		console.log(data)
	} catch (err) {
		console.log(err)
	}
}

async function getTrackDuration(songId) {
	try {
		const { data } = await axios.get(
			`https://www.googleapis.com/youtube/v3/videos?id=${songId}&key=${YOUTUBE_KEY}&part=snippet,contentDetails,statistics,status`
		)
		let str = data.items[0]
	} catch (err) {}
}
