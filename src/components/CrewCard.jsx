import React, { useState } from "react";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Box, Modal, TextareaAutosize, TextField } from "@mui/material";

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: 500,
  bgcolor: "background.paper",
  border: "2px solid #000",
  boxShadow: 24,
  p: 3,
};

const CrewCard = ({ crewCard }) => {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    const from = e.target;
    const name = from.name.value;
    const email = from.email.value;
    const phone = from.phone.value;
    const address = from.address.value;
    const experience = from.experience.value;

    const info = {
      jobType: crewCard.name,
      name,
      email,
      phone,
      address,
      experience,
      state: "request",
    };

    fetch(`https://parcel-pro-server.vercel.app/riders`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(info),
    })
      .then((res) => res.json())
      .then((data) => console.log(data))
      .catch((err) => console.error(err));
  };

  return (
    <Box>
      <Card gutterBottom sx={{ maxWidth: 345, p: "1rem" }}>
        <CardMedia
          component="img"
          alt="green iguana"
          height="130"
          image={crewCard.img}
          sx={{ width: "auto", mx: "", p: "10px" }}
        />
        <CardContent>
          <Typography gutterBottom variant="h5" component="div">
            {crewCard.name}
          </Typography>
          <Typography variant="body2" color="text.secondary">
            {crewCard.description}
          </Typography>
        </CardContent>
        <CardActions>
          <Button
            onClick={handleOpen}
            style={{ marginLeft: "5px" }}
            sx={{
              bgcolor: "#4E9FE5",
              color: "#F0EFE6",
              "&:hover": { color: "#F0EFE6", bgcolor: "#000000" },
            }}
            size="large"
          >
            Join Us
          </Button>
        </CardActions>
      </Card>

      <Modal
        keepMounted
        open={open}
        onClose={handleClose}
        aria-labelledby="keep-mounted-modal-title"
        aria-describedby="keep-mounted-modal-description"
      >
        <Box sx={style}>
          <Typography
            sx={{ mb: ".6rem" }}
            id="keep-mounted-modal-title"
            variant="h6"
            component="h2"
          >
            {crewCard.name}
          </Typography>

          <form onSubmit={handleSubmit}>
            <TextField
              name="JobType"
              sx={{ mb: ".3rem", width: "100%" }}
              label="Job-Type"
              value={crewCard.name}
            />
            <TextField
              name="name"
              sx={{ mb: ".3rem", width: "100%" }}
              label="Full Name"
              placeholder="Enter Your Name"
            />
            <TextField
              name="email"
              sx={{ mb: ".3rem", width: "100%" }}
              label="Email"
              placeholder="Enter Your Email"
            />
            <TextField
              name="phone"
              sx={{ mb: ".3rem", width: "100%" }}
              label="Phone"
              placeholder="Enter Your Phone No"
            />
            <TextField
              name="address"
              sx={{ mb: ".3rem", width: "100%" }}
              label="Address"
              placeholder="Enter Your Address"
            />

            <TextareaAutosize
              name="experience"
              style={{ padding: ".8rem", width: "100%" }}
              label="Experience"
              minRows={4}
              placeholder="Describe Your experience"
            />
            <CardActions>
              <Button
                type="submit"
                style={{ margin: "auto", width: "85%" }}
                sx={{
                  bgcolor: "#4E9FE5",
                  color: "#F0EFE6",
                  "&:hover": { color: "#F0EFE6", bgcolor: "#000000" },
                }}
                size="large"
              >
                Submit
              </Button>
            </CardActions>
          </form>
        </Box>
      </Modal>
    </Box>
  );
};

export default CrewCard;
