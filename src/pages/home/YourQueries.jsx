import React from "react";
import { Typography, Grid } from "@mui/material";
import { Box } from "@mui/system";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import fqa from "../../assets/Fqa.png";
import Container from "@mui/material/Container";

const YourQueries = () => {
  return (
    <Container>
      <Box
        sx={{
          width: "100%",
        }}
      >
        <Box
          sx={{
            py: "6rem",
          }}
        >
          <Typography align="center" color={"primary"}>
            FAQ
          </Typography>
          <Typography
            align="center"
            variant="h3"
            style={{ fontWeight: "bold" }}
          >
            Get Your Queries Solved
          </Typography>
        </Box>

        <Grid
          container
          sx={{
            pb: "6rem",
          }}
        >
          <Grid item xs={12} md={6} lg={8} style={{ padding: "20px" }}>
            <div>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>How do you take orders?</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We take order by mannually and online base. You can choose any one option to so that we can take your order in time and place it accordingly. 
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    What are the payment method?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We recieve payment by Stripe and Bkash and Cash on Delivery. We prefer your available method to pay service charges.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    How many points do you have?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We have 1 central office, 6 sub office and 240 service points to reach to our clients easily.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    Whats the pirce you charge for service?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    It depends on how your products or goods weight is. Under 10 kg we recommend you to choose bike rider to delivery your products near your areas or within the selected areas.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    How long it takes to deliver goods?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We deliver goods within 24 hours in divisional areas. But overall Banlgadesh it takes minimum 3 days to deliver finally.
                  </Typography>
                </AccordionDetails>
              </Accordion>
              <Accordion>
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls="panel2a-content"
                  id="panel2a-header"
                >
                  <Typography>
                    Do you have technical staff to hanlde immediate disorder?
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>
                    We have fully paid staff to handle immediate disorder in our supply chain. So dont Worry, Count on us. We have brand values to satisfy you and make your money and time worth. 
                  </Typography>
                </AccordionDetails>
              </Accordion>
            </div>
          </Grid>
          <Grid item xs={12} md={6} lg={4} style={{}}>
            <img
              src={fqa}
              alt="fqa"
              style={{ width: "100%", padding: "20px", height: "100%" }}
            />
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
};

export default YourQueries;
