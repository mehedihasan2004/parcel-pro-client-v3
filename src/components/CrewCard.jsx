import React from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const CrewCard = ({ crewCard }) => {
  return (
    <Box>

     

<Card gutterBottom sx={{ maxWidth: 345, p:"1rem" }}>
      <CardMedia
        component="img"
        alt="green iguana"
        height="130"
        image={crewCard.img}
        sx={{width:'auto', mx:"",  p:"10px"}}
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
        {crewCard.name}
        </Typography>
        <Typography variant="body2" color="text.secondary">
        {crewCard.description}
        </Typography>
      </CardContent>
      <CardActions>
      <Button
      style={{marginLeft:"5px"}}
            sx={{ bgcolor: "#4E9FE5", color: "#F0EFE6","&:hover":{color:'#F0EFE6',bgcolor: "#000000"}}}
            size="large"
          >

            Join Us
          </Button>
      </CardActions>
    </Card>
    </Box>
  );
};

export default CrewCard;
