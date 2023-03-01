import React from "react";
import { Box, Grid, Typography } from "@mui/material";
import { ContactUsCard } from "../../../components";

const LetsMeetUs = () => {
  const contactData = [
    {
      id: 1,
      name: "Address",
      description1: "1234 North Avenue Luke Lane, South , IN",
      description2: "360001, United States",
      img: "https://cdn-icons-png.flaticon.com/512/478/478745.png?w=826&t=st=1677005104~exp=1677005704~hmac=5ecd314791909efb046cbb451e7cf782abd8e1457867c2d11a47099b2716842c",
    },
    {
      id: 2,
      name: "Phone",
      description1: "(303) 555-010",
      description2: "(303) 555-0105",
      img: "https://img.freepik.com/free-vector/phone_78370-560.jpg?w=826&t=st=1677004262~exp=1677004862~hmac=1a2f4fbe0c2e1d60c71a9b6048c2aefb5ac3004f1c1cd6c32091668e9d304910",
    },
    {
      id: 3,
      name: "Email",
      description1: "bugfinders@gmail.com",
      description2: "parcelpro@gmail.com",
      img: "https://img.freepik.com/premium-vector/email-sign-mail-icon-3d-design-blue-color-vector-illustration-eps-10-vector-file_157125-19313.jpg?w=826",
    },
  ];
  return (
    <Box sx={{ mt: "4rem" }}>
      <Typography variant="h3" sx={{ textAlign: "center" }}>
        Let's <span style={{ color: "#0076BE" }}>Meet Us</span>
      </Typography>

      <Grid
        container
        spacing={4}
        sx={{
          mt: "60px",
        }}
      >
        {contactData.map((contactCard, index) => (
          <Grid item xs={12} sm={6} md={4} key={index}>
            <ContactUsCard contactCard={contactCard} key={index} />
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default LetsMeetUs;
