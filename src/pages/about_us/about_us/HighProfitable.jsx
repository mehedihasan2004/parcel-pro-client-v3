import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";

const HighProfitable = () => {
    return <Container>
    <Box sx={{
      width: '100%',
      // height: '100vh',
      marginTop: '50px'
    }}>
      <Grid container >
        <Grid item lg={6} md={6} xs={12} style={{ background: 'white', padding: '20px' }}>
        
        <img src="https://cdn.firespring.com/images/171fb719-da73-4d8a-b50a-8bbaf32ab03b.jpg" alt="" />
          
        </Grid>
        <Grid item lg={6} md={6} xs={12} style={{ background: 'white', padding: '20px' }}>
        <h6>WHO WE ARE</h6>
          <Typography variant='h3' gutterBottom style={{ marginTop: '20px',fontWeight: 'bold' }}>
          We Make Things Easy & <span style={{color:'primary.main'}}>High Profitable</span>
          </Typography>
            <Box  style={{ gap: '10px', marginTop: '20px'}}>
            <Typography variant='h6'> Multi-Platform (Web, IOS & Android)</Typography>
            </Box>
            <Box  style={{ gap: '10px', marginTop: '20px'}}>
            <Typography variant='h6'> Intelligent Alerts Of Shipment Status</Typography>
            </Box>
            <Box  style={{ gap: '10px', marginTop: '20px'}}>
            <Typography variant='h6'>Green Counter (Carbon Footprint)</Typography>
            </Box>
            <br />
            <br />
            <Box  style={{ gap: '10px', marginTop: '20px'}}>
            <Typography variant='h4'> Your Logistics Needs Are At The Heart Of Our Business</Typography>
            </Box>
            
        <br />

          <Typography variant='string' gutterBottom>
          Lorem Ipsum Dolor Sit Amet, Consectetur Adipiscing Elit. Amet Egestas Nisl Aliquam Nulla Est Vitae. Nunc Volutpat Diam Egestas Eget Vitae, Amet. Viverra Non Feugiat Nulla Orci, Pellentesque Scelerisque Ac.
          </Typography>
          <br />
        </Grid>
      </Grid>
    </Box>
  </Container>
};

export default HighProfitable;