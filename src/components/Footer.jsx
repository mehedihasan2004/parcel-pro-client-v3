import { Grid, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  const dotStyle = {
    height: "10px",
    width: "10px",
    backgroundColor: "rgb(245, 152, 66)",
    borderRadius: "50%",
    display: "inline-block",
    marginRight: "4px",
  };
  return (
    <section
      style={{
        backgroundColor: "#f2f5f5",
        paddingTop: "30px",
        paddingLeft: "50px",
      }}
    >
      <Grid
        container
        spacing={2}
        style={{
          paddingTop: "30px",
          paddingBottom: "30px",
        }}
      >
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <Typography
            sx={{
              fontSize: "1.5rem",
              color: "black",
              flex: 1,
              marginTop: "100px",
            }}
          >
            Parcel Pro
          </Typography>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <h3
            style={{
              padding: "0px",
              textAlign: "left",
            }}
          >
            Company
          </h3>
          <div style={{ textAlign: "left" }}>
            <p>
              <span style={dotStyle}></span>About Us
            </p>
            <p>
              <span style={dotStyle}></span>
              Contact Us
            </p>
            <p>
              <span style={dotStyle}></span>Careers
            </p>
            <p>
              <span style={dotStyle}></span> FAQ
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <h3
            style={{
              padding: "0px",
              textAlign: "left",
            }}
          >
            Services
          </h3>
          <div style={{ textAlign: "left" }}>
            <p>
              <span style={dotStyle}></span> Air Freight
            </p>
            <p>
              <span style={dotStyle}></span> Drone Freight
            </p>
            <p>
              <span style={dotStyle}></span> Ground Freight
            </p>
            <p>
              <span style={dotStyle}></span> Project Logistics
            </p>
          </div>
        </Grid>
        <Grid item xs={12} md={6} lg={3} sm={6}>
          <h3
            style={{
              padding: "0px",
              textAlign: "left",
            }}
          >
            Get In Touch
          </h3>
          <p
            style={{
              padding: "0px",
              textAlign: "left",
            }}
          >
            +12205 10254 256523 111
          </p>
        </Grid>
      </Grid>
      <div>
        <hr />
        Copyright&copy; All Rights Reserved by Parcel Pro
        <hr />
      </div>
    </section>
  );
};

export default Footer;
