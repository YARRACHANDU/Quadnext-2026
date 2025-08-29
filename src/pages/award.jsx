import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Awards from "../components/NriGallery";
import ScrollToTop from "../components/ScrollToTop";

function Award() {
  return (
    <>
      <ScrollToTop />
      <Homenav />
      <div style={{ marginTop: "120px" }}>
        <Awards />
      </div>
      <Footer />
    </>
  );
}

export default Award;
