import React from "react";

const ContactHelpDeskSection = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        maxWidth: 1200,
        margin: "40px auto",
        padding: "0 20px",
        gap: "40px",
        flexWrap: "wrap",
      }}
    >
      {/* Left side: For Further Inquiries (styled similarly to right box) */}
      <div
        style={{
          flex: "1 1 45%",
          minWidth: 300,
          maxWidth: 600,
          margin: "40px auto",
          padding: 20,
          fontFamily: "'Poppins', sans-serif",
          background: "#f7f9fb",
          borderRadius: 10,
          boxShadow: "0 8px 24px rgba(31,45,61,0.12)",
          textAlign: "left",
          boxSizing: "border-box",
        }}
      >
        <h3 style={{ marginBottom: 20, textAlign: "center" }}>
          FOR FURTHER INQUIRIES, PLEASE CONTACT:
        </h3>

        <div>
          <p className="mb-3">Conference Secretariat,</p>
          <p className="mb-3">QUADNEXT-2026,</p>
          <p className="mb-3">NRI Institute of Technology,</p>
          <p className="mb-3">Pothavarappadu, Agiripalli Mandalam</p>
          <p className="mb-3">Krishna District, Andhra Pradesh, India</p>
          <p className="mb-3">
            <strong>Email:</strong>{" "}
            <a href="mailto:quadnext@nriit.edu.in">quadnext@nriit.edu.in </a>
            <br />
            <strong>Email:</strong>{" "}
            <a href="mailto:kvsrao@nriit.edu.in">kvsrao@nriit.edu.in </a>
          </p>
          <p className="mb-3">
            <strong>URL:</strong>{" "}
            <a
              href="http://www.nriit.edu.in/Quadnext"
              target="_blank"
              rel="noreferrer"
            >
              www.nriit.edu.in/Quadnext
            </a>
          </p>
        </div>
      </div>

      {/* Right side: College Help Desk */}
      <div
        style={{
          flex: "1 1 45%",
          minWidth: 300,
          maxWidth: 600,
          margin: "40px auto",
          padding: 20,
          fontFamily: "'Poppins', sans-serif",
          background: "#f7f9fb",
          borderRadius: 10,
          boxShadow: "0 8px 24px rgba(31,45,61,0.12)",
          textAlign: "center",
          boxSizing: "border-box",
        }}
      >
        {/* Perfect Circle Image */}
        <div
          style={{
            width: 160,
            height: 160,
            borderRadius: "50%",
            overflow: "hidden",
            border: "4px solid #34db95ff",
            margin: "0 auto 20px auto",
          }}
        >
          <img
            src="./Location/logo.jpg"
            alt="College"
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
            }}
          />
        </div>

        <h2 style={{ marginBottom: 24 }}>Conference Help Desk</h2>

        <section style={{ textAlign: "left" }}>
          <p>
            <strong>Email:</strong> quadnext@nriit.edu.in
          </p>
          <p>
            <strong>Working Hours:</strong> Mon - Sat, 9 AM to 4:30 PM IST
          </p>
           <p>
            <strong>Contact:</strong><strong>9441176980</strong>(Dr.T S Ravi Kiran)
            
          </p>
          <p>
             <strong>9440115556</strong>(Dr.K V Sambasiva rao)
          </p>
          <p>
            <strong>Address:</strong> NRI Institute of Technology, Agiripalli
            Rd, Vijayawada, Andhra Pradesh 521212
          </p>
        </section>
      </div>
    </div>
  );
};

export default ContactHelpDeskSection;
