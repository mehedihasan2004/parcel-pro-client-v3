import React from 'react';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import {Container} from '@mui/material';

const LeadersInThe = () => {
    
    return (
        <Container>
        <Box sx={{
          width: '100%',
          marginTop: '50px'
        }}>

          <Grid container>
              <Grid item xs={12} md={6} lg={6} style={{background: 'white', padding: ''}}>
                <h6 style={{}}>ABOUT US</h6>
              <Typography variant='h3' gutterBottom style={{fontWeight: 'bold'}}>
              Leaders In The <span style={{color:'primary.main'}}>Logistics Services</span>
              </Typography>
              <Typography variant='string' gutterBottom>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut ultricies tincidunt nulla vel cursus. Fusce egestas quis est non feugiat. Maecenas faucibus nunc in enim fringilla semper.
              </Typography>
              <Box sx={{marginTop: '30px'}}>

              </Box>
              <Box style={{display: 'flex', gap: '10px', margin: '20px'}}>
                  <img src="https://cdn3d.iconscout.com/3d/premium/thumb/man-avatar-6299539-5187871.png" alt="play-store" style={{width: '150px'}}/>
                  <div>
                    <p><i>“Lorem ipsum dolor sit amet, consectetur adipiscing elit. Imperdiet id cursus amet suspendisse rhoncus.”</i></p>
                    <h6>By <span style={{color:'primary.main'}}>James Moe</span></h6>
                    <h6>Chief Operating Officer</h6>
                  </div>
              </Box>
              </Grid>
              <Grid item xs={12} md={6} lg={6} style={{background: 'white'}}>
                 <Box sx={{display: 'flex', gap: '10px', margin: '20px', border: '1px solid black', padding: '10px', '&:hover':{backgroundColor: 'primary.main'} }}>
                    <img style={{width: '130px'}} src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRgGa8dRCP7L6YG-2fVXPlCY0whLzi9LaQYTQ&usqp=CAU" alt=''/>
                    <div>
                        <h1>Our Achivement</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                 </Box>
                 <Box sx={{display: 'flex', gap: '10px', margin: '20px', border: '1px solid black', padding: '10px', '&:hover':{backgroundColor: 'primary.main'} }}>
                    <img style={{width: '130px'}} src="https://www.kindpng.com/picc/m/194-1947895_mission-values-simon-electric-vision-and-mission-png.png" alt=''/>
                    <div>
                        <h1>Our Mission</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                 </Box>
                 <Box sx={{display: 'flex', gap: '10px', margin: '20px', border: '1px solid black', padding: '10px', '&:hover':{backgroundColor: 'primary.main'} }}>
                    <img style={{width: '130px'}} src="https://p.kindpng.com/picc/s/50-500807_cartoon-shared-vision-clipart-vision-statement-hd-png.png" alt=''/>
                    <div>
                        <h1>Our Vision</h1>
                        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>
                    </div>
                 </Box>
              </Grid>
              
          </Grid>
          </Box>  
      </Container>
    );
};

export default LeadersInThe;