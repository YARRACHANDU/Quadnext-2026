import React from "react";
import "./regis.css";

const conferenceSteps = [
  {
    title: "Open URL",
    description: (
      <>
        Click on the following URL:{" "}
        <a
          href="https://atalacademy.aicte-india.org/login"
          target="_blank"
          rel="noopener noreferrer"
          className="dark-link"
        >
          https://atalacademy.aicte-india.org/login
        </a>
      </>
    ),
  },
  { title: "Navigate", description: "Click on FDPs" },
  {
    title: "Select Program",
    description: "Select: VAANI → February → All → Face to face",
  },
  {
    title: "Search",
    description: (
      <>
        Press <code>Ctrl + F</code> and search for{" "}
        <strong>FDP No: 2935459418</strong>. You will see the said Conference.
      </>
    ),
  },
  {
    title: "Register",
    description: "Click on the button to register for the mentioned conference.",
  },
  {
    title: "Upload Documents",
    description: "Upload the NOC and submit the Confirm button.",
  },
  {
    title: "Upload NOC",
    description: (
      <>
        Upload NOC. For Format click here:{" "}
        <a
          href="https://shorturl.at/iJC0"
          target="_blank"
          rel="noopener noreferrer"
          className="dark-link"
        >
          https://shorturl.at/iJC0
        </a>
      </>
    ),
  },
];

const stepColors = [
  "yellow",
  "magenta",
  "limegreen",
  "cyan",
  "blue",
  "purple",
  "orange",
];

function getGradient(color) {
  switch (color) {
    case "magenta":
      return "linear-gradient(135deg, #ed36b8 0%, #c73a99 100%)";
    case "yellow":
      return "linear-gradient(135deg, #fde47f 0%, #fde16d 100%)";
    case "limegreen":
      return "linear-gradient(135deg, #7ece48 0%, #aee672 100%)";
    case "cyan":
      return "linear-gradient(135deg, #19b5fe 0%, #43e1e3 100%)";
    case "blue":
      return "linear-gradient(135deg, #1976d2 0%, #4fc3f7 100%)";
    case "purple":
      return "linear-gradient(135deg, #a349a7 0%, #89368c 100%)";
    case "orange":
      return "linear-gradient(135deg, #f8903e 0%, #bf6327 100%)";
    default:
      return "#fff";
  }
}

function getDotColor(color) {
  switch (color) {
    case "magenta":
      return "#ed36b8";
    case "yellow":
      return "#fde16d";
    case "limegreen":
      return "#8dca4c";
    case "cyan":
      return "#19b5fe";
    case "blue":
      return "#1976d2";
    case "purple":
      return "#89368c";
    case "orange":
      return "#bf6327";
    default:
      return "#fff";
  }
}

export default function ConferenceRegistrationTimeline() {
  return (
    <div className="timeline-bg py-4">
      <div className="text-center mb-4">
        <h2 className="fw-bold mb-1">
          CONFERENCE REGISTRATION <span className="fw-normal text-muted"></span>
        </h2>
        <p style={{ marginTop: "20px" }}>
          <strong style={{ color: "red" }}>Eligibility:</strong> Faculty members,
          research scholars, postgraduate students from AICTE-approved
          institutions, and industry professionals are eligible to apply.
        </p>
        <h4 className="mb-5">
          Registration Fee:<strong style={{ color: "red" }}> Nil</strong>
        </h4>
      </div>

      <div className="row justify-content-center align-items-end position-relative timeline-row">
        {conferenceSteps.map((step, idx) => {
          const color = stepColors[idx % stepColors.length];
          return (
            <div
              key={idx}
              className="col-12 col-sm-6 col-md-1-5 d-flex flex-column align-items-center px-2 mb-5 timeline-step"
              style={{ maxWidth: "260px", flex: "0 0 260px" }}
            >
              {/* Number circle */}
              <div
                className="number-circle shadow mb-3 d-flex align-items-center justify-content-center"
                style={{ backgroundColor: "#222", color: "#fff" }}
              >
                {idx + 1}
              </div>

              {/* Card */}
              <div
                className="timeline-card text-center mb-2 px-3"
                style={{
                  background: getGradient(color),
                  color: "#222",
                  minHeight: "180px",
                  borderRadius: "18px 18px 14px 14px",
                  boxShadow: "0 8px 24px rgb(0 0 0 / 0.08)",
                  display: "flex",
                  flexDirection: "column",
                  justifyContent: "center",
                  alignItems: "center", // center alignment
                  position: "relative",
                  fontSize: "0.9rem",
                  width: "100%",
                  maxWidth: "260px",
                  textAlign: "center", // center text
                }}
              >
                <div
                  className="timeline-card-year mb-1"
                  style={{
                    fontWeight: 700,
                    fontSize: "0.9rem",
                    color: "black",
                  }}
                >
                  Step {idx + 1}
                </div>
                <div
                  className="timeline-card-content fw-bold"
                  style={{ color: "#222" }}
                >
                  <strong>{step.title}</strong>
                  <br />
                  {step.description}
                </div>
                <div
                  className="timeline-card-arrow"
                  style={{
                    borderTop: `18px solid ${getDotColor(color)}`,
                    borderLeft: "18px solid transparent",
                    borderRight: "18px solid transparent",
                    height: 0,
                    width: 0,
                    position: "absolute",
                    bottom: -18,
                    left: "50%",
                    transform: "translateX(-50%)",
                    zIndex: 2,
                  }}
                />
              </div>

              {/* Dot below arrow */}
              <div
                className="timeline-dot shadow"
                style={{
                  background: getDotColor(color),
                  border: "5px solid #fff",
                  width: 22,
                  height: 22,
                  borderRadius: "50%",
                  marginTop: 10,
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
}
