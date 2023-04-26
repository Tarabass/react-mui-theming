import { AppBar, Toolbar, Typography } from '@mui/material'

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
						display: { xs: 'none', md: 'flex' },
						fontFamily: 'monospace',
						fontWeight: 700,
						letterSpacing: '.3rem',
						color: 'inherit',
						textDecoration: 'none',
					}}
				>
					Catmandu
				</Typography>
				<Typography variant="h6" color="inherit" component="div">
					Photos
				</Typography>
			</Toolbar>
		</AppBar>
	)
}
export default DensedAppBar
