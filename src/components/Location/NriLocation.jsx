import React from "react";

const NriLocation = () => {
  const addressLines = [
    "NRI Institute of Technology,",
    "Pothavarappadu,",
    "Agiripalli Mandalam, Krishna District,",
    "Andhra Pradesh, India",
    "Pin - 521212",
  ];

  const lat = 16.66327986299729;
  const lng = 80.73777642559249;

  return (
    <div className="location-root">
      <div className="location-inner">
        {/* LEFT: Address text + Boy pulling cart */}
        <div
          className="left-panel"
          style={{ flexDirection: "column", alignItems: "center" }}
        >
          {/* Address Section in white space */}
          <div style={{ marginBottom: "100px", textAlign: "center",marginTop:'160px' }}>
            <h2
              style={{
                fontSize: "30px",
                fontWeight: "700",
                color: "#1b1b1b",
              }}
            >
               Venue
            </h2>
            {addressLines.map((line, i) => (
              <div
                key={i}
                style={{
                  fontSize: "20px",
                  fontWeight: "500",
                  color: "rgba(48, 47, 47, 1)",
                  lineHeight: "1.6",
                }}
              >
                {line}
              </div>
            ))}
          </div>

          {/* Boy + Cart Animation */}
          <div className="scene">
            <div className="cart-animation">
              {/* Boy */}
              <svg
                viewBox="0 0 120 160"
                width="120"
                height="160"
                style={{ marginBottom: "-10px", marginRight: "-15px" }}
              >
                <circle cx="50" cy="25" r="12" fill="#ffc9a3" />
                <ellipse cx="50" cy="20" rx="14" ry="12" fill="#3c2a1e" />
                <rect
                  x="43"
                  y="37"
                  width="14"
                  height="32"
                  rx="4"
                  fill="#3498db"
                  transform="rotate(-5 50 50)"
                />
                <rect
                  x="35"
                  y="38"
                  width="8"
                  height="26"
                  rx="4"
                  fill="#ffc9a3"
                />
                <rect
                  x="57"
                  y="38"
                  width="8"
                  height="26"
                  rx="4"
                  fill="#ffc9a3"
                />
                <rect
                  x="45"
                  y="68"
                  width="7"
                  height="30"
                  rx="3"
                  fill="#2c3e50"
                />
                <rect
                  x="52"
                  y="68"
                  width="7"
                  height="30"
                  rx="3"
                  fill="#2c3e50"
                />
                <rect x="44" y="96" width="11" height="6" rx="2" fill="#111" />
                <rect x="51" y="96" width="11" height="6" rx="2" fill="#111" />
              </svg>

              {/* Rope */}
              <div className="rope" />

              {/* Cart */}
              <div className="cart">
                <div className="plank floating">
                  {addressLines.map((line, i) => (
                    <div key={i} className="plank-line">
                      {line}
                    </div>
                  ))}
                </div>
                <div className="wheel left-wheel" />
                <div className="wheel right-wheel" />
              </div>
            </div>
          </div>
        </div>

        {/* RIGHT: Map */}
        <div className="right-panel">
          <iframe
            title="NRI Institute of Technology Location"
            className="map-frame"
            src={`https://www.google.com/maps?q=${lat},${lng}&z=14&output=embed`}
            loading="lazy"
            allowFullScreen
          />
        </div>
      </div>

      <style>{`
        .location-root {
          height: 100vh;
          width: 100vw;
          font-family: "Poppins", sans-serif;
          background: linear-gradient(180deg, #f7f9fb, #eef3f7);
          overflow: hidden;
        }
        .venue-title {
          position: absolute;
          top: 14px;
          left: 50%;
          transform: translateX(-50%);
          z-index: 30;
          background: rgba(255,255,255,0.95);
          padding: 10px 18px;
          border-radius: 10px;
          box-shadow: 0 6px 18px rgba(253, 254, 255, 0.12);
          font-size: 22px;
          font-weight: 700;
        }
        .location-inner {
          display: flex;
          height: 100%;
        }
        .left-panel, .right-panel {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .scene {
          width: 100%;
          height: 80%;
          display: flex;
          align-items: flex-middle;
          justify-content: center;
          padding-top: 50px;
          overflow: hidden;
        }
        .cart-animation {
          display: flex;
          align-items: flex-end;
          gap: 12px;
          animation: moveCart 6s ease-in-out infinite alternate;
        }
        .rope {
          width: 100px;
          height: 4px;
          background: #b58b50;
          border-radius: 60px;
          margin-bottom: 70px;
        }
        .cart {
          position: relative;
          min-width: 260px;
          padding: 16px 20px;
          background: linear-gradient(180deg, #c89b6a, #a87449);
          border-radius: 10px;
          box-shadow: 0 12px 30px rgba(31,45,61,0.1);
          margin-bottom: 10px;
        }
        .plank-line {
          font-size: 18px;
          font-weight: 600;
          color: #1b1b1b;
          text-align: center;
        }
        .floating {
          animation: floatBox 3s ease-in-out infinite;
        }
        @keyframes floatBox {
          0%, 100% { transform: translateY(0px); }
          50% { transform: translateY(-8px); }
        }
        .wheel {
          width: 26px;
          height: 26px;
          background: radial-gradient(circle at 40% 30%, #ffffffff, #222);
          border-radius: 50%;
          position: absolute;
          bottom: -14px;
          box-shadow: inset -3px -3px 8px rgba(0,0,0,0.4);
          animation: spin 3s linear infinite;
        }
        .left-wheel { left: 18px; }
        .right-wheel { right: 18px; }
        @keyframes spin {
          to { transform: rotate(360deg); }
        }
        @keyframes moveCart {
          0% { transform: translateX(-25%); }
          100% { transform: translateX(25%); }
        }
        .map-frame {
          width: 100%;
          height: 100%;
          border: 0;
        }
        @media (max-width: 900px) {
          .location-inner { flex-direction: column; }
          .scene { height: 45%; padding-top: 20px; }
        }
      `}</style>
    </div>
  );
};

export default NriLocation;
