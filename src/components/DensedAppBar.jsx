import { AppBar, Box, Button, Toolbar, Typography } from '@mui/material'

const navItems = ['Home', 'Upload', 'Favourites']

function DensedAppBar() {
	return (
		<AppBar position="static">
			<Toolbar variant="dense">
				<Typography
					variant="h6"
					noWrap
					component="a"
					href="/"
					sx={{
						mr: 2,
						flexGrow: 1,
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					Catmandu
				</Typography>
				<Box sx={{ display: { xs: 'none', sm: 'block' } }}>
					{navItems.map((item) => (
						<Button key={item} sx={{ color: '#fff' }}>
							{item}
						</Button>
					))}
				</Box>
			</Toolbar>
		</AppBar>
	)
}

export default DensedAppBar
