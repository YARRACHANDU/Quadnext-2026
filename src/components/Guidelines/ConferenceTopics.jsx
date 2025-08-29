import React, { useState } from "react";

const OurTeam = () => {
  const [isTelugu, setIsTelugu] = useState(false);

  const toggleLanguage = () => setIsTelugu(!isTelugu);

  const topics =[
  {
    en: "Quantum Computing and Quantum Machine Learning",
    te: "క్వాంటమ్ కంప్యూటింగ్ మరియు క్వాంటమ్ మెషిన్ లెర్నింగ్",
    img: "../conferencetopicspics/1.webp",
  },
  {
    en: "Quantum Algorithms for Machine Learning",
    te: "మెషిన్ లెర్నింగ్ కోసం క్వాంటమ్ అల్గోరిథమ్స్",
    img: "../conferencetopicspics/2.webp",
  },
  {
    en: "Quantum-Classical Hybrid Computing Models",
    te: "క్వాంటమ్-క్లాసికల్ హైబ్రిడ్ కంప్యూటింగ్ మోడల్స్",
    img: "../conferencetopicspics/3.webp",
  },
  {
    en: "Quantum Optimization for Big Data Analytics",
    te: "బిగ్ డేటా అనాలిటిక్స్ కోసం క్వాంటమ్ ఆప్టిమైజేషన్",
    img: "../conferencetopicspics/4.webp",
  },
  {
    en: "Quantum-Enhanced Data Processing and Classification",
    te: "క్వాంటమ్-ఎన్హాన్స్డ్ డేటా ప్రాసెసింగ్ మరియు క్లాసిఫికేషన్",
    img: "../conferencetopicspics/5.webp",
  },
  {
    en: "Quantum Kernel Methods and Feature Engineering",
    te: "క్వాంటమ్ కర్నెల్ పద్ధతులు మరియు ఫీచర్ ఇంజనీరింగ్",
    img: "../conferencetopicspics/6.webp",
  },
  {
    en: "Quantum Internet and Next-Gen Communication",
    te: "క్వాంటమ్ ఇంటర్నెట్ మరియు తదుపరి తరం కమ్యూనికేషన్",
    img: "../conferencetopicspics/7.webp",
  },
  {
    en: "Artificial General Intelligence(AGI)",
    te: "కృత్రిమ సామాన్య మేధస్సు (AGI)",
    img: "../conferencetopicspics/8.webp",
  },
  {
    en: "Large Language Models and Generative AI",
    te: "లార్జ్ లాంగ్వేజ్ మోడల్స్ మరియు జనరేటివ్ AI",
    img: "../conferencetopicspics/9.webp",
  },
  {
    en: "Deep Learning Architectures and Applications",
    te: "డీప్ లెర్నింగ్ ఆర్కిటెక్చర్స్ మరియు అప్లికేషన్స్",
    img: "../conferencetopicspics/10.webp",
  },
  {
    en: "Explainable AI for Trustworthy Systems",
    te: "నమ్మదగిన సిస్టమ్స్ కోసం Explainable AI",
    img: "../conferencetopicspics/11.webp",
  },
  {
    en: "Ethical AI Design and Governance",
    te: "నైతిక AI డిజైన్ మరియు గవర్నెన్స్",
    img: "../conferencetopicspics/12.webp",
  },
  {
    en: "Human-Centered and Responsible AI",
    te: "మానవ-కేంద్రిత మరియు బాధ్యతాయుత AI",
    img: "../conferencetopicspics/13.webp",
  },
  {
    en: "Edge AI and Real-Time Decision Making",
    te: "ఎడ్జ్ AI మరియు రియల్-టైమ్ డిసిషన్ మేకింగ్",
    img: "../conferencetopicspics/14.webp",
  },
  {
    en: "Smart Sensors and Embedded Intelligence",
    te: "స్మార్ట్ సెన్సార్లు మరియు ఎంబెడెడ్ ఇంటెలిజెన్స్",
    img: "../conferencetopicspics/15.webp",
  },
  {
    en: "Neuromorphic Computing",
    te: "న్యూరోమార్ఫిక్ కంప్యూటింగ్",
    img: "../conferencetopicspics/16.webp",
  },
  {
    en: "Neuromorphic Chips for AI Acceleration",
    te: "AI వేగవంతం కోసం న్యూరోమార్ఫిక్ చిప్స్",
    img: "../conferencetopicspics/17.webp",
  },
  {
    en: "Brain-Computer Interfaces",
    te: "బ్రెయిన్-కంప్యూటర్ ఇంటర్‌ఫేస్‌లు",
    img: "../conferencetopicspics/18.webp",
  },
  {
    en: "AI in Genomics and Precision Medicine",
    te: "జెనోమిక్స్ మరియు ప్రిసిషన్ మెడిసిన్‌లో AI",
    img: "../conferencetopicspics/19.webp",
  },
  {
    en: "Quantum Material and Drug Discovery",
    te: "క్వాంటమ్ మెటీరియల్ మరియు డ్రగ్ డిస్కవరీ",
    img: "../conferencetopicspics/20.webp",
  },
  {
    en: "Quantum System Simulation with AI",
    te: "AIతో క్వాంటమ్ సిస్టమ్ సిమ్యులేషన్",
    img: "../conferencetopicspics/21.webp",
  },
  {
    en: "AI in Physics and Chemistry Innovations",
    te: "భౌతికశాస్త్రం మరియు రసాయనశాస్త్రంలో AI నవీకరణలు",
    img: "../conferencetopicspics/22.webp",
  },
  {
    en: "Applications in Finance, Healthcare & Logistics",
    te: "ఫైనాన్స్, హెల్త్‌కేర్ & లాజిస్టిక్స్‌లో అప్లికేషన్స్",
    img: "../conferencetopicspics/23.webp",
  },
  {
    en: "AI in Aerospace Navigation",
    te: "ఎయిరోస్పేస్ నావిగేషన్‌లో AI",
    img: "../conferencetopicspics/24.webp",
  },
  {
    en: "AI in Defense and Strategic Technologies",
    te: "డిఫెన్స్ మరియు స్ట్రాటజిక్ టెక్నాలజీస్‌లో AI",
    img: "../conferencetopicspics/25.webp",
  },
  {
    en: "AI for Climate Modeling and Sustainability",
    te: "క్లైమేట్ మోడలింగ్ మరియు సస్టెయినబిలిటీ కోసం AI",
    img: "../conferencetopicspics/26.webp",
  },
  {
    en: "Quantum Cryptography and Security",
    te: "క్వాంటమ్ క్రిప్టోగ్రఫీ మరియు సెక్యూరిటీ",
    img: "../conferencetopicspics/27.webp",
  },
  {
    en: "Quantum Cryptography and AI Security",
    te: "క్వాంటమ్ క్రిప్టోగ్రఫీ మరియు AI సెక్యూరిటీ",
    img: "../conferencetopicspics/28.webp",
  },
  {
    en: "Societal Impacts of Quantum AI Technologies",
    te: "క్వాంటమ్ AI టెక్నాలజీస్ యొక్క సామాజిక ప్రభావాలు",
    img: "../conferencetopicspics/29.webp",
  },
  {
    en: "Deep-Tech Startups and Innovation Ecosystems",
    te: "డీప్-టెక్ స్టార్టప్స్ మరియు ఇన్నోవేషన్ ఎకోసిస్టమ్స్",
    img: "../conferencetopicspics/30.webp",
  }
]


  return (
    <section
      className="text-secondary bg-light py-2"
      style={{
        minHeight: "100vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        flexDirection: "column",
        padding: "3rem 1rem",
      }}
    >
      <div className="container" style={{ maxWidth: 1200, width: "100%" }}>
        <div className="text-center w-100 mb-4">
          <h1 className="h2 fw-medium mb-3 text-dark">Conference Topics</h1>
          <button
            onClick={toggleLanguage}
            className="btn btn-primary mb-4"
            style={{
              marginTop: "30px",
              border: "none",
              borderRadius: "20px",
              backgroundColor: isTelugu ? "green" : "red",
            }}
          >
            {isTelugu ? "English" : "తెలుగు"}
          </button>
        </div>

        <div
          className="topics-grid"
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(250px, 1fr))",
            gap: "24px",
          }}
        >
          {topics.map((topic, index) => (
            <TopicCard
              key={index}
              imgSrc={topic.img}
              alt={isTelugu ? topic.te : topic.en}
              title={isTelugu ? topic.te : topic.en}
            />
          ))}
        </div>
      </div>

      <style>{`
        .hover-lift:hover {
          transform: translateY(-8px);
          box-shadow: 0 10px 20px rgba(0,0,0,0.12);
        }

        @media (max-width: 576px) {
          .topics-grid {
            grid-template-columns: 1fr;
          }
        }

        @media (min-width: 577px) and (max-width: 991px) {
          .topics-grid {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (min-width: 992px) {
          .topics-grid {
            grid-template-columns: repeat(3, 1fr);
          }
        }
      `}</style>
    </section>
  );
};

const TopicCard = ({ imgSrc, alt, title }) => (
  <div
    className="d-flex align-items-center border rounded p-3 h-100 hover-lift"
    style={{
      cursor: "pointer",
      transition: "transform 0.3s ease, box-shadow 0.3s ease",
      gap: "12px",
      flexDirection: "column",
      textAlign: "center",
    }}
  >
    <img
      src={imgSrc}
      alt={alt}
      className="rounded-circle bg-light mb-3"
      style={{ width: 64, height: 64, objectFit: "cover" }}
    />
    <h2 className="h5 mb-0 text-dark">{title}</h2>
  </div>
);

export default OurTeam;
