import { Grid, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import React from 'react';
import working from '../../../assets/working.jpg';
import Container from '@mui/material/Container';

const WorkingIn = () => {
    return (
        <Container>
            <Grid container>
                <Grid item xs={12} md={6} lg={6} style={{ background: 'white', padding: '20px' }}>
                    <img style={{width: '100%'}} src={working} alt="working at parcelPro" />
                </Grid>


                <Grid item xs={12} md={6} lg={6} style={{ background: 'white', padding: '20px', display: 'grid', placeItems: 'center' }}>
                    <Stack spacing={2}>
                        <Typography style={{borderLeft: '5px solid red', paddingLeft: '10px'}}>ENVIRONMENT</Typography>
                        <Typography variant='h3'>Working At ParcelPro</Typography>
                        <Typography>
                            Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit. Exercitation veniam consequat sunt nostrud amet.
                        </Typography>
                    </Stack>
                </Grid>
            </Grid>

        </Container>
    );
};

export default WorkingIn;