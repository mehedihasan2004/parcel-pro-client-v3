import { Container } from "@mui/system";
import React from "react";
import ClientReviews from "./ClientReviews";
import HighProfitable from "./HighProfitable";
import LeadersInThe from "./LeadersInThe";
import OurExperience from "./OurExperience";

const AboutUs = () => {
  return <Container>
    <LeadersInThe></LeadersInThe>
    <OurExperience></OurExperience>
    <HighProfitable></HighProfitable>
    <ClientReviews></ClientReviews>
  </Container>;
};

export default AboutUs;
