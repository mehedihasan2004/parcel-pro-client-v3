import { Box, Button, Typography } from "@mui/material";
import React, { useState } from "react";
import { Link } from "react-router-dom";
import Grid from '@mui/material/Grid';
import truck from "../../assets/truck05.jpg";
const FreightCalculate = () => {
  const [weight, setWeight] = useState(0);
  const [total, setTotal] = useState(0);

  const calculate = () => {
    setTotal(weight * 80);
  };

  return (
    <section style={{ margin: "60px 0px" }}>
      <Box
        sx={{
          display: "flex",
          justifyItems: "center",
          alignItems: "center",
        }}
      >
        <Grid container>
          <Grid item xs={12} md={6} lg={6}>
            <img
              src='https://img.freepik.com/free-vector/logistics-concept-illustration_114360-1988.jpg?w=826&t=st=1678311091~exp=1678311691~hmac=4bd9d36aafcd6b239ad0dfd33d15489d8ff9d725aa01da52dea9ec0a374b822b'
              style={{ width: "100%", height: "" }}
              alt="/"
            />
          </Grid>
          <Grid item xs={12} md={6} lg={6}>
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
            <input
              onChange={(e) => setWeight(e.target.value)}
              name="product_weight"
              type="number"
              required
              style={{
                border: "1px solid gray",
                padding: "8px 30px",
                // width: "440px",
              }}
            />
            <Typography variant="h6" sx={{ py: 2 }}>
              Type Of Commodity
            </Typography>
            <select
              style={{
                border: "1px solid gray",
                padding: "8px 30px",
                // width: "440px",
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
                gap: "1rem",
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
                  $ {total}
                </span>
              </Button>
              <Button
                onClick={calculate}
                variant="contained"
                sx={{
                  border: "1px solid gray",
                  color: "white",
                  px: 4,
                  py: 1,
                  mt: 4,
                }}
              >
                Calculate
              </Button>
            </Box>
            <Link to="/online-way">
              <Button
                variant="contained"
                sx={{
                  border: "1px solid gray",
                  color: "white",
                  px: 4,
                  py: 1,
                  mt: 4,
                  width: "100%",
                }}
              >
                Book Now
              </Button>
            </Link>
          </Grid>
        </Grid>

      </Box>
    </section>
  );
};

export default FreightCalculate;
