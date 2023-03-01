import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Box, Grid, IconButton } from '@mui/material';
import FacebookIcon from '@mui/icons-material/Facebook';
import GitHubIcon from '@mui/icons-material/GitHub';
import TwitterIcon from '@mui/icons-material/Twitter';

const OurTalent = () => {
    return (
      <Box container  sx={{my:"4rem"}}>
        <Box>
        <Typography variant="h3" sx={{ textAlign: "center",mb:"4rem" }}>
        Our Talented Team
      </Typography>
        </Box>
      <Box>

      <Grid container spacing={3}>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 335, p:"1rem", boxShadow:"none", border:'1px solid #CCE5FF'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="230"
          image="https://img.freepik.com/free-photo/business-concept-handsome-man-happy-smile-young-handsome-guy-smart-suit-posing-isolated-grey-background_1258-80173.jpg?w=1060&t=st=1676894166~exp=1676894766~hmac=5c304262ff50522e60f0a6e81225d7467a56a552f9c3d90bbca0c027714516c4"
          sx={{borderRadius:"10px"}}
        />
        <CardContent sx={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5"sx={{mb:'',lineHeight:"2.7rem",fontWeight:"bold"}}>
            George Len
          </Typography>
          <Typography variant="h6" sx={{mb:"0",lineHeight:"0"}}>
            CEO
          </Typography>
          
        </CardContent>
        <CardActions sx={{mt:0, p:0}}>
        <IconButton  sx={{mx:"auto"}} aria-label="add to favorites">
          <FacebookIcon style={{fontSize:"2.1rem", marginRight:"7px", color:"skyblue"}}/>
          <GitHubIcon style={{fontSize:"2.1rem",marginRight:"7px", color:"skyblue"}} />
          <TwitterIcon style={{fontSize:"2.2rem", color:"skyblue"}}/>
        </IconButton>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 335, p:"1rem", boxShadow:"none", border:'1px solid #CCE5FF'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="230"
          image="https://img.freepik.com/premium-photo/young-man-with-beard-isolated-keeping-arms-crossed-frontal-position_1368-65212.jpg?w=1060"
          sx={{borderRadius:"10px"}}
        />
        <CardContent sx={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5"sx={{mb:'',lineHeight:"2.7rem",fontWeight:"bold"}}>
            Keyle Verry
          </Typography>
          <Typography variant="h6" sx={{mb:"0",lineHeight:"0"}}>
            Engineer
          </Typography>
          
        </CardContent>
        <CardActions sx={{mt:0, p:0}}>
        <IconButton  sx={{mx:"auto"}} aria-label="add to favorites">
          <FacebookIcon style={{fontSize:"2.1rem", marginRight:"7px", color:"skyblue"}}/>
          <GitHubIcon style={{fontSize:"2.1rem",marginRight:"7px", color:"skyblue"}} />
          <TwitterIcon style={{fontSize:"2.2rem", color:"skyblue"}}/>
        </IconButton>
        </CardActions>
      </Card>
      </Grid>
      <Grid item xs={12} sm={6} md={4}>
      <Card sx={{ maxWidth: 335, p:"1rem", boxShadow:"none", border:'1px solid #CCE5FF'}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="230"
          image="https://img.freepik.com/free-photo/image-handsome-caucasian-man-party-suit-smiling-pleased-attend-formal-event-standing-white-background_1258-64650.jpg?w=1060&t=st=1676893941~exp=1676894541~hmac=2327d545e8575569ac4ffb916b49ee71def2353120eccba18ded1f66c4d89e7a"
          sx={{borderRadius:"10px",m:"auto"}}
        />
        <CardContent sx={{textAlign:"center"}}>
          <Typography gutterBottom variant="h5"sx={{mb:'',lineHeight:"2.7rem",fontWeight:"bold"}}>
            Viljon Van
          </Typography>
          <Typography variant="h6" sx={{mb:"0",lineHeight:"0"}}>
            Manager
          </Typography>
          
        </CardContent>
        <CardActions sx={{mt:0, p:0}}>
        <IconButton  sx={{mx:"auto"}} aria-label="add to favorites">
          <FacebookIcon style={{fontSize:"2.1rem", marginRight:"7px", color:"skyblue"}}/>
          <GitHubIcon style={{fontSize:"2.1rem",marginRight:"7px", color:"skyblue"}} />
          <TwitterIcon style={{fontSize:"2.2rem", color:"skyblue"}}/>
        </IconButton>
        </CardActions>
      </Card>
      </Grid>
      
     
       </Grid>

      </Box>
      </Box>
    );
};

export default OurTalent;