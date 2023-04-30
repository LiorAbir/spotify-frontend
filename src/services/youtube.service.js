import axios from 'axios'

const YOUTUBE_KEY = import.meta.env.VITE_YOUTUBE_KEY

export const youtubeService = {
	query,
}

query()

async function query(filter = 'ישי ריבו') {
	try {
		const { data } = await axios.get(
			`https://www.googleapis.com/youtube/v3/search?part=snippet&videoEmbeddable=true&type=video&key=${YOUTUBE_KEY}&q=${filter}`
		)

		console.log(data)
	} catch (err) {
		console.log(err)
	}
}
