import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import Gal from "../components/Gallery";
import ScrollToTop from "../components/ScrollToTop";

function Gallery() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{ marginTop: "120px" }}>
        <Gal />
      </div>
      <Footer />
    </div>
  );
}

export default Gallery;
