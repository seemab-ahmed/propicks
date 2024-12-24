import React from "react";
import GrowFirmBanner from "../components/GrowFirmBanner";
import DreamFirm from "../components/DreamFirm";
import AdvancedPlatform from "../components/AdvancedPlatform";
import GrowFirmSection from "../components/GrowFirmSection";
import NumberOneTech from "../components/NumberOneTech";
import BuildAffiliate from "../components/BuildAffiliate";

const GrowFirm = () => {
  return ( 
    <main>
      <GrowFirmBanner />
      <AdvancedPlatform/>
      <GrowFirmSection />
      <NumberOneTech />
      <BuildAffiliate/>
      <DreamFirm isgrowPage= "true" />
    </main>
  );
};

export default GrowFirm;