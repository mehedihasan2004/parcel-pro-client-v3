import React from "react";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import { Container } from "@mui/system";
import { CarCourier } from "../../components";
import { Link } from "react-router-dom";

const YourExpectation = () => {
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
            style={{
              background: "white",
              display: "flex",
              justifyContent: "center",
            }}
          >
            <CarCourier />
          </Grid>
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
              Do you Want a Fast Service? Just Call Us.
            </Typography>
            <Typography
              variant="p"
              gutterBottom
              style={{ marginTop: "20px", fontWeight: "bold" }}
            >
              We have built a wide network to get you on. Wherever you live We
              might go to your living door as your need. Just let us know your
              demands we will supply withing. Dont forget to knock us on time.
            </Typography>

            <br />
            <Link to="/contact">
              <Button
                variant="contained"
                size="large"
                style={{ marginTop: "10px" }}
              >
                Call Now
              </Button>
            </Link>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default YourExpectation;
