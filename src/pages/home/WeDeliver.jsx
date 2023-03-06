import { Box, Button, Container, Grid } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import beg from "../../assets/box.png";
import burg from "../../assets/burg.png";
import grocory from "../../assets/gro.png";

const WeDeliver = () => {
  return (
    <Container
      maxWidth="lg"
      style={{
        padding: "30px 0",
      }}
    >
      <Box
        sx={{
          textAlign: "center",
        }}
      >
        <h3
          style={{
            fontSize: "22px",
            fontWeight: 700,
          }}
        >
          We Deliver Everything
        </h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut elit
          tellus, luctus nec ullamcorper.
        </p>
      </Box>
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: "30px",
          marginTop: "70px",
        }}
      >
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#F0EFE6",
              pb: 4,
            }}
          >
            <img
              src={burg}
              alt=""
              style={{
                height: "100px",
                marginTop: "-60px",
              }}
            />
            <h3
              style={{
                padding: "0px",
              }}
            >
              Food And Drinks
            </h3>
            <p
              style={{
                padding: "0px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/online-way">
              <Button variant="contained" sx={{ m: 0 }}>
                Order Now
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#F0EFE6",
              pb: 4,
            }}
          >
            <img
              src={beg}
              alt=""
              style={{
                height: "100px",
                marginTop: "-60px",
              }}
            />
            <h3
              style={{
                padding: "0px",
              }}
            >
              Packages
            </h3>
            <p
              style={{
                padding: "0px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/online-way">
              <Button variant="contained" sx={{ m: 0 }}>
                Order Now
              </Button>
            </Link>
          </Box>
        </Grid>
        <Grid item xs={12} md={6} lg={4} sm={6}>
          <Box
            sx={{
              textAlign: "center",
              backgroundColor: "#F0EFE6",
              pb: 4,
            }}
          >
            <img
              src={grocory}
              alt=""
              style={{
                height: "100px",
                marginTop: "-60px",
              }}
            />
            <h3
              style={{
                padding: "0px",
              }}
            >
              Groceries
            </h3>
            <p
              style={{
                padding: "0px",
              }}
            >
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <Link to="/online-way">
              <Button variant="contained" sx={{ m: 0 }}>
                Order Now
              </Button>
            </Link>
          </Box>
        </Grid>
      </Grid>
    </Container>
  );
};

export default WeDeliver;
