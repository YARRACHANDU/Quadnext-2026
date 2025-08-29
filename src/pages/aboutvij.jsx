import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import ScrollToTop from "../components/ScrollToTop";
import Aboutvijj from "../components/aboutvij/aboutvijcom";
import Howtoreach from "../components/aboutvij/howtoreach";
function Aboutvij() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{ marginTop: "60px" }}>
        <Aboutvijj />
      </div>

      <Footer />
    </div>
  );
}

export default Aboutvij;
