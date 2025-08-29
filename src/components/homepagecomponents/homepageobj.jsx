import React, { useState } from "react"; // we'll put the toggle styles here

const Objectives = () => {
  const [lang, setLang] = useState("en");

  const translations = {
    items: [
      {
        id: 1,
        en: "To explore the convergence of Quantum Computing, Artificial Intelligence, and Deep Technologies.",
        te: "క్వాంటం కంప్యూటింగ్, కృత్రిమ మేధస్సు మరియు డీప్ టెక్నాలజీల కలయికను అన్వేషించడం.",
        iconPath: "M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z",
      },
      {
        id: 2,
        en: "To provide a platform for knowledge exchange between academia, industry, and research communities.",
        te: "అకాడెమియా, పరిశ్రమ మరియు పరిశోధన సమాజాల మధ్య జ్ఞాన మార్పిడికి వేదికను అందించడం.",
        iconPath: "M22 12h-4l-3 9L9 3l-3 9H2",
      },
      {
        id: 3,
        en: "To showcase cutting-edge innovations and applications in healthcare, cybersecurity, finance, space, and beyond.",
        te: "హెల్త్‌కేర్, సైబర్‌ సెక్యూరిటీ, ఫైనాన్స్, స్పేస్ మరియు దాని దాటి అత్యాధునిక ఆవిష్కరణలు మరియు అప్లికేషన్‌లను ప్రదర్శించడం.",
        iconPaths: [
          "M12 5a3 3 0 1 1 0 6 3 3 0 0 1 0-6z",
          "M12 22V8M5 12H2a10 10 0 0 0 20 0h-3",
        ],
      },
      {
        id: 4,
        en: "To encourage collaborative R&D initiatives in emerging technology ecosystems.Boost them",
        te: "ఎమర్జింగ్ టెక్నాలజీ ఎకోసిస్టమ్‌లలో సహకార R&D కార్యక్రమాలను ప్రోత్సహించడం.",
        iconPaths: [
          "M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2",
          "M12 7a4 4 0 1 0 0-8 4 4 0 0 0 0 8z",
        ],
      },
      {
        id: 5,
        en: "To highlight policy, ethical, and societal implications of Quantum AI and Deep-Tech solutions.",
        te: "క్వాంటం AI మరియు డీప్-టెక్ సొల్యూషన్‌ల విధానం, నైతిక మరియు సామాజిక ప్రభావాలను హైలైట్ చేయడం.",
        iconPath: "M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z",
      },
      {
        id: 6,
        en: "To promote interdisciplinary and industry-academia partnerships for creating robust and future-oriented learning ecosystems",
        te: "దృఢమైన మరియు భవిష్యత్‌ దృష్టి కలిగిన లెర్నింగ్ ఎకోసిస్టమ్‌లను సృష్టించడానికి ఇంటర్‌డిసిప్లినరీ మరియు ఇండస్ట్రీ-అకాడెమియా భాగస్వామ్యాలను ప్రోత్సహించడం.",
        iconPath: "M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4z",
      },
    ],
  };

  return (
    <section
      className="text-secondary d-flex flex-column justify-content-center align-items-center"
      style={{
        minHeight: "90vh",
        width: "100vw",
        backgroundColor: "#0b2743ff",
        paddingLeft: "20px",
        paddingRight: "20px",
        position: "relative",
      }}
    >
      {/* Toggle Button */}
  <div style={{
    position: "absolute",
    top: "20px",
    right: "20px"
  }}>
    <label className="switch">
      <input
        type="checkbox"
        checked={lang === "te"}
        onChange={(e) => setLang(e.target.checked ? "te" : "en")}
      />
      <span className="slider round">
        {lang === "te" ? "English" : "Telugu"}
      </span>
    </label>
  </div>

      <h1
        className="mb-5 fw-bold text-center"
        style={{ fontSize: "2.5rem", color: "#ffffffff" }}
      >
        Objectives
      </h1>

      <div
        style={{
          maxWidth: "900px",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-start",
        }}
      >
        {translations.items.map(({ id, en, te, iconPath, iconPaths }) => (
          <div
            key={id}
            style={{
              display: "flex",
              alignItems: "flex-start",
              justifyContent: "center",
              marginBottom: "20px",
              maxWidth: "800px",
              width: "100%",
            }}
          >
            <div
              className="rounded-circle d-flex align-items-center justify-content-center flex-shrink-0"
              style={{
                width: "70px",
                height: "70px",
                backgroundColor: "#141E46",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="#ffffff"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                viewBox="0 0 24 24"
                style={{ width: "28px", height: "28px" }}
              >
                {iconPath ? (
                  <path d={iconPath}></path>
                ) : (
                  iconPaths?.map((path, idx) => (
                    <path key={idx} d={path}></path>
                  ))
                )}
              </svg>
            </div>
            <div
              className="ms-3"
              style={{
                color: "#fff",
                maxWidth: "600px",
              }}
            >
              <p className="mb-0">{lang === "en" ? en : te}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Objectives;
