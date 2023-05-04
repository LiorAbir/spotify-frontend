import { youtubeService } from '../../services/youtube.service'

export function getTracks() {
	return async (dispatch, getState) => {
		try {
			const tracks = await youtubeService.getTrackForDisplay()
			dispatch({ type: 'SET_TRACKS', tracks })
		} catch (err) {
			console.log(err)
		}
	}
}
