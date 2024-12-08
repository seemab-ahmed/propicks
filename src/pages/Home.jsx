import React from "react";
import Banner from "../components/Banner";
import Guide from "../components/Guide";
import Faqs from "../components/Faqs";
import Innovative from "../components/Innovate";
import Building from "../components/Buiding";
import Services from "../components/Services";
import Development from "../components/Development";
import CustomOdds from "../components/CustomOdds";

const Home = () => {
  return (
    <main>
      <Banner />
      <Guide />
      <Services/>
      <CustomOdds  />
      <Development />
      <Building/>
      <Faqs />
      <Innovative />
    </main>
  );
};

export default Home;
