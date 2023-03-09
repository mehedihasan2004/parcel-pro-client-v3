import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import { Box, Button, Grid, Typography } from '@mui/material';
import React from 'react';
import article1 from '../../assets/article1.jpg';
import article2 from '../../assets/article2.jpg';
import article3 from '../../assets/article3.jpg';
const RecentArticles = () => {
  return (
    <section style={{marginTop:'20px',marginBottom:'20px'}}>
     <Box sx={{textAlign:'center'}}>
       <h3 style={{fontWeight:'600',fontSize:'15px',padding:'0px'}}>Our Blogs</h3>
       <Typography variant="h4" sx={{lineHeight:'1.2'}}>
          Check Our{" "}
          <span style={{ fontWeight: "bold", color: "primary.main" }}>
            Recent Articles
          </span>
        </Typography>
     </Box>
      <Grid container spacing={2} style={{
        paddingTop:'30px'
      }}>
        <Grid item xs={12} md={6} lg={4} sm={6}>
        <img  src='https://rcc-containers.com/wp-content/uploads/2022/12/transport-1.jpg'  alt="" style={{height:'240px'}}/>
       <h3 style={{
        padding: "0px",
       }}>Swift Delivery</h3>
       <p style={{
        padding: "0px",
       }}>Rely on us to get goods delivery swiftly.</p>
       <Button variant="outlined">Read More <ArrowForwardIcon/></Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={6}>
        <img  src='https://www.searates.com/design/images/import/blog/0.37965200_1590129953.jpg' alt="" style={{height:'240px'}}/>
       <h3 style={{
        padding: "0px",
       }}>Trusted Service
       </h3>
       <p style={{
        padding: "0px",
       }}>We are trusted partner of you. So trust and lets carry out task accordingly.</p>
       <Button variant="outlined">Read More <ArrowForwardIcon/></Button>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={6}>
        <img  src='https://uptodatewebdesign.s3.eu-west-3.amazonaws.com/uploads/SV%20ECDC%20bewerkt-1660726487004.jpeg' alt="" style={{height:'240px'}}/>
       <h3 style={{
        padding: "0px",
       }}>Vaccinated Courier
       </h3>
       <p style={{
        padding: "0px",
       }}>All delivery men are vaccinated. So dont fear of infections.</p>
       <Button variant="outlined">Read More <ArrowForwardIcon/></Button>
        </Grid>
       
      </Grid>
    </section>
  );
};

export default RecentArticles;