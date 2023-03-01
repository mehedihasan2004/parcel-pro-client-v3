import React from "react";
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import { Container } from "@mui/system";

const ClientReviews = () => {
    return <Container >
    <Box sx={{
      width: '100%',
      // height: '100vh',
      marginTop: '50px'
    }}>
        <h6>CLIENT REVIEWS</h6>
        <Typography variant='h3' gutterBottom style={{ marginTop: '20px',fontWeight: 'bold' }}>
        What Our Client Says <span style={{color:'primary.main'}}>About Us</span>
          </Typography>
      <Grid container >
        <Grid item lg={6} md={6} xs={12} style={{ background: 'white', padding: '20px' }}>
        <Box style={{display: 'flex', gap: '10px', margin: '20px'}}>
                  <img src="https://img.freepik.com/premium-vector/face-cute-girl-avatar-young-girl-portrait-vector-flat-illustration_192760-82.jpg?w=2000" alt="play-store" style={{width: '150px'}}/>
                  <div>
                    <p><i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet id cursus amet suspendisse rhoncus.”</i></p>
                    <h6>By <span style={{color:'black'}}>Maria</span></h6>
                    <h6>Air Freighting Operating Officer</h6>
                  </div>
        </Box>
          
        </Grid>
        <Grid item lg={6} md={6} xs={12} style={{ background: 'white', display: 'flex', justifyContent: 'center' }}>
        <Box style={{display: 'flex', gap: '10px', margin: '20px'}}>
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png" alt="play-store" style={{width: '150px'}}/>
                  <div>
                    <p><i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet id cursus amet suspendisse rhoncus.”</i></p>
                    <h6>By <span style={{color:'primary.main'}}>James Moe</span></h6>
                    <h6>Chief Operating Officer</h6>
                  </div>
            </Box>
        </Grid>
      </Grid>
    </Box>
  </Container>
};

export default ClientReviews;