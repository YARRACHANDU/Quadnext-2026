import React from "react";
import Homepage from "./pages/homepage";
import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Location from "./pages/location";
import Aboutnri from "./pages/aboutnri";
import Aboutpb from "./pages/aboutpb";
import Conference from "./pages/conference";
import Award from "./pages/award";
import Aboutorg from "./pages/aboutorganization";
import Aboutcon from "./pages/aboutconference";
import Aboutvij from "./pages/aboutvij";
import Authorguidelines from "./pages/authorguidelines";
import Registration from "./pages/registration";
import Contact from "./pages/contcat";
import Gallery from "./pages/gallery";
import Accomidation from "./pages/Accomidation";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/location" element={<Location />} />
          <Route path="/aboutnri" element={<Aboutnri />} />
          <Route path="/aboutpb" element={<Aboutpb />} />
          <Route path="/conference" element={<Conference />} />
          <Route path="/award" element={<Award />} />
          <Route path="/gallery" element={<Gallery />} />
          <Route path="/aboutorg" element={<Aboutorg />} />
          <Route path="/aboutcon" element={<Aboutcon />} />
          <Route path="/aboutvij" element={<Aboutvij />} />
          <Route path="/authorguidelines" element={<Authorguidelines />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/accomidation" element={<Accomidation />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
