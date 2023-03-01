import React from 'react';
import { Box, } from '@mui/system';
import { Typography, Grid } from '@mui/material';
import RoomOutlinedIcon from '@mui/icons-material/RoomOutlined';
import Button from '@mui/material/Button';
import Container from '@mui/material/Container';
const posts = [
    {
        id: 1,
        title: 'Chief officer',
        position: 'Finance',
        location: 'Dhaka'
    },
    {
        id: 2,
        title: 'Market Analyst',
        position: 'Technical',
        location: 'Dhaka'
    },
    {
        id: 3,
        title: 'Executive Director',
        position: 'Management',
        location: 'Dhaka'
    },
    {
        id: 4,
        title: 'chief officer',
        position: 'Marketing',
        location: 'Dhaka'
    },
    {
        id: 5,
        title: 'Accounting Head',
        position: 'Finance',
        location: 'Dhaka'
    },
    {
        id: 6,
        title: 'Technical President',
        position: 'Technical',
        location: 'Dhaka'
    },
]

const OpenPosts = () => {
    return (
        <Container>
            <Box sx={{
                width: '100%',
            }}>
                
                <Box sx={{
                    py: '4rem'
                }}>
                    <Typography align='center' color={'primary'}>ENVIRONMENT</Typography>
                    <Typography align='center' variant='h3' style={{ fontWeight: 'bold' }}>Open Posts</Typography>
                </Box>

                
                <Box>
                    <Grid container spacing={2}>
                        {
                            posts.map(post => <Grid
                                key={post.id}
                                item xs={12} md={4} lg={4}
                                style={{
                                    border: '1px solid gray',
                                    display: 'grid',
                                    placeItems: 'center',
                                    padding: '20px 0px',
                                    gap: '20px',
                                    borderRadius: '10px'
                                }}
                            >
                                <Typography variant='h4'>{post.title}</Typography>
                                <Typography variant='h5' color={'primary'}>{post.position}</Typography>
                                <Box sx={{
                                    display: 'flex',
                                    gap: '10px'
                                }}>
                                    <RoomOutlinedIcon />
                                    <Typography>{post.location}</Typography>
                                </Box>
                            </Grid>)
                        }
                    </Grid>
                </Box>

                <Box sx={{
                    textAlign: 'center',
                    margin: '3rem 0px'
                }}>
                    <Button variant="contained" size="large">
                        Load more 
                    </Button>
                </Box>


            </Box>

        </Container>
    );
};

export default OpenPosts;