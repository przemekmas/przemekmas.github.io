import { Card, CardContent, Skeleton, Typography } from '@mui/material';
import Grid from '@mui/material/Grid2';

const PlaceHolderContent = () => {
    return (
        <Grid key={1} size={4}>
            <Card variant="outlined" sx={{
                height: "280px",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between"
            }}>
                <CardContent>
                    <Typography variant='h6'>
                        <Skeleton animation="wave" />
                    </Typography>
                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                        <Skeleton animation="wave" />
                    </Typography>
                </CardContent>
            </Card>
        </Grid>
    );
};

export default PlaceHolderContent;