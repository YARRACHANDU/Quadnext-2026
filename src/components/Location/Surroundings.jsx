import React from "react";

const surroundingsData = [
  {
    title: "NRI Institute of Technology Main Gate",
    imgUrl: "/Location/College Main Road.jpg",
  },
  {
    title: "College Campus",
    imgUrl: "/Location/College Campus.jpg",
  },
  {
    title: "College Front View",
    imgUrl: "/Location/College Front View.jpg",
  },
];

const Surroundings = () => {
  return (
    <div
      style={{
        height: "50vh", // full screen height
        display: "flex",
        flexDirection: "column",
        justifyContent: "center", // vertically center content
        fontFamily: "'Poppins', sans-serif",
        background: "#f7f9fc",
        padding: "10px", // reduced padding
      }}
    >
      <h1
        style={{
          textAlign: "center",
          marginBottom: "20px", // smaller gap
          fontSize: "1.8rem",
          color: "#1b1b1b",
        }}
      >
        Surroundings of NRI Institute of Technology
      </h1>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3, 1fr)", // exactly 3 columns
          gap: "15px", // reduced gap
          maxWidth: "900px", // smaller container width
          margin: "0 auto",
        }}
      >
        {surroundingsData.map(({ title, imgUrl }, idx) => (
          <div
            key={idx}
            style={{
              background: "white",
              borderRadius: "12px",
              boxShadow: "0 6px 18px rgba(0,0,0,0.08)",
              overflow: "hidden",
              transition: "transform 0.3s ease, box-shadow 0.3s ease",
              cursor: "pointer",
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.transform = "translateY(-5px)";
              e.currentTarget.style.boxShadow = "0 12px 24px rgba(0,0,0,0.12)";
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.transform = "translateY(0)";
              e.currentTarget.style.boxShadow = "0 6px 18px rgba(0,0,0,0.08)";
            }}
          >
            <div style={{ overflow: "hidden" }}>
              <img
                src={imgUrl}
                alt={title}
                style={{
                  width: "100%",
                  height: "200px", // smaller image height
                  objectFit: "cover",
                  transition: "transform 0.4s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
            <h3
              style={{
                padding: "10px",
                fontWeight: "600",
                fontSize: "1rem",
                color: "#333",
                textAlign: "center",
              }}
            >
              {title}
            </h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Surroundings;
