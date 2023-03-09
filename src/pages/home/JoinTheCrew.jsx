import { Box, Container, Grid, Typography } from "@mui/material";
import React from "react";
import { CrewCard } from "../../components";

const JoinTheCrew = () => {
  const crewsData = [
    {
      id: 1,
      name: "Cycle Rider",
      description:
        "Chose your perfect rider. This is the cheapest ride for you.",
      img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/bikefix.png",
    },
    {
      id: 2,
      name: "Bike Rider",
      description:
        "For a shorter long distance, Chose the options to make order works.",
      img: "https://kitpro.site/delivey/wp-content/uploads/sites/70/2022/02/vespfix.png",
    },
    {
      id: 3,
      name: "Pickup Driver",
      description:
        "For weighted goods, Choose the best pickup driver, These will be best for overall bangladesh to deliver.",
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
