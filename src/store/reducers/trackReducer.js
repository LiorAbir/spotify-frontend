const INITIAL_STATE = {
	currTrack: null,
	tracks: [],
}

export function trackReducer(state = INITIAL_STATE, action) {
	switch (action.type) {
		case 'SET_TRACK':
			return {
				...state,
				currTrack: action.track,
			}
		case 'SET_TRACKS':
			return {
				...state,
				tracks: action.tracks,
			}

		default:
			return state
	}
}
