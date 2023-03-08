import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { CrewCard } from "../../components";

const JoinTheCrew = () => {
  const crewsData = [
    {
      id: 1,
      name: "Cycle Rider",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/bikefix.png",
    },
    {
      id: 2,
      name: "Bike Rider",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/vespfix.png",
    },
    {
      id: 3,
      name: "Pickup Driver",
      description:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit tellus, luctus nec ullamcorper mattis, pulvinar dapibus leo.",
      img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/carfix.png",
    },
  ];
  return (
    <Container>
      <Box style={{ marginBottom: "4rem", marginTop: "4rem" }}>
        <Typography
          variant="h3"
          sx={{ textAlign: "center", fontWeight: "bold" }}
        >
          Join The Crew
        </Typography>
      </Box>

      <Grid container spacing={4}>
        {crewsData.map((crewCard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <CrewCard crewCard={crewCard} key={index} />
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default JoinTheCrew;
