import React, { useState } from "react";
import "./AboutConference.css"; // Custom CSS

export default function AboutConference() {
  const [lang, setLang] = useState("en");

  const toggleLang = () => {
    setLang((prev) => (prev === "en" ? "te" : "en"));
  };

  const content = {
    en: [
      `Third International Conference on Quantum AI and Deep-Tech Innovations
      for Next-Gen Intelligence (QUADNEXT-2026) is scheduled from 
      February 6–7, 2026 at NRI Institute of Technology, Agiripalli, Vijayawada, India.`,
      `This event brings together academicians, research scholars, industry professionals,
      technologists, policymakers, and students from across the globe to share research outcomes and innovations.`,
      `QUADNEXT-2026 provides a unique platform for global experts to connect, bridging the gap
      between theory and practice through interdisciplinary and domain-specific approaches.`,
      `As the world advances toward next-gen intelligence, integrating quantum computing
      with AI and deep technologies unlocks unprecedented capabilities in automation, optimization,
      decision-making, and real-time problem-solving.`,
      `This conference fosters collaborations, shares breakthrough research, and deliberates
      on futuristic innovations in science, engineering, and technology.`,
      `Eminent keynote speakers from around the world will share their experiences and insights.
      We invite you to participate and make QUADNEXT-2026 a grand success.`
    ],
    te: [
      `క్వాంటం AI మరియు డీప్-టెక్ ఇన్నోవేషన్స్ పై అంతర్జాతీయ కాన్ఫరెన్స్
      నెక్ట్స్-జెన్ ఇంటెలిజెన్స్ (QUADNEXT-2026) ఫిబ్రవరి 6–7, 2026 న NRI ఇన్‌స్టిట్యూట్ ఆఫ్ టెక్నాలజీ, అగిరిపల్లి, విజయవాడ, ఇండియాలో నిర్వహించబడుతుంది.`,
      `ఈ ఈవెంట్‌లో ప్రపంచవ్యాప్తంగా నుండి అకాడెమిసియన్లు, పరిశోధకులు, పరిశ్రమ నిపుణులు,
      సాంకేతిక నిపుణులు, పాలసీ మేకర్స్ మరియు విద్యార్థులు పరిశోధనా ఫలితాలు మరియు ఇన్నోవేషన్స్‌ను పంచుకుంటారు.`,
      `QUADNEXT-2026 గ్లోబల్ ఎక్స్‌పర్ట్స్‌ను కనెక్ట్ చేయడానికి ప్రత్యేక వేదికను అందిస్తుంది, సిద్దాంతం మరియు ప్రాక్టీస్ మధ్య గ్యాప్‌ను అంతరవిద్యా మరియు డొమైన్-స్పెసిఫిక్ అప్లికేషన్ల ద్వారా భర్తీ చేస్తుంది.`,
      `ప్రపంచం నెక్ట్స్-జెన్ ఇంటెలిజెన్స్ వైపు ముందుకు వెళ్తున్నప్పుడు, AI మరియు డీప్ టెక్నాలజీస్‌తో క్వాంటం కంప్యూటింగ్‌ను ఇంటిగ్రేట్ చేయడం ఆటోమేషన్, ఆప్టిమైజేషన్,
      నిర్ణయాలు తీసుకోవడం మరియు రియల్-టైమ్ సమస్య పరిష్కారంలో అమితమైన సామర్థ్యాలను అన్లాక్ చేస్తుంది.`,
      `ఈ కాన్ఫరెన్స్ కలయికలను ప్రోత్సహిస్తుంది, సాంకేతిక విప్లవ పరిశోధనలను పంచుతుంది, మరియు భవిష్యత్తు ఇన్నోవేషన్స్ పై చర్చిస్తుంది.`,
      `ప్రఖ్యాత కీ నోట్ స్పీకర్స్ తమ అనుభవాలు మరియు అవగాహనలను పంచుకుంటారు.
      మేము మీరు పాల్గొని QUADNEXT-2026 ను విజయం పరచాలని ఆహ్వానిస్తున్నాము.`
    ]
  };

  return (
    <section className="about-conference py-5 text-secondary">
      <div className="container">
        <h1 className="fw-bold display-5 mb-3 text-center about-conference">
          About The Conference
        </h1>

        {/* Toggle Button */}
        <div className="text-center mb-4">
          <button
            onClick={toggleLang}
            style={{
              backgroundColor: lang === "en" ? "red" : "green",
              border: "none",
              padding: "8px 12px",
              borderRadius: "20px",
              cursor: "pointer",
              fontWeight: "600",
              color: "#ffffffff",
            }}
          >
            {lang === "en" ? "తెలుగు" : "English"}
          </button>
        </div>

        <div className="conference-content d-flex flex-column flex-lg-row align-items-center">
          {/* Image */}
          <div className="conference-image-wrapper mb-4 mb-lg-0 me-lg-4">
            <img
              src="./conference.webp"
              alt="QUADNEXT-2026 Conference Event"
              className="conference-image img-fluid rounded shadow"
            />
          </div>

          {/* Text */}
          <div className="conference-text">
            {content[lang].map((paragraph, idx) => (
              <p key={idx} className="lead">{paragraph}</p>
            ))}
          </div>
        </div>
      </div>
  <section className="text-secondary py-5">
  <div className="container">
    <div className="row gy-5 justify-content-center">
      
      {/* First card (left) */}
      <div className="col-md-6 d-flex justify-content-center">
        
        <div className="card shadow-sm mx-2" style={{ maxWidth: "800px" }}>
          <h1 style={{textAlign:'center',marginLeft:'10px'}}>1st conference</h1>
          <div className="row g-0 align-items-center">
            <div className="col-md-6">
              
              <img
                src="./logo1c.png"
                className="img-fluid w-100 h-100 object-fit-cover rounded-4"
                alt="hero"
              />
            </div>
            <div className="col-md-6 d-flex flex-column justify-content-center text-center p-4">
              <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                <a href="./reports/1report.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg w-75 rounded-3"  style={{backgroundColor:"#141E46"}}>
                  Report
                </a>
                <a href="./reports/1sov.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg w-75 rounded-3" style={{backgroundColor:"#141E46"}}>
                  Souvenir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Second card (right) */}
      <div className="col-md-6 d-flex justify-content-center">
        <div className="card shadow-sm mx-2" style={{ maxWidth: "800px" }}>
          <h1 style={{textAlign:'center',marginLeft:'10px'}}>2nd conference</h1>
          <div className="row g-0 align-items-center">
            <div className="col-md-6" >
              <img
                src="./logo2c.png"
                className="img-fluid w-100 h-100 object-fit-cover rounded-4"
                alt="hero"
               
              />
            </div >
            <div className="col-md-6 d-flex flex-column justify-content-center text-center p-4" >
              <div className="d-flex flex-column justify-content-center align-items-center gap-3">
                <a href="./reports/2report.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-primary btn-lg w-75 rounded-3" style={{backgroundColor:"#141E46"}}>
                  Report
                </a>
                <a href="./reports/2sov.pdf" target="_blank" rel="noopener noreferrer" className="btn btn-dark btn-lg w-75 rounded-3" style={{backgroundColor:"#141E46"}}>
                  Souvenir
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>




    </section>
    
  );
}
