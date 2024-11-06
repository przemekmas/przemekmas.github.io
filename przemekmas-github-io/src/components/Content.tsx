import { Box, Button, Card, CardActions, CardContent, Container, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Repository } from '../types/Repository';
import Grid from '@mui/material/Grid2';

const Content = () => {
    const [repositories, setRepositories] = useState<Repository[]>();

    async function fetchRepositories(username: string): Promise<Repository[]> {
        const response = await axios.get<Repository[]>(`https://api.github.com/users/${username}/repos`);
        return response.data;
    }

    useEffect(() => {
        // The URL for the API you want to call
        // const url = 'https://api.github.com/users/przemekmas/repos';

        fetchRepositories("przemekmas")
            .then((response) => {
                setRepositories(response);
            })
            .catch((error) => {
                //setError(error);  // Handle error
                //setLoading(false);
            });
    }, []); // Empty dependency array ensures this runs only once on mount

    return (
        <Container sx={{ marginTop: 2, marginBottom: 2 }}>
            <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                {
                    repositories?.map(repo => (
                        <Grid key={1} size={4}>
                            <Card variant="outlined" sx={{ height: "100%" }}>
                                <CardContent>
                                    <Typography variant='h6'>
                                        {repo.name}
                                    </Typography>
                                    {/* <Typography sx={{ color: 'text.secondary', mb: 1.5 }}>adjective</Typography> */}
                                    <Typography variant="body2" sx={{ marginTop: 1 }}>
                                        {repo.description}
                                    </Typography>
                                </CardContent>
                                <CardActions>
                                    <Button size="small">Learn More</Button>
                                </CardActions>
                            </Card>
                        </Grid>
                    ))
                }
            </Grid>
        </Container>
    );
};

export default Content;