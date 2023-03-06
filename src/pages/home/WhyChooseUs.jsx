import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import MotorbikeAnimation from "../../components/MotorBikeAnimation";
import { Link } from "react-router-dom";

const WhyChooseUs = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
          marginTop: "50px",
        }}
      >
        <Grid container>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            style={{ background: "white", padding: "20px" }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              Stay At Home. We will Deliver your Product at your home in Time.
            </Typography>
            <br />
            <Link to="/contact">
              <Button
                variant="contained"
                size="large"
                style={{ marginTop: "25px" }}
              >
                Order Now
              </Button>
            </Link>
          </Grid>
          <Grid
            item
            lg={6}
            md={6}
            xs={12}
            style={{
              background: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <MotorbikeAnimation />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default WhyChooseUs;
