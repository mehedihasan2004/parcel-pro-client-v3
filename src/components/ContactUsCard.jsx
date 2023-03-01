import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box } from "@mui/material";

const ContactUsCard = ({ contactCard }) => {
  return (
    <Box style={{marginBottom:"8rem"}}>
      <Card gutterBottom sx={{ maxWidth: 345, p: "1rem"}}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="130"
          image={contactCard.img}
          sx={{ width: "auto", mx: "auto", p: "10px" }}
        />
        <CardContent sx={{textAlign:"center"}}>
          <Typography sx={{color:'#0076BE'}} gutterBottom variant="h5" component="div">
            {contactCard.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {contactCard.description1}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {contactCard.description2}
          </Typography>
        </CardContent>
      </Card>
    </Box>
  );
};

export default ContactUsCard;
