import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { DeliveryBoyAnimation } from "../../components";
import { Container } from "@mui/system";
const ReachOut = () => {
  return <Container>
    <Box sx={{
      width: '100%',
      // height: '100vh',
      marginTop: '50px'
    }}>
      <Grid container >
        <Grid item lg={6} md={6} xs={12} style={{ background: 'white', padding: '20px' }}>

          <Typography variant='h3' gutterBottom style={{ marginTop: '20px',fontWeight: 'bold' }}>
          Join Our Newsletter
          </Typography>

          <Typography variant='string' gutterBottom>
            Please subcribe our news letter to get updated. We send you email about details of our activities and discussion for the betterment of our services. 
          </Typography>
          <br />
          <TextField style={{ width: '70%', marginRight: '10px', marginTop: '20px' }} id="outlined-basic" label="Email address" variant="outlined" />
          <Button variant="contained" size="large" style={{ marginTop: '25px' }}>
            Subscribe
          </Button>
        </Grid>
        <Grid item lg={6} md={6} xs={12} style={{ background: 'white', display: 'flex', justifyContent: 'center' }}>

          {/* <ParcelAnimation></ParcelAnimation>  */}
          <DeliveryBoyAnimation></DeliveryBoyAnimation>
        </Grid>


      </Grid>
    </Box>
  </Container>
};

export default ReachOut;
