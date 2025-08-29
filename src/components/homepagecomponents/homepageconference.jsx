import React from "react";
import { Link } from "react-router-dom";
import { ChevronsRight } from "lucide-react";
export default function ConferenceFeatures() {
  return (
    <section className="text-muted py-5 " style={{ marginLeft: "60px" }}>
      <div className="container py-5">
        {/* Heading */}
        <div className="text-center m-4">
          <h1
            className="display-5 fw-bold mb-3 text"
            style={{ marginLeft: "30px", color: "#141E46" }}
          >
            Conference Organizing Committee
          </h1>
          <div className="d-flex justify-content-center mt-4">
            <div
              style={{
                width: "70px",
                height: "4px",
                backgroundColor: "#141E46",
                borderRadius: "50px",
              }}
            ></div>
          </div>
        </div>

        {/* Cards */}
        <div className="row g-4 justify-content-center m-6 p-4">
          {/* Card 1 */}
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <div
              className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm"
              style={{ width: "120px", height: "120px" }}
            >
              <img
                src="./chairman.jpg"
                alt="Dr R Venkat Rao"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <h5 className="fw-bold" style={{ color: "#898AC4" }}>
              Dr R Venkat Rao
            </h5>
            <p className="text-secondary">
              Chairman, NRI Institute of Technology (NRIIT),
              Agiripalli,Vijayawada
            </p>
          </div>

          {/* Card 2 */}
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <div
              className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm"
              style={{ width: "120px", height: "120px" }}
            >
              <img
                src="./director.jpg"
                alt="Prof Gutta Sambasivarao"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <h5 className="fw-bold" style={{ color: "#898AC4" }}>
              Prof Gutta Sambasivarao
            </h5>
            <p className="text-secondary">
              Director (Academics), NRI Institute of Technology (NRIIT),
              Agiripalli, Vijayawada
            </p>
          </div>
          {/* card3*/}
          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <div
              className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm"
              style={{ width: "120px", height: "120px" }}
            >
              <img
                src="./Nri/principal.jpeg"
                alt="Dr G Naga Bhaskar, Principal"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <h5 className="fw-bold" style={{ color: "#898AC4" }}>
              Dr G Naga Bhaskar
            </h5>
            <p className="text-secondary">
              Principal (Academics), NRI Institute of Technology (NRIIT),
              Agiripalli, Vijayawada
            </p>
          </div>

          <div className="col-lg-4 col-md-6 col-sm-12 text-center">
            <div
              className="rounded-circle overflow-hidden d-flex align-items-center justify-content-center mx-auto mb-3 shadow-sm"
              style={{ width: "120px", height: "120px" }}
            >
              <img
                src="/faculty/dean.jpg"
                alt="Dr K V Sambasiva Rao"
                className="img-fluid"
                style={{ objectFit: "cover", width: "100%", height: "100%" }}
              />
            </div>
            <h5 className="fw-bold" style={{ color: "#898AC4" }}>
              Dr K V Sambasiva Rao
            </h5>
            <p className="text-secondary">
              Professor & Dean, CSE & Allied, NRI Institute of Technology
              (NRIIT), Agiripalli, Vijayawada
            </p>
          </div>
        </div>

        {/* View More Button */}
        <div className="text-center mt-5">
          <Link to="/conference">
            {" "}
            <button
              className="btn px-4 py-2 rounded-pill"
              style={{ backgroundColor: "#141E46 ", color: "white" }}
            >
              View More
              <ChevronsRight />
            </button>
          </Link>
        </div>
      </div>
    </section>
  );
}
