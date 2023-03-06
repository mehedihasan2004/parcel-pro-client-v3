import React from "react";
import {
  Button,
  Card,
  CardActions,
  Grid,
  TextareaAutosize,
  TextField,
  Typography,
} from "@mui/material";
import { Box } from "@mui/system";

const LetsGetConnected = () => {
  return (
    <Box
      style={{
        backgroundImage:
          "url('https://img.freepik.com/free-vector/3d-earth-graphic-symbolizing-global-trade-illustration_456031-131.jpg?w=1380&t=st=1677167585~exp=1677168185~hmac=c255bb9628fd67cb711d7940cf301e7cc37c6e17e64d2b0a272e3cb0ab86f064')",
        backgroundSize: "cover",
        height: "auto",
        marginBottom: "4rem",
        padding: "2rem",
      }}
    >
      <Grid container>
        <Grid item xs={12} sm={6} md={4}>
          <Card sx={{ width: "45" }}>
            <Typography
              style={{ fontWeight: "bold" }}
              variant="h5"
              sx={{ py: "2.5rem", textAlign: "center" }}
            >
              <span style={{ color: "#0076BE" }}>Ready?</span> Let’s Get
              Connected
            </Typography>
            <form
              action="https://formspree.io/f/xknabyng"
              method="POST"
              style={{ backgroundColor: "white", padding: "0 1rem" }}
            >
              <TextField
                name="name"
                sx={{ mb: "1rem", width: "100%" }}
                label="Name:"
                placeholder="Enter Your Name"
              />
              <TextField
                name="email"
                sx={{ mb: "1rem", width: "100%" }}
                label="Email Id:"
                placeholder="Enter Your Eamil"
              />
              <TextField
                name="contact_no"
                sx={{ mb: "1rem", width: "100%" }}
                label="Contact No:"
                placeholder="Enter Your Contact No"
              />
              <TextareaAutosize
                name="message"
                style={{ padding: "1rem", width: "100%" }}
                label="Details"
                minRows={5}
                placeholder="Enter Your Details"
              />
              <CardActions>
                <Button
                  type="submit"
                  style={{ margin: "auto", width: "50%" }}
                  sx={{
                    bgcolor: "#4E9FE5",
                    color: "#F0EFE6",
                    "&:hover": { color: "#F0EFE6", bgcolor: "#000000" },
                  }}
                  size="large"
                >
                  Send Message
                </Button>
              </CardActions>
            </form>
          </Card>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LetsGetConnected;
