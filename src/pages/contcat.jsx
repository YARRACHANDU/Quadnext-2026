import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import NriContact from "../components/NriContact";
import ScrollToTop from "../components/ScrollToTop";
import CustomerCare from "../components/Location/CustomerCare";

function contact() {
  return (
    <>
      <ScrollToTop />
      <Homenav />

      <div style={{ marginTop: "110px" }}>
        <CustomerCare />
      </div>
      <div style={{ marginBottom: "20px" }}>
        <NriContact />
      </div>
      <Footer />
    </>
  );
}

export default contact;
