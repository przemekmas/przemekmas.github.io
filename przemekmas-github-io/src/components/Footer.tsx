import { Box, Container, Typography } from '@mui/material';

const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                py: 4,
                px: 2,
                mt: 'auto',
                // color: "inherit",
                backgroundColor: (theme) => theme.palette.primary.dark,
                color: (theme) => theme.palette.common.white
            }}
        >
            <Container>
                <Typography variant="body2" color="inherit" align="center">
                    © {new Date().getFullYear()} Przemyslaw Maslowski GitHub.
                </Typography>
                <Typography variant="body2" color="inherit" align="center" sx={{ marginTop: 2 }}>
                    All rights reserved.
                </Typography>
            </Container>
        </Box>
    );
};

export default Footer;