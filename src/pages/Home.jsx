import React from "react";
import Banner from "../components/Banner";
import Building from "../components/Buiding";
import CustomOdds from "../components/CustomOdds";
import Faqs from "../components/Faqs";
import Guide from "../components/Guide";
import Innovative from "../components/Innovate";
import Services from "../components/Services";
import DevelopmentPlatform from "../components/DevelopmentPlatform";

const Home = () => {
  return (
    <main>
      <Banner />
      <Guide />
      <Services />
      <CustomOdds />
      <DevelopmentPlatform />
      <Building />
      <Faqs />
      <Innovative />
    </main>
  );
};

export default Home;
