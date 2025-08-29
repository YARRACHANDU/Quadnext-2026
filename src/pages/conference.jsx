import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Important from "../components/ConferenceCommitte/Important";
import TimeLine from "../components/ConferenceCommitte/TimeLine";
import ScrollToTop from "../components/ScrollToTop";

function Conference() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{ marginTop: "120px" }}>
        <TimeLine />
        <Important />
      </div>

      <Footer />
    </div>
  );
}

export default Conference;
