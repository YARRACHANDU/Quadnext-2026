import React, { useEffect, useState } from "react";

const content = {
  en: [
    ` Parvathaneni Brahmayya Siddhartha College of Arts & Science is the first institution established by the “Siddhartha Academy of General & Technical Education.” Founded in 1975 with just 200 students and 15 faculty members offering B.A and B.Com. programmes, the college has evolved into one of the premier institutions of higher learning in the state. For the academic year 2024-2025, it offers 31 undergraduate and postgraduate programmes, with a student strength of 3,912 and a faculty  team of 202. The college is widely recognised for its academic discipline and excellence, supported by the dedicated and philanthropic management of the Academy. It has enjoyed full academic autonomy since 1988-89 and has adistinguished faculty with extensive experience and competence.`,
  ],
  te: [
    `సిదాి ర్ా అక్నడమీ ఆఫ్ జనర్ల్ & టెకిాకల్ ఎడ్యుకేషన్" స్థాపంచిన మ ొద్ట సంసా పర్వత్నేని బ్రహమయు సిదాి ర్ా క్నల్లజ్ ఆఫ్ ఆర్ు్ & సైన్ట. 1975 లో స్థాపంచబడింద్ధ, కేవలం 200 మంద్ధ విదాురుాలు మరియు 15 మంద్ధ అధాుపకలు B.A ను అంద్ధస్సూనాారు. మరియు B.Com. ఈ కళాశల ర్గషరంలో ఉనాత్ విద్ుక ప్రధాన సంసాలలో ఒకటగా అభివృద్ధి చంద్ధంద్ధ. 2024-2025 విదాు సంవత్టర్గనికి, ఇద్ధ 31 అండర్ గ ్ర ాడ్యుయేట్ మరియు పోస్టు గ్రాడ్యుయేట్ ప్రోగ్రామేను అంద్ధస్సూ ంద్ధ, 3,912 మంద్ధ విదాురుాల బలం మరియు 202 మంద్ధ అధాుపక బృంద్ం. అక్నడమీ యొకక అంకిత్మైన మరియు దాత్ృత్వ నిర్వహణ్ మద్దతుతో ఈ కళాశల దాని విదాు క్రమశిక్షణ్ మరియు శ్రేషుత్క విసూృత్ంగా గురిూంపు పంద్ధంద్ధ. ఇద్ధ 1988-89 నుండి ప్యరిూ విదాు సవయంప్రతిపతిూని కలిగి ఉంద్ధ మరియు విసూృత్మైన అనుభవం మరియు స్థమర్ాయంతో విశిషుమైన అధాుపకలను కలిగి ఉంద్ధ. `,
  ],
};

const AboutPb = () => {
  const fullText =
    "PARVATHANENI BRAHMAYYA SIDDHARTHA COLLEGE OF ARTS & SCIENCE ";
  const [displayedText, setDisplayedText] = useState("");
  const [lang, setLang] = useState("en"); // default English
  const [fade, setFade] = useState(true);

  useEffect(() => {
    let index = 0;
    const interval = setInterval(() => {
      setDisplayedText(fullText.slice(0, index + 1));
      index++;
      if (index === fullText.length) clearInterval(interval);
    }, 100);

    return () => clearInterval(interval);
  }, []);

  const toggleLang = () => {
    setFade(false);
    setTimeout(() => {
      setLang((prev) => (prev === "en" ? "te" : "en"));
      setFade(true);
    }, 300);
  };

  return (
    <div
      style={{
        fontFamily: "'Poppins', sans-serif",
        color: "#141E46",
        minHeight: "100vh",
        width: "100vw",
        overflowX: "hidden",
      }}
    >
      {/* Banner */}
      <header
        style={{
          position: "relative",
          width: "100%",
          height: "60vh",
          backgroundImage: `linear-gradient(to bottom, rgba(255, 255, 255, 0.6), rgba(255, 255, 255, 0)),
           url('/Nri/pb1.webp')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "white",
          textAlign: "center",
          padding: "0 20px",
          boxShadow: "inset 0 0 0 1000px rgba(0, 0, 0, 0.4)",
          animation: "fadeIn 1.5s ease forwards",
          overflow: "hidden",
        }}
      >
        <h1
          style={{
            fontSize: "2.5rem",
            fontWeight: "700",
            lineHeight: "1.2",
            maxWidth: "900px",
            textShadow: "0 4px 15px rgba(0, 0, 0, 0.6)",
            userSelect: "none",
            opacity: displayedText.length ? 1 : 0,
            transition: "opacity 0.3s ease",
          }}
        >
          {displayedText}
        </h1>
      </header>

      {/* About Section */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "60px 20px 100px 20px",
          borderRadius: "30px 30px 0 0",
          opacity: fade ? 1 : 0,
          transition: "opacity 0.3s ease",
          transform: fade ? "translateY(0)" : "translateY(20px)",
          color: "#141E46",
          lineHeight: "1.75",
          fontSize: "1.15rem",
          textAlign: "justify",
          whiteSpace: "pre-line",
          marginTop: "5vh",
          position: "relative",
          zIndex: 5,
          backgroundColor: "transparent",
          width: "100%",
          boxSizing: "border-box",
        }}
      >
        <h2
          style={{
            fontSize: "2.2rem",
            fontWeight: "600",
            marginBottom: "15px",
            textAlign: "center",
            color: "#141E46",
          }}
        >
          About PB Siddhartha
        </h2>

        {/* Toggle Button Under Heading */}
        <div style={{ textAlign: "center", marginBottom: "30px" }}>
          <button
            onClick={toggleLang}
            style={{
              backgroundColor: lang === "en" ? "red" : "green",
              border: "none",
              padding: "8px 16px",
              borderRadius: "70px",
              cursor: "pointer",
              fontWeight: "400",
              color: "#ffffffff",
            }}
            aria-label="Toggle Language"
            title="Toggle English / Telugu"
          >
            {lang === "en" ? "తెలుగు" : "English"}
          </button>
        </div>
        <h2
          style={{
            fontSize: "1rem",
            fontWeight: "200",
            marginTop: "10px",
            textAlign: "center",
            color: "#141E46",
          }}
        >
          Official Website:
          <a href="https://www.pbsiddhartha.ac.in/">
            https://www.pbsiddhartha.ac.in/
          </a>{" "}
        </h2>
        {content[lang].map((paragraph, idx) => (
          <p key={idx} style={{ marginBottom: "20px" }}>
            {paragraph}
          </p>
        ))}
      </section>
    </div>
  );
};

export default AboutPb;
