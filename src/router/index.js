import { createHashRouter } from 'react-router-dom'

//CMPS
import { MainPage } from '../views/MainPage'

export const router = createHashRouter([
	{
		path: '/',
		element: <MainPage />,
	},
])
