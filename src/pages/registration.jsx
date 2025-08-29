import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import ScrollToTop from "../components/ScrollToTop";
import Regis from '../components/regis'

function Registration() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{ marginTop: "120px" }}>
        <Regis/>
      </div>
      <Footer />
    </div>
  );
}

export default Registration;
