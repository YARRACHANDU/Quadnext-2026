import React from "react";
import AboutCollege from "../components/OrganizingInstitutes/AboutCollege";
import AboutDepartment from "../components/OrganizingInstitutes/AboutDepartment";
import Homenav from "../components/homepagecomponents/homenav";
import Footer from "../components/homepagecomponents/homefooter";
import ScrollToTop from "../components/ScrollToTop";

function Aboutnri() {
  return (
    <div>
      <ScrollToTop />
      <Homenav />
      <div style={{margin:'0px'}}>
        <AboutCollege />
      </div>
      <AboutDepartment />
      <Footer />
    </div>
  );
}

export default Aboutnri;
