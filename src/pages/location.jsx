import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Surroundings from "../components/Location/Surroundings";
import NriLocation from "../components/Location/NriLocation";
import ScrollToTop from "../components/ScrollToTop";

function Location() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{ marginTop: "120px" }}>
        <NriLocation />
        <Surroundings />
      </div>
      <Footer />
    </div>
  );
}

export default Location;
