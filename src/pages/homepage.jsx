import React from "react";
import HomepageComponents from "../components/homepagecomponents/homeimage";
import Homenav from "../components/homepagecomponents/homenav";
import Homeorg from "../components/homepagecomponents/homeorg";
import Homepageobj from "../components/homepagecomponents/homepageobj";
import Homefooter from "../components/homepagecomponents/homefooter";
import Homepageconference from "../components/homepagecomponents/homepageconference";
import ScrollToTop from "../components/ScrollToTop";

function Homepage() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <HomepageComponents />
      <div style={{ marginTop: "50px", marginRight: "50px" }}>
        <Homeorg />
      </div>
      <Homepageobj />
      <Homepageconference />
      <Homefooter />
    </div>
  );
}

export default Homepage;
