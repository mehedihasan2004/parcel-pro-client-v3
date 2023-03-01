import React from "react";
import { Typography, Grid } from '@mui/material';
import { Box, } from '@mui/system';
import GradingIcon from '@mui/icons-material/Grading';
import PunchClockIcon from '@mui/icons-material/PunchClock';
import TravelExploreIcon from '@mui/icons-material/TravelExplore';
import LaptopChromebookIcon from '@mui/icons-material/LaptopChromebook';


const Benefits = () => {
  return (<>
    <Box sx={{
      width: '100%',
      background: 'black',
      color: 'white'
    }}>
      <Box sx={{
        width: '10rem',
        height: '10rem',
        margin: '0px auto',
        pt: '7rem'
      }}>
        <Typography style={{ borderLeft: '4px solid red', paddingLeft: '15px' }}>WELL-BEING </Typography>
        <Typography variant='h3'>Benefits</Typography>
      </Box>


      
      <Grid container spacing={0.5} sx={{
        marginTop: '7rem',
        paddingBottom: '7rem',
      }}>
        <Grid item xs={12} md={4} lg={3} sx={{
          width: '10rem',
          height: '15rem',
          display: 'grid',
          placeItems: 'center',
        }}>
          <LaptopChromebookIcon sx={{ fontSize: 100 }} />
          <Typography variant='h4'> Work from <br /> anywhere</Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3} sx={{
          width: '15rem',
          height: '15rem',
          display: 'grid',
          placeItems: 'center',
        }}>
          <TravelExploreIcon sx={{ fontSize: 100 }} />
          <Typography variant='h4'> Work and <br /> Travel</Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3} sx={{
          width: '15rem',
          height: '15rem',
          display: 'grid',
          placeItems: 'center',
        }}>
          <PunchClockIcon sx={{ fontSize: 100 }} />
          <Typography variant='h4'> Flexible <br /> Hours</Typography>
        </Grid>
        <Grid item xs={12} md={4} lg={3} sx={{
          width: '15rem',
          height: '15rem',
          display: 'grid',
          placeItems: 'center',
        }}>
          <GradingIcon sx={{ fontSize: 100 }} />
          <Typography variant='h4'> Wellness <br /> Program</Typography>
        </Grid>
      </Grid>

    </Box>

  </>);
};

export default Benefits;
