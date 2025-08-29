import React from "react";
import AboutPb from "../components/OrganizingInstitutes/AboutPb";
import PbDepartment from "../components/OrganizingInstitutes/PbDepartment";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import ScrollToTop from "../components/ScrollToTop";

function Aboutpb() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <AboutPb />
      <PbDepartment />
      <Footer />
    </div>
  );
}

export default Aboutpb;
