import { Container, Grid, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import PriceCard from "../../components/PriceCard";

const BestPrice = () => {
  const pricesData = [
    {
      _id: 1,
      priceCategory: "GLOBAL PLAN",
      price: "$250/MO",
      serviceItem: "GLOBAL SERVICE",
      description:
        "Be globally connected. The possibilities are endless with cargoTon.",
      feature: [
        "100 FREIGHT SHIPMENT",
        "WIREHOUSING",
        "REAL TIME TRACKING",
        "CUSTOM BUISNESS RULES",
      ],
    },
    {
      _id: 2,
      priceCategory: "PREMIUM PLAN      ",
      price: "$250/MO",
      serviceItem: "DOMESTIC SERVICE      ",
      description:
        "Plan your next big. Let us bring your products to the world. ",
      feature: [
        "100 FREIGHT SHIPMENT",
        "WIREHOUSING",
        "REAL TIME TRACKING",
        "CUSTOM BUISNESS RULES",
      ],
    },
    {
      _id: 3,
      priceCategory: "DOMESTIC PLAN",
      price: "$250/MO",
      serviceItem: "DOMESTIC SERVICE",
      description:
        "Making transportation fast and safe. The logistics company you can rely on.        ",
      feature: [
        "100 FREIGHT SHIPMENT",
        "WIREHOUSING",
        "REAL TIME TRACKING",
        "CUSTOM BUISNESS RULES",
      ],
    },
  ];

  return (
    <Container maxWidth="xl">
      <Box sx={{ textAlign: "center" }}>
        <Typography variant="h4" gutterBottom>
          Get The{" "}
          <span style={{ fontWeight: "bold", color: "primary.main" }}>
            Best Prices
          </span>
        </Typography>
      </Box>
      <Grid container spacing={4} sx={{mt:4}}>
        {pricesData?.map((price, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <PriceCard key={index} price={price}></PriceCard>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
};

export default BestPrice;
