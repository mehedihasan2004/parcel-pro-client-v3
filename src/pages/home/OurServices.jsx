import { Box, Button, Grid, Modal, Typography } from "@mui/material";
import React from "react";
import { Link } from "react-router-dom";
import safety from "../../assets/safety.png";
import swift1 from "../../assets/swift.png";
import trusted from "../../assets/trusted.png";
import vaccin from "../../assets/vaccinated.png";
const OurServices = () => {
  const [open, setOpen] = React.useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "background.paper",
    border: "2px solid #000",
    boxShadow: 24,
    p: 4,
  };
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
            <Button onClick={handleOpen} variant="contained" sx={{ m: 0 }}>
              Get Started
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
            We delivery swiftly, we promise.
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
            Your trust is our Capital, We value your trust on us. 
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
            Our service man all are Vaccinated so dont worry any kind of virus infectionis.
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
            We follow all policies and safely measurement that governement ordered to follow. Rely on our safety first policies. 
          </p>
        </Grid>
      </Grid>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography
            id="modal-modal-title"
            variant="h6"
            component="h2"
            sx={{ fontWeight: "bold" }}
          >
            Choose your preferred way
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            If you want to send your parcel in online select online otherwise
            continue with manual.
          </Typography>

          <Box
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              gap: "2rem",
              marginTop: ".5rem",
            }}
          >
            <Link to="/manual-way">
              <Button variant="contained">Manual</Button>
            </Link>
            <Link to="/online-way">
              <Button variant="contained">Online</Button>
            </Link>
          </Box>
        </Box>
      </Modal>
    </section>
  );
};

export default OurServices;
