import { Alert, Box, Button, Card, CardActions, CardContent, CircularProgress, Container, Skeleton, Typography } from '@mui/material';
import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Repository } from '../types/Repository';
import Grid from '@mui/material/Grid2';
import PlaceHolderContent from './PlaceHolderContent';
import GitHubIcon from '@mui/icons-material/GitHub';
import LanguageIcon from '@mui/icons-material/Language';

const Content = () => {
    const [repositories, setRepositories] = useState<Repository[]>();
    const [isLoading, setIsLoading] = useState<boolean>(false);
    const [error, setError] = useState<string>();

    async function fetchRepositories(username: string): Promise<Repository[]> {
        const response = await axios.get<Repository[]>(`https://api.github.com/users/${username}/repos`);
        return response.data;
    }

    useEffect(() => {
        setIsLoading(true);

        fetchRepositories("przemekmas")
            .then((response) => {
                setRepositories(response);
            })
            .finally(() => {
                setIsLoading(false);
            })
            .catch((error) => {
                setError(error);
                setIsLoading(false);
            });
    }, []);

    return (
        <Container sx={{ marginTop: 2, marginBottom: 2 }}>
            {
                error
                    ?
                    <Alert variant="filled" severity="error">
                        Unable to retrieve GitHub repository data.
                    </Alert>
                    :
                    <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
                        {
                            isLoading
                                ?
                                Array.from({ length: 10 }, (_, __) => (
                                    <PlaceHolderContent></PlaceHolderContent>
                                ))
                                :
                                repositories?.filter(x => !x.fork).map(repo => (
                                    <Grid key={1} size={4}>
                                        <Card variant="outlined" sx={{
                                            height: "280px",
                                            display: "flex",
                                            flexDirection: "column",
                                            justifyContent: "space-between"
                                        }}>
                                            <CardContent>
                                                <Typography variant='h6'>
                                                    {repo.name}
                                                </Typography>
                                                <Typography variant="body2" sx={{ marginTop: 1 }}>
                                                    {repo.description}
                                                </Typography>
                                            </CardContent>
                                            <CardActions>
                                                <Button variant="outlined" href={repo.html_url} target="_blank" rel="noopener noreferrer"
                                                    startIcon={<GitHubIcon />}>
                                                    Repository
                                                </Button>
                                                {
                                                    repo.homepage &&
                                                    <Button variant="outlined" href={repo.homepage} target="_blank" rel="noopener noreferrer"
                                                        startIcon={<LanguageIcon />}>
                                                        Homepage
                                                    </Button>
                                                }
                                            </CardActions>
                                        </Card>
                                    </Grid>
                                ))
                        }
                    </Grid>
            }
        </Container >
    );
};

export default Content;