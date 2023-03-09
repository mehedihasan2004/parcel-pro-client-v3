import { Container } from "@mui/system";
import React from "react";
import {
  BestPrice,
  BestServices,
  FreightCalculate,
  JoinTheCrew,
  MobileApp,
  OurExperience,
  OurServices,
  OurTalent,
  ReachOut,
  RecentArticles,
  ShipmentBook,
  WeDeliver,
  WhyChooseUs,
  YourExpectation,
  YourQueries,
} from ".";
import TruckAnimation from "./TruckAnimation";
import TryCartogon from "./TryCartogon";

const Home = () => {
  return (
    <>
      <Container>
        <OurServices />
      </Container>
      <Container>
        <BestServices />
      </Container>
      <TruckAnimation/>
      <Container>
        <WeDeliver />
        <Container>
          <FreightCalculate />
        </Container>
        <Container>
          <TryCartogon />
        </Container>
        <Container>
          <BestPrice />
        </Container>
      </Container>
      <Container>
        <MobileApp />
      </Container>
      <Container>
        <JoinTheCrew />
      </Container>
      <Container>
        <ReachOut />
      </Container>
      <Container>
        <OurExperience />
      </Container>
      <Container>
        <ShipmentBook />
      </Container>
      <Container>
        <OurTalent />
      </Container>
      <Container>
        <RecentArticles />
      </Container>
      <Container>
        <YourExpectation />
      </Container>
      <Container>
        <WhyChooseUs />
      </Container>
      <YourQueries />
    </>
  );
};

export default Home;
