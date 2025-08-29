import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import AboutConference from "../components/AboutConference/AboutConference";
import ScrollToTop from "../components/ScrollToTop";

function Aboutcon() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{ margin: "60px" }}>
        <AboutConference />
      </div>

      <Footer />
    </div>
  );
}

export default Aboutcon;
