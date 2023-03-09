import CallIcon from "@mui/icons-material/Call";
import { Box, Button, Paper, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";

const TryCartogon = () => {
  return (
    <Paper
      sx={{
        display: "flex",
        justifyContent: "start",
        justifyItems: "center",
        height: "250px",
        backgroundColor: "#171717",
        p: 6,
        color: "#ffffff",
        marginTop: 8,
        marginBottom: 8,
      }}
    >
      <Box sx={{}}>
        <Typography variant="body1" gutterBottom>
          Contact
        </Typography>
        <Typography variant="h4" gutterBottom>
          Try ParcelPro{" "}
          <span style={{ fontWeight: "bold", color: "primary" }}>Today</span>
        </Typography>
        <p
          style={{
            padding: "0px",
          }}
        >
          Do You Want A Fast Service? Just Call Us. We Are Now Serving Globally.
        </p>
        <Link to="/contact">
          <Button
            variant="contained"
            style={{
              marginBottom: "15px",
            }}
          >
            <CallIcon />
            +880 1607 87266
          </Button>
        </Link>
      </Box>
    </Paper>
  );
};

export default TryCartogon;
