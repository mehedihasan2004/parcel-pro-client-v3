import { Button, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import { Link } from "react-router-dom";

const Manual = () => {
  return (
    <Box
      container
      sx={{ display: "grid", placeItems: "center", height: "100vh" }}
    >
      <Box sx={{ maxWidth: "800px", height: "400px", textAlign: "center" }}>
        <Typography sx={{ fontWeight: "bold" }} variant="h3">
          Welcome to our manual service !!
        </Typography>
        <Typography>
          If you want to parcel you product manually then visit our office.
        </Typography>
        <Typography>
          Please contact us : <br />
          +012 3456 789023 <br />
          +016 1423 523522 <br />
          or <br />
          parcel@pro.com <br />
          <Link to="/contact">
            <Button>Contact Us</Button>
          </Link>
        </Typography>
      </Box>
    </Box>
  );
};

export default Manual;
