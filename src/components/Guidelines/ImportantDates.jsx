import React, { useState } from "react";
import { FaCalendarAlt } from "react-icons/fa"; // npm install react-icons

export default function ImportantDatesBootstrap() {
  const datesEn = [
    { event: "Submission of Manuscripts", date: "24th Dec, 2025" },
    { event: "Notification of Acceptance", date: "12th Jan, 2026" },
    { event: "Registration Deadline", date: "25th Jan, 2026" },
    { event: "Camera Ready Submission", date: "30th Jan, 2026" },
    { event: "Conference Dates", date: "06–07 Feb, 2026" },
  ];

  const datesTe = [
    { event: "పత్రాల సమర్పణ", date: "24 డిసెంబర్, 2025" },
    { event: "ఆమోద నోటిఫికేషన్", date: "12 జనవరి, 2026" },
    { event: "నమోదు చివరి తేదీ", date: "25 జనవరి, 2026" },
    { event: "క్యామరా రెడీ సమర్పణ", date: "30 జనవరి, 2026" },
    { event: "సమ్మేళన తేదీలు", date: "06–07 ఫిబ్రవరి, 2026" },
  ];

  const [isTelugu, setIsTelugu] = useState(false);
  const dates = isTelugu ? datesTe : datesEn;

  return (
    <section className="py-5 position-relative">
      <div className="container">
        {/* Heading */}
        <div className="text-center mb-4">
          <h2 className="fw-bold" style={{ color: "#141E46" }}>
            {isTelugu ? "Important Dates" : "Important Dates"}
          </h2>

          {/* Language Toggle Button under heading */}
          <button
            onClick={() => setIsTelugu(!isTelugu)}
            className="text-white px-4 py-1 rounded-pill shadow-sm border-0 mb-3"
            style={{
              backgroundColor: isTelugu ? "green" : "red",
            }}
          >
            {isTelugu ? "English" : "తెలుగు"}
          </button>

          <p className="text-muted fs-5">
            {isTelugu
              ? "ఈ ముఖ్యమైన ఈవెంట్ల కోసం డెడ్‌లైన్‌లను గమనించండి మరియు మీ క్యాలెండర్‌లో గుర్తించండి."
              : "Stay on top of deadlines and mark your calendar for these key events."}
          </p>
        </div>

        {/* Dates */}
        <div className="row g-4 justify-content-center align-items-stretch">
          {dates.map((item, index) => (
            <div
              className="col-12 col-sm-6 col-lg-4 d-flex"
              key={index}
              style={{ margin: "20px" }}
            >
              <div className="card h-100 shadow-sm border-0 transition-card flex-fill">
                <div className="card-body d-flex align-items-center p-4">
                  {/* Icon */}
                  <div
                    className="me-3 d-flex align-items-center justify-content-center rounded-circle flex-shrink-0"
                    style={{
                      width: "60px",
                      height: "60px",
                      backgroundColor: "#eaf2ff",
                    }}
                  >
                    <FaCalendarAlt size={26} color="#141E46" />
                  </div>

                  {/* Text */}
                  <div>
                    <h6 className="fw-bold mb-1">{item.event}</h6>
                    <small className="text-primary fw-semibold">{item.date}</small>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Hover styling */}
      <style>
        {`
          .transition-card {
            transition: transform 0.2s ease, box-shadow 0.2s ease;
          }
          .transition-card:hover {
            transform: translateY(-5px);
            box-shadow: 0 0.5rem 1rem rgba(0,0,0,0.1);
          }
        `}
      </style>
    </section>
  );
}
