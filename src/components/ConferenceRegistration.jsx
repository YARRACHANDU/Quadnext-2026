import React from "react";

const ConferenceRegistrationBootstrap = () => {
  const steps = [
    {
      title: "Open URL",
      description: (
        <>
          Click on the following URL:{" "}
          <a
            href="https://atalacademy.aicte-india.org/login"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://atalacademy.aicte-india.org/login
          </a>
        </>
      ),
    },
    { title: "Navigate", description: "Click on FDPs" },
    { title: "Select Program", description: "Select: VAANI → February → All → Face to face" },
    {
      title: "Search",
      description: (
        <>
          Press <code>Ctrl + F</code> and search for{" "}
          <strong>FDP No: 2935459418</strong>. You will see the said Conference.
        </>
      ),
    },
    { title: "Register", description: "Click on the button to register for the mentioned conference." },
    { title: "Upload Documents", description: "Upload the NOC and submit the Confirm button." },
    {
      title: "Upload NOC",
      description: (
        <>
          Upload NOC. For Format click here:{" "}
          <a
            href="https://shorturl.at/iJC0"
            target="_blank"
            rel="noopener noreferrer"
          >
            https://shorturl.at/iJC0
          </a>
        </>
      ),
    },
  ];

  return (
    <section className="py-5 text-secondary">
      <div className="container text-center">
        <h1 className="mb-4" style={{ color: "#141E46" }}>
          Conference Registration
        </h1>
        <p className="mb-4">
          <strong style={{color:'red'}}>Eligibility:</strong> Faculty members, research scholars,
          postgraduate students from AICTE-approved institutions, and industry
          professionals are eligible to apply.
        </p>
        <p className="mb-5">
          <strong style={{color:'red'}}>Registration Fee:</strong> Nil
        </p>

        <div className="d-flex flex-column align-items-center position-relative">
          {steps.map((step, idx) => (
            <div
              className="d-flex flex-column align-items-center mb-5 position-relative"
              key={idx}
              style={{ maxWidth: "500px", width: "100%" }}
            >
              {/* Icon */}
              <div
                className="text-white rounded-circle d-flex align-items-center justify-content-center mb-2"
                style={{ width: "60px", height: "60px", zIndex: 1 ,backgroundColor: "#141E46"}}
              >
                {idx + 1}
              </div>

              {/* Step content */}
              <h5 className="fw-bold" style={{ color: "#141E46" }}>{step.title}</h5>
              <p className="mb-0">{step.description}</p>

              {/* Arrow instead of line */}
              {idx !== steps.length - 1 && (
                <div
                  className="mt-2"
                  style={{ fontSize: "24px", lineHeight: "1" ,color: "#141E46"}}
                >
                  ↓↓
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConferenceRegistrationBootstrap;
