import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";

const OurExperience = () => {
    return <Container >
    <Box sx={{
      width: '100%',
      marginTop: '50px',
      backgroundColor: '#f2f5f5'
    }}>
      <Grid container >
        <Grid item lg={6} md={6} xs={12} style={{ padding: '20px' }}>
        <h6>ACHIEVEMENTS</h6>
          <Typography variant='h3' gutterBottom style={{ marginTop: '20px',fontWeight: 'bold' }}>
          Our Experience <span style={{color:'primary.main'}}>Your Advantage</span>
          </Typography>

          <Typography variant='string' gutterBottom>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.
          </Typography>
          <br />
          
        </Grid>
        <Grid item lg={6} md={6} xs={12} style={{  display: 'flex', justifyContent: 'center' }}>
        <Box style={{display: 'flex', flexDirection: "column", item:"center" , gap: '10px', margin: '20px',}}>
                    <img style={{width: '100px', paddingLeft:"25px"}} src="https://www.pngkey.com/png/detail/185-1851808_dollar-sign-in-circle-of-arrows-dollar-sign.png" alt=''/>
                    <Typography variant='h3' gutterBottom style={{ marginTop: '20px',fontWeight: 'bold' }}><span style={{color:'primary.main',}}>90+</span>
                     </Typography>
                     <Typography variant='h6' gutterBottom style={{ marginTop: '15px',fontWeight: 'bold' }}>Companies
                     </Typography>
                    
            </Box>
            <Box style={{display: 'flex', flexDirection: "column", item:"center" , gap: '10px', margin: '20px',}}>
                    <img style={{width: '100px', paddingLeft:"25px"}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGa8dRCP7L6YG-2fVXPlCY0whLzi9LaQYTQ&usqp=CAU" alt=''/>
                    <Typography variant='h3' gutterBottom style={{ marginTop: '20px',fontWeight: 'bold' }}><span style={{color:'primary.main',}}>9+</span>
                     </Typography>
                     <Typography variant='h6' gutterBottom style={{ marginTop: '20px',fontWeight: 'bold' }}>Countries
                     </Typography>
                    
            </Box>
        </Grid>


      </Grid>
    </Box>
  </Container>
};

export default OurExperience;