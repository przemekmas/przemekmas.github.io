import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';

function NavBar() {
    return (
        <AppBar position="static">
            <Container>
                <Toolbar disableGutters>
                    <Box
                        component="img"
                        sx={{
                            height: 32,
                            width: 32,
                            marginRight: 2,
                            borderRadius: "50%"
                        }}
                        src={`${process.env.PUBLIC_URL}/favicon.ico`}
                    />
                    <Typography
                        variant="h6"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'none', md: 'flex' },
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        Przemyslaw Maslowski GitHub
                    </Typography>
                    <Typography
                        variant="h5"
                        noWrap
                        component="a"
                        href="/"
                        sx={{
                            mr: 2,
                            display: { xs: 'flex', md: 'none' },
                            fontWeight: 700,
                            letterSpacing: '.1rem',
                            color: 'inherit',
                            textDecoration: 'none',
                        }}
                    >
                        PM GitHub
                    </Typography>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
export default NavBar;