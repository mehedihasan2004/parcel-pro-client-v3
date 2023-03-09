import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import CurrencyExchangeIcon from '@mui/icons-material/CurrencyExchange';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ShieldIcon from '@mui/icons-material/Shield';
import appStore from '../../assets/app-store.png';
import playStore from '../../assets/play-store.jpg';
import { MobileAppAnimation } from '../../components';
import {Container} from '@mui/material';


const MobileApp = () => {
    return (
        <Container>
          <Box sx={{
            width: '100%',
            marginTop: '50px'
          }}>

            <Grid container>
                <Grid item xs={12} md={6} lg={6} style={{background: 'white', padding: '20px'}}>
                <Typography variant='h3' gutterBottom style={{fontWeight: 'bold'}}>
                Order From Our Apps And Get Special Offer
                </Typography>
                <Typography variant='string' gutterBottom>
                You can get our app from Play store and App store. Please download from following lingks. 
                </Typography>
                <Box sx={{marginTop: '30px'}}>
                    <Box  style={{display: 'flex', height: '30px', width: '250px', justifyContent: "space-between", alignItems: 'center', gap: '10px', marginTop: '20px'}}>
                        <CurrencyExchangeIcon style={{color: '#0076BE', fontSize: '40px'}}/>
                        <Typography variant='h5'>Cashback Bonus</Typography>
                    </Box>
                    <Box  style={{display: 'flex', height: '30px', width: '250px', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginTop: '20px'}}>
                        <ShieldIcon style={{color: '#0076BE', fontSize: '40px'}}/>
                        <Typography variant='h5'>Secure Payment</Typography>
                    </Box>
                    <Box  style={{display: 'flex', height: '30px', width: '250px', justifyContent: 'space-between', alignItems: 'center', gap: '10px', marginTop: '20px'}}>
                        <LocalShippingIcon style={{color: '#0076BE', fontSize: '40px'}}/>
                        <Typography variant='h5'>Secure Shipping</Typography>
                    </Box>
                </Box>
                <Box style={{display: 'flex', gap: '10px', margin: '20px'}}>
                    <img src={playStore} alt="play-store" style={{width: '150px'}}/>
                    <img src={appStore} alt="app-store" style={{width: '150px'}}/>
                </Box>
                </Grid>
                <Grid item xs={12} md={6} lg={6} style={{background: 'white'}}>
                    
                    <MobileAppAnimation/>
                </Grid>
                
            </Grid>
            </Box>  
        </Container>
    );
};

export default MobileApp;