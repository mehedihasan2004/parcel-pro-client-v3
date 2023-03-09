import React from 'react';
import { Box, } from '@mui/system';
import { Typography, Grid } from '@mui/material';
import EastIcon from '@mui/icons-material/East';
import Container from '@mui/material/Container';
import AirplanemodeActiveRoundedIcon from '@mui/icons-material/AirplanemodeActiveRounded';
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded';
import ShareLocationRoundedIcon from '@mui/icons-material/ShareLocationRounded';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import ArticleIcon from '@mui/icons-material/Article';
import DeliveryDiningIcon from '@mui/icons-material/DeliveryDining';
import RouterIcon from '@mui/icons-material/Router';
import SailingIcon from '@mui/icons-material/Sailing';

const BestServices = () => {
    return (
        <Container>
            <Box sx={{
                width: '100%',
                
                
            }}>
                
                <Box sx={{
                    py: '4rem'
                }}>
                    <Typography align='center' color={'primary'}>Services</Typography>
                    <Typography align='center' variant='h3' style={{ fontWeight: 'bold' }}>Get the best services </Typography>
                </Box>

               
                <Box>
                    <Grid container columnSpacing={2}>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                                
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>01</Typography>
                        
                            <AirplanemodeActiveRoundedIcon style={{color: '#0076BE', fontSize: '8rem'}}/>
                        
                            <Box >
                                <Typography>AIR FREIGHT</Typography>
                               <EastIcon style={{marginLeft: '2rem '}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                             
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>02</Typography>
                            
                            <SailingIcon style={{color: '#0076BE', fontSize: '8rem'}}/>
                            
                            <Box >
                                <Typography>SEA FREIGHT</Typography>
                               <EastIcon style={{marginLeft: '2rem '}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                                
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>03</Typography>
                            {/* <img style={{width: '10rem'}} src="https://meetmighty.com/wp-themes/cargoton/wp-content/uploads/2021/04/6.svg" alt="" /> */}
                            <LocalShippingRoundedIcon style={{color: '#0076BE', fontSize: '8rem'}}/>

                            
                            <Box >
                                <Typography>GROUND FREIGHT</Typography>
                               <EastIcon style={{marginLeft: '3rem '}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                                
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>04</Typography>
                            
                            <ShareLocationRoundedIcon style={{color: '#0076BE', fontSize: '8rem'}}/>
                            
                            <Box >
                                <Typography>TRACK & TRACE</Typography>
                               <EastIcon style={{marginLeft: '3rem '}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                                
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>05</Typography>
                            
                            <ShoppingCartIcon style={{color: '#0076BE', fontSize: '8rem'}}/>
                            
                            <Box >
                                <Typography>WARE-HOUSING</Typography>
                               <EastIcon style={{marginLeft: '2.5rem '}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                                
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>06</Typography>
                            
                            <ArticleIcon style={{color: '#0076BE', fontSize: '8rem'}}/>
                            
                            <Box >
                                <Typography>PROJECT LOGISTICS</Typography>
                               <EastIcon style={{marginLeft: '4rem '}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                                
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>07</Typography>
                            
                            <DeliveryDiningIcon style={{color: '#0076BE', fontSize: '8rem'}}/>
                            
                            <Box >
                                <Typography>COURIER SHIPPING</Typography>
                               <EastIcon style={{marginLeft: '4rem '}}/>
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={4} lg={3}
                            style={{
                                border: '1px solid black',
                                display: 'grid',
                                placeItems: 'center',
                                padding: '20px 0px',
                                
                                borderRadius: '10px'
                            }}
                        >
                            <Typography variant='h4'>08</Typography>
                            
                            <RouterIcon style={{color: '#0076BE', fontSize: '8rem'}}/>
                            
                            <Box >
                                <Typography>DRONE FREIGHT</Typography>
                               <EastIcon style={{marginLeft: '4rem '}}/>
                            </Box>
                        </Grid>

                    </Grid>
                </Box>
            </Box>


        </Container>
    );
};

export default BestServices;