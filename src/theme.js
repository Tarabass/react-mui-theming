import { createTheme } from '@mui/material/styles';

const themeOptions = {
	palette: {
		mode: 'light',
		primary: {
			main: '#f8bbd0',
			contrastText: '#ff1744',
		},
		secondary: {
			main: '#f50057',
			contrastText: '#080707',
		},
		background: {
			default: '#b2ebf2',
			paper: '#e0f7fa',
		},
	},
}

const theme = createTheme(themeOptions)

export default theme
