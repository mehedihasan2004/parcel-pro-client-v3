import {
    Button,
    Card,
    CardActions,
    CardContent,
    Typography
} from "@mui/material";
import { Box } from "@mui/system";
import React from "react";

const PriceCard = ({ price }) => {
  return (
    <Box>
      <Card sx={{ maxWidth: 345, p: "1rem",border:'1px solid black' }}>
        <CardContent>
          <Typography sx={{fontSize:'22px',fontWeight:'700'}}>
            {price?.priceCategory}
          </Typography>
          <Typography sx={{color:'black',fontSize:'18px',fontWeight:'600',pt:1}}>
            {price?.price}
          </Typography>
          <Typography sx={{color:'#000000',fontWeight:'400',fontSize:'16px',borderBottom:'1px solid yellow',paddingBottom:'12px'}}>
            {price?.serviceItem}
          </Typography>
          <Typography sx={{color:'#000000',fontWeight:'500',fontSize:'14px',pt:2}}>
            {price?.description}
          </Typography>
          <ul>
            {price?.feature.map((fr, index) => (
              <li key={index} style={{margin:'4px 0px'}}>{fr}</li>
            ))}
          </ul>
        </CardContent>
        <CardActions>
          <Button
            style={{ marginLeft: "5px" }}
            sx={{
              bgcolor: "#4E9FE5",
              color: "#F0EFE6",
              "&:hover": { color: "#F0EFE6", bgcolor: "#000000" },
            }}
            size="medium"
          >
            Read More
          </Button>
        </CardActions>
      </Card>
    </Box>
  );
};

export default PriceCard;
