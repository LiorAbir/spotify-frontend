import { configureStore } from '@reduxjs/toolkit'

//REDUCERS
import { trackReducer } from './reducers/trackReducer'

export const store = configureStore({
	reducer: {
		track: trackReducer,
	},
})
