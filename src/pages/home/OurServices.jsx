import { Box, Button, Grid } from "@mui/material";
import React from "react";
import safety from "../../assets/safety.png";
import swift1 from "../../assets/swift.png";
import trusted from "../../assets/trusted.png";
import vaccin from "../../assets/vaccinated.png";
const OurServices = () => {
  return (
    <section>
      <div>
        <Box
          sx={{
            paddingY: "90px",
            display: "grid",
            placeItems: "center",
            textAlign: "center",
            backgroundColor: "#253138",
            marginTop: "3rem",
          }}
        >
          <div
            sx={{
              paddingBottom: "80px",
            }}
          >
            <h3
              style={{
                fontSize: "28px",
                padding: "0px",
                color: "#ffffff",
              }}
            >
              Try Us And See How Good <br></br>Our Services Are.
            </h3>
            <Button variant="contained" sx={{ m: 0 }}>
              Learn More
            </Button>
          </div>
        </Box>
      </div>
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: "30px",
        }}
      >
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <img src={swift1} alt="" style={{ height: "150px" }} />
          <h3
            style={{
              padding: "0px",
            }}
          >
            Swift Delivery
          </h3>
          <p
            style={{
              padding: "0px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <img src={trusted} alt="" style={{ height: "150px" }} />
          <h3
            style={{
              padding: "0px",
            }}
          >
            Trusted Service
          </h3>
          <p
            style={{
              padding: "0px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <img src={vaccin} alt="" style={{ height: "150px" }} />
          <h3
            style={{
              padding: "0px",
            }}
          >
            Vaccinated Courier
          </h3>
          <p
            style={{
              padding: "0px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <img src={safety} alt="" style={{ height: "150px" }} />
          <h3
            style={{
              padding: "0px",
            }}
          >
            Safety Protocol
          </h3>
          <p
            style={{
              padding: "0px",
            }}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit.
          </p>
        </Grid>
      </Grid>
    </section>
  );
};

export default OurServices;
