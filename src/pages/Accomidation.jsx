import React from "react";
import Homenav from "../components/homepagecomponents/homenav";
import Homefooter from "../components/homepagecomponents/homefooter";
import Accomidations from "../components/Accomidations";
import HowToReach from "../components/HowToReach";
import BudgetHotels from "../components/BudgetHotels";

function Accomidation() {
  return (
    <div>
      <Homenav />
      <div
        style={{ marginleft: "20px", marginRight: "20px", marginTop: "120px" }}
      >
        <HowToReach />
      </div>
      <div style={{ marginLeft: "50px", marginRight: "50px" }}>
        <Accomidations />
        <BudgetHotels />
      </div>
      <Homefooter />
    </div>
  );
}

export default Accomidation;
