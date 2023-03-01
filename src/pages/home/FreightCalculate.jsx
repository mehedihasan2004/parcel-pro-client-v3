import { Box, Button, Typography } from "@mui/material";
import React from "react";
import truck from "../../assets/truck05.jpg";
const FreightCalculate = () => {
  return (
    <section style={{ margin: "60px 0px" }}>
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Box>
          <img
            src={truck}
            style={{ width: "600px", height: "500px" }}
            alt="/"
          />
        </Box>
        <Box sx={{ ml: 6 }}>
          <p>CALCULATE</p>
          <Typography variant="h4">
            Freight
            <span
              style={{
                fontWeight: "bold",
                color: "secondary.main",
                paddingLeft: "5px",
              }}
            >
              Calculator
            </span>
          </Typography>
          <Typography variant="h6" sx={{ py: 2 }}>
            FCL Container Type
          </Typography>
          <select
            style={{
              border: "1px solid gray",
              padding: "8px 30px",
              width: "440px",
            }}
          >
            <option value="">Select</option>
            <option value="20ft">20 FT</option>
            <option value="30ft">30 FT</option>
            <option value="50ft">50 FT</option>
            <option value="100ft">100 FT</option>
          </select>
          <Typography variant="h6" sx={{ py: 2 }}>
            Type Of Commodity
          </Typography>
          <select
            style={{
              border: "1px solid gray",
              padding: "8px 30px",
              width: "440px",
            }}
          >
            <option value="">Select</option>
            <option value="20ft">General Types of Goods</option>
            <option value="30ft">Breakable Goods,Glass</option>
            <option value="50ft">Painting,Sculptures</option>
            <option value="100ft">Chimical,Explosives</option>
          </select>
          <Box
            sx={{
              display: "flex",
              justifyContent: "space-between",
            }}
          >
            <Button
              variant="outlined"
              sx={{
                border: "1px solid black",
                color: "black",
                px: 4,
                py: 1,
                mt: 4,
              }}
            >
              Total :{" "}
              <span style={{ color: "secondary.main", paddingLeft: "5px" }}>
                $00
              </span>
            </Button>
            <Button
              variant="contained"
              sx={{
                border: "1px solid gray",
                color: "white",
                px: 4,
                py: 1,
                mt: 4,
              }}
            >
              Book Now
            </Button>
          </Box>
        </Box>
      </Box>
    </section>
  );
};

export default FreightCalculate;
